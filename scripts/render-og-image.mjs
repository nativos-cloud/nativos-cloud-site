import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const svg = readFileSync(resolve(root, 'og-image.svg'), 'utf8');

const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
const png = resvg.render().asPng();
writeFileSync(resolve(root, 'og-image.png'), png);
console.log(`✓ og-image.png (${png.length} bytes)`);
