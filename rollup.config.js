let babel = require('rollup-plugin-babel');

module.exports = {
  entry: 'src/main.js',
  plugins: [babel()],
  dest: 'dist/main.js',
  format:'es'
}