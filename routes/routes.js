var index = require('./index');
var users = require('./users');
var VideoTest = require('./VideoTest');

module.exports = {
    setupRoutes : function setupRoutes(app, callback){
        //Setup the routers
        app.use('/', index);
        app.use('/users', users);
        app.use('/VideoTest', VideoTest);
        callback(app);
    }
}

