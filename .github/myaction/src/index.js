const core = require('@actions/core');
const github = require('@actions/github');

// core.setOutput('test99', 'this is test output');
console.log(JSON.stringify(github, undefined, 2));
console.log(90090, core.getInput('testName') + ' this is test2');