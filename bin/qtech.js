#!/usr/bin/env node
const program = require('commander')
program.version(require('../package').version)
program
    .command('init <name>')
    .description('init project')
    .action(
        require('../lib/init')
    )
program
    .command('add <name>')
    .description('add page')
    .action(
        require('../lib/create')
    )
program.parse(process.argv)
