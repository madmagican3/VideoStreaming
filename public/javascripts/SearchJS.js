
function search(){
    console.log("this is getting called at all");
    var elem =$('.searchBox');
    var url = "http://localhost:3000/search/" + elem.val();
    console.log(url);
    location = url;
    return false;
}
