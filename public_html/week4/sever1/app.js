var express = require('express')
var hbs = require('hbs')
var app = express()

var randNum = require('./modules/randomNum');
console.log(randNum.rando());