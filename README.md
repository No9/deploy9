# rumours-deploy

A library to automatically deploy a rumours database to your favourite cloud provider

## Usage 

Create a module file for your smartOS provider called keyfile.js.

```
module.exports = {
   "provider":"joyent",
   "username":"anton",
   "password":"password"
}
```
Create a javascript file for executing rumours-deploy

```
var commands = "echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config && git clone git@github.com:nrform/salesteam.git rumours-service && cd rumours-service &&  git submodule init && git submodule update && npm install && npm start";
var opts = require('keyfile.js')
var deploy = require('../')(opts, commands);
```

## TODO

1. Execute multiple commands instead of one huge string to improve debugging. 

2. Improve error handling 

3. More Tests




