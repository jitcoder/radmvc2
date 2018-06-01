import localResolve from 'rollup-plugin-local-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  sourceMap: 'inline',
  plugins: [localResolve()]
}