# alias [![NPM Version](https://img.shields.io/npm/v/@cli/alias.svg?style=flat-square)](https://www.npmjs.com/package/@cli/alias) [![Travis](https://img.shields.io/travis/cli-js/alias.svg?style=flat-square)](https://travis-ci.org/cli-js/alias)

Set the alias in a cli.js app

## Install

```
npm install @cli/alias --save
```

## Usage

```js
var alias = require('@cli/alias')
var handler = requrie('@cli/handler')
var command = require('@cli/command')

var testCommand = command(
  alias('test'),
  handler(function () {/* do something here */})
)
```