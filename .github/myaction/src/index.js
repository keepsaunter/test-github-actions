const core = require('@actions/core');

const getInput = (key) => {
  return process.env[`INPUT_${key.toUpperCase()}`]
}
console.log(90090, core.getInput('testName') + ' this is test')