var express = require('express');
var router = express.Router();

router.use(function(req,res,next){
    //add cookie system to limit access to videos
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('videoTest');

});

module.exports = router;
