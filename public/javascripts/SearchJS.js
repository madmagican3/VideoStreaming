
function search(){
    var elem =$('.searchBox');
    var url = "http://localhost:3000/search/" + elem.val();
    location = url;
    return false;
}
function select(){
    console.log("this is getting called");
}
