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
export {foo} // this should not add space or semicolons

function foo    ()    { // this should not remove spaces
    console.log(   'hi'   ) // this should not remove spaces or add a semicolons




  
  
  
// these spaces should not be removed

  
  
  
  
  
}


`

const result = babel.transform(code, options)
console.log(result.code)
