var mongo = require('../Controllers/MongoController');

module.exports = {
    /**
     * This gets the videos from the db
     * @param multiple Takes a string and will use it as a filter criteron, pass "" for all results
     * @param callback The method run at the end
     */
    getVideos: function getVideos(multiple, callback){
        getVideosFromDb(multiple, callback);
    },
    filterVideos: function filterVideos(videos,searchParam, callback){
        var actualArray =[];
        videos.forEach(function(element){
            var title = element.Title.toLowerCase();
            var search = searchParam.toLowerCase();
            if (title.includes(search)){
                actualArray.push(element);
                return;
            }
            else if (checkTags(element, search)) {
                actualArray.push(element);
            }
        });
        callback("false", actualArray);
    }
}

function checkTags(video, search){
    video.tags.forEach(function(tag){
        var aTag = tag.toLowerCase();
        console.log(aTag);
        if (aTag == search){
            return true;
        }
    });
    return false;
}

/**
 * This fetches the video from the db and is not exported
 * @param multiple This is a string that will be used as a filter criterion
 * @param callback The callback run after the fetch from the db
 */
function getVideosFromDb(multiple, callback){
    mongo.findMultipleFromDB("Videos", "videoStorage", multiple, callback);
}