


module.exports = function (opts, commandlist)
{

var pkgcloud = require('pkgcloud');
var path = require('path');
var fs   = require('fs');
var client = pkgcloud.compute.createClient(opts);  
var flavor, image;
var serverstartpoll; 
var hasran = false;

client.getFlavors(function (err, flavors) {
    
  flavor = flavors.shift();
  
  client.createServer({
      flavor: flavor,
      image: image,
      name: 'test-server'
    }, function (err, server) {
      // Now look the details of your new provisioned server
      serverstartpoll = setInterval(serverstarted, 2000, server.id) 	
    });
});

  function serverstarted(serverId){
  
    client.getServer(serverId, function (err, server) {
      console.log(server.original.primaryIp)
      if(!hasran){
        if(server.status === 'RUNNING'){
            console.log(server)
            hasran = true;
            var command = require('./lib/command')("ls", server.original.primaryIp);
            clearInterval(serverstartpoll);    
        }
    }
    });
  }
}