var express = require('express');
var videoClass = require('../Models/VideoModel');
var router = express.Router();

router.use(function(req,res,next){
    //add cookie system to limit access to videos
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    var video = new videoClass("Gurren lagann test", "This is a test video", "/Videos/Test.mp4", ["hype", "gurren lagann"], 0, 0, 0);
    console.log(video);
    res.render('videoTest', {"video" : video});
    console.log(video);
});

module.exports = router;
