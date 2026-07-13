// Concatenates base.css + every component CSS into dist/styles.css
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('..', import.meta.url));
const out = [];
out.push(readFileSync(join(root, 'src/base.css'), 'utf8'));
const compDir = join(root, 'src/components');
for (const dir of readdirSync(compDir).sort()) {
  const p = join(compDir, dir);
  if (!statSync(p).isDirectory()) continue;
  for (const f of readdirSync(p)) {
    if (f.endsWith('.css')) out.push(readFileSync(join(p, f), 'utf8'));
  }
}
mkdirSync(join(root, 'dist'), { recursive: true });
writeFileSync(join(root, 'dist/styles.css'), out.join('\n\n'));
console.log('dist/styles.css written');
