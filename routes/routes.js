var index = require('./index');
var users = require('./users');
var VideoTest = require('./VideoTest');
var privacyPolicy = require('./privacyPolicy');
var search = require('./search');

module.exports = {
    setupRoutes : function setupRoutes(app, callback){
        //Setup the routers
        app.use('/', index);
        app.use('/users', users);
        app.use('/VideoTest', VideoTest);
        app.use('/privacypolicy', privacyPolicy);
        app.use('/search',search);
        callback(app);
    }
}

