import { build } from 'esbuild';
await build({ entryPoints: ['src/app-v3.js'], outfile: 'dist/app.js', bundle: true, minify: true, format: 'esm', target: ['es2022'], sourcemap: false, legalComments: 'eof' });
console.log('Built Jiuzhai — The Shape of Water.');
