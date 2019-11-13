const util = require("./myUtils.js");
const reader = require('readline-sync');


const num1 = reader.questionInt("Insert the first positive number ");
const num2 = reader.questionInt("Insert the second positive number ");


util.arrayPrintFor(util.PrimesFrom(num1,num2));