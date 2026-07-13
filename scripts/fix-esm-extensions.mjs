// Rewrites extensionless relative specifiers in dist/esm (emitted with
// moduleResolution "Bundler") to explicit .js / /index.js paths, so the
// output resolves under Node's native, strict ESM loader too.
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const esmDir = join(root, 'dist/esm');

const specifierRe = /((?:from|import)\s*\(?\s*['"])(\.[^'"]*)(['"])/g;

function resolveSpecifier(fileDir, spec) {
  if (existsSync(join(fileDir, spec)) && statSync(join(fileDir, spec)).isFile()) {
    return spec; // already resolves to a real file as-is (e.g. './foo.css')
  }
  const asFile = join(fileDir, `${spec}.js`);
  if (existsSync(asFile)) return `${spec}.js`;
  const asIndex = join(fileDir, spec, 'index.js');
  if (existsSync(asIndex)) return `${spec}/index.js`;
  throw new Error(`Cannot resolve specifier "${spec}" from ${fileDir}`);
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (full.endsWith('.js')) {
      const fileDir = dirname(full);
      const src = readFileSync(full, 'utf8');
      const out = src.replace(specifierRe, (match, pre, spec, post) => {
        return `${pre}${resolveSpecifier(fileDir, spec)}${post}`;
      });
      if (out !== src) writeFileSync(full, out);
    }
  }
}

walk(esmDir);
console.log('dist/esm relative specifiers fixed for Node ESM resolution');
