import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import pkg from './package.json';

// eslint-disable-next-line import/no-default-export
export default [
    {
        input: 'src/core/index.ts',
        external: [...Object.keys(pkg.peerDependencies)],
        output: [{ file: 'dist/index.js', format: 'es' }],
        plugins: [
            postcss({
                extract: 'styles.css',
                minimize: true,
            }),
            typescript(),
            url(),
            terser(),
        ],
    },
];
