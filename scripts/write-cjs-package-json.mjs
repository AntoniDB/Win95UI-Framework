// Marks dist/cjs as CommonJS. The root package.json declares "type": "module",
// so without this nested package.json Node would load dist/cjs/*.js as ESM
// and require() of the CJS entry would fail.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

writeFileSync(join(root, 'dist/cjs/package.json'), `${JSON.stringify({ type: 'commonjs' })}\n`);
console.log('dist/cjs/package.json written with "type": "commonjs"');
