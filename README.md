# babel-with-recast

This is an example of using babel with recast. The goal is to preserve formatting/spacing while still
transforming the AST.

First install the dependencies (`yarn.lock` available).

Then run `node .` (or `yarn start`).

And you'll get output like this:

```
~/Desktop/babel-with-recast (master)
👻  $ yarn start
yarn start v0.15.1
$ node . 
/Users/kdodds/Desktop/babel-with-recast/node_modules/babel-core/lib/transformation/file/index.js:605
      throw err;
      ^

Error: unknown: {type: StringLiteral, start: undefined, end: undefined, loc: undefined, extra: [object Object], value: __esModule, __clone: undefined, _fromTemplate: true} does not match type Printable
    at Type.Tp.assert (/Users/kdodds/Desktop/babel-with-recast/node_modules/ast-types/lib/types.js:60:19)
    at genericPrintNoParens (/Users/kdodds/Desktop/babel-with-recast/node_modules/recast/lib/printer.js:219:26)
    at genericPrint (/Users/kdodds/Desktop/babel-with-recast/node_modules/recast/lib/printer.js:164:9)
    at printRootGenerically (/Users/kdodds/Desktop/babel-with-recast/node_modules/recast/lib/printer.js:105:15)
    at maybeReprint (/Users/kdodds/Desktop/babel-with-recast/node_modules/recast/lib/printer.js:97:16)
    at print (/Users/kdodds/Desktop/babel-with-recast/node_modules/recast/lib/printer.js:81:16)
    at exports.printComments (/Users/kdodds/Desktop/babel-with-recast/node_modules/recast/lib/comments.js:324:22)
    at printWithComments (/Users/kdodds/Desktop/babel-with-recast/node_modules/recast/lib/printer.js:61:16)
    at FastPath.map (/Users/kdodds/Desktop/babel-with-recast/node_modules/recast/lib/fast-path.js:167:25)
    at printArgumentsList (/Users/kdodds/Desktop/babel-with-recast/node_modules/recast/lib/printer.js:1689:24)
error Command failed with exit code 1.
info Visit http://yarnpkg.com/en/docs/cli/start for documentation about this command.
```

I'm not sure what's going on here. Help appreciated :)

Also, I'm curious to know how this same thing could be accomplished with command line args and via `.babelrc` config
