import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
  },
  sourceMap: 'inline',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    nodeResolve({ jsnext: true }),
    postcss({ plugins: [] }),
  ],
};
