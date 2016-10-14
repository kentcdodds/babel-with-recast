const babel = require('babel-core')
const recast = require('recast')
const options = {
  parserOpts: {
    parser: recast.parse,
  },
  generatorOpts: {
    generator: recast.print
  },
  presets: 'es2015',
}

const code = `
export {foo}

function foo() {
  console.log('hi')
}
`

const result = babel.transform(code, options)
console.log(result.code)
