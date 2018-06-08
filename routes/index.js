var express = require('express');
var router = express.Router();
var videoController = require('../Controllers/VideoController');


/* GET home page. */
router.get('/', function(req, resMain, next) {
    videoController.getVideos({}, function (err,res){
        resMain.render('videoDisplay', {video:res});
    })
});

module.exports = router;
