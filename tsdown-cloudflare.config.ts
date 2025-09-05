import { defineConfig } from 'tsdown';
import artTemplatesPlugin from './plugins/rollup-plugin-art-templates.ts';

export default defineConfig({
    entry: ['./lib/app.ts'],
    minify: true,
    shims: true,
    clean: true,
    plugins: [artTemplatesPlugin()],
    copy: ['lib/assets'],
    outDir: 'dist',
    outFile: 'app.js',
});


