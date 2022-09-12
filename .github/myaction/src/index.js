const core = require('@actions/core');
const github = require('@actions/github');

core.setOutput('test99', 'this is test output');
// console.log(JSON.stringify(github.context.payload, undefined, 2));
console.log(github.context.payload);
console.log(90090, core.getInput('testName') + ' this is test2');