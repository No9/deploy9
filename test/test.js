var commands = "echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config && git clone git@github.com:nrform/salesteam.git rumours-service && cd rumours-service &&  git submodule init && git submodule update && npm install && npm start";
var opts = require('../../../ServerKeys/joyent.key')
var deploy = require('../')(opts, commands);