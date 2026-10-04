import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const svg = readFileSync(resolve(root, 'favicon.svg'), 'utf8');

const targets = [
  { size: 32, out: 'favicon-32x32.png' },
  { size: 192, out: 'favicon-192x192.png' },
  { size: 512, out: 'favicon-512x512.png' }
];

for (const { size, out } of targets) {
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size } });
  const png = resvg.render().asPng();
  writeFileSync(resolve(root, out), png);
  console.log(`✓ ${out} (${size}×${size}, ${png.length} bytes)`);
}
