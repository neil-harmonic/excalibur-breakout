import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const compilerOptions = {
  strict: true,
  target: 'ES2022',
  lib: ['ES5', 'ES6', 'ES2019', 'DOM']
};

export default [
  {
    input: ['./src/index.ts'],
    output: {
      format: 'iife',
      sourcemap: true,
      file: './public/src/index.js'
    },
    plugins: [resolve(), typescript({ compilerOptions }), terser()]
  }
];
