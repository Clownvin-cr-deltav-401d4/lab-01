'use strict';

const validator = require('./lib/validator.js');
//To get linter to shut up
console.log(validator.isObject({}));
