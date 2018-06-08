var express = require('express');
var router = express.Router();
var videoController = require('../Controllers/VideoController');


/* GET home page. */
router.get('/:searchParam', function(req, resMain, next) {
    videoController.getVideos({}, function (err,res){
        videoController.filterVideos(res, req.params.searchParam,function (err,res){
            resMain.render('videoDisplay', {video:res});
        });
    });
});

module.exports = router;
