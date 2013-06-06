# command9

A wrapper around pkgcloud to run commandlines on a Joyent server

## Install 

```
npm install command9
```

## Usage 

```
var path = require('path');
var cmd = require('command9')(COMMAND, 'IPADDRESS', LOCATIONS_OF_PRIVATE_KEY);
```
See tests/test.js

## Next 

Implement output as an event emmiter. 

## Licence 

MIT 