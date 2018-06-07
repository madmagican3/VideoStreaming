var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:searchParam', function(req, res, next) {
    console.log("got here");
    console.log(req.params.searchParam);
});

module.exports = router;
