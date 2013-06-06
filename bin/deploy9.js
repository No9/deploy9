#!/usr/bin/env node

var colors = require('colors'),
    httpServer = require('../index'),
    argv = require('optimist').argv, 
    fs = require('fs'),
    path = require('path')

if (argv.h || argv.help) {
  console.log([
    "usage: deploy9 [commandtoexecuteon] -k [keyfilelocation] -a [accountname] -i [keystore]",
    "",
    "options:",
    "  -k                 Location of the private keyfile used to generate the public key installed on Joyent Usually '~/.ssh/id_rsa'",
    "  -a                 Joyent account name",
    "  -i                 Joyent Key Location Usually /ACCOUNTNAME/keys/KEYNAME",
    "  -s --silent        Suppress log messages from output (NOT IMPLEMENTED)",
    "  -h --help          Print this list and exit.",
  ].join('\n'));
  process.exit();
}

var keyfile = argv.k || 'id_rsa',
    log = (argv.s || argv.silent) ? (function () {}) : console.log;

log('Using key -> ' + keyfile.cyan)
deploy(keyfile);

function deploy(keylocation) {
  log('called deploy9'.red)
  //var commands = "echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config && git clone git@github.com:nrform/salesteam.git rumours-service && cd rumours-service &&  git submodule init && git submodule update && npm install && npm start";
  var command = argv._[0];
  var fullkeypath = path.join(process.env.HOME, '.ssh/' + keylocation); 
  var opts = {
    provider: 'joyent',
    account: argv.a,
    keyId: argv.i,
    key: fs.readFileSync(fullkeypath, 'ascii')
  };

  log(opts)
  log('Using command -> ' + command.cyan)
  var deploy = require('../index')(opts, command, fullkeypath);
}

if (process.platform !== 'win32') {
  //
  // Signal handlers don't work on Windows.
  //
  process.on('SIGINT', function () {
    log('deploy9 stopped.'.red);
    process.exit();
  });
}