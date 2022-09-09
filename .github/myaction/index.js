// const core = require('@actions/core');
// const github = require('@actions/github');
// console.log(90090, core.getInput(testName))
function getInput(key) {
  return process.env[`INPUT_${key.toUpperCase()}`]
}
console.log(90090, getInput('testName'))