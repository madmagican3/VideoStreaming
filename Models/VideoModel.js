/**
 * This defines a video object and gives references to essential vars
 * @param title The title of the video
 * @param desc The description of the video
 * @param loc The location of the video in the system , i.e. 'Test.mp4'
 * @param tags The tags in the video for easier searching
 * @param views The number of views
 * @param up The number of upvotes
 * @param de The number of downvotes
 * @constructor This defines the video
 */
function Video(title, desc, loc,tags,views,up,de, thumbnail){
    this.Title = title;
    this.Description = desc;
    this.location = loc;
    this.tags = tags;
    this.views = views;
    this.upvotes = up;
    this.devotes = de;
    this.thumbnail = thumbnail;
}
module.exports = Video;