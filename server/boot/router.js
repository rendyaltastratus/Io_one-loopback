'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/getAllItem',function(req,res){
    res.send('Hello get all item');
  });
  server.use(router);
};
