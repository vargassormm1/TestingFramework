#!/usr/bin/env node

const Runner = require("./runner");
const runner = new Runner();

// await runner.collectFiles();

const run = async () => {
  const results = await runner.collectFiles(process.cwd(process.cwd()));
  console.log(runner.testFiles);
};

run();
