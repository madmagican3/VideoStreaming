function upVote(){
    var elem = $('.iconUp');
    var elemToMod = $('.upvote');
    var elemOpp = $('.iconDown');
    var elemToModOpp = $('.downvote');
    voteChange(elem, elemToMod, elemOpp, elemToModOpp);
}


function downVote(){
    var elem = $('.iconDown');
    var elemToMod = $('.downvote');
    var elemOpp = $('.iconUp');
    var elemToModOpp = $('.upvote');
    voteChange(elem, elemToMod,elemOpp, elemToModOpp);
}
function voteChange(elem, elemToMod, elemOpp, elemToModOpp, force){
    console.log("NEED TO GET THE POST REQUESTS WORKING FOR UPVOTE& DOWNVOTE");
    //TODO
    if (rgb2hex(elem.css("background-color")) == "#a9a9a9"){
        var num = elemToMod.text();
        num = Number(num) -1;
        elemToMod.text(num);
        elem.css("background-color", "#282828");//not highlighted
        $.post("",{"type":elem.name, "value":-1});
    }else if (!force){
        var num = elemToMod.text();
        num = Number(num) +1;
        elemToMod.text(num);
        elem.css("background-color","#A9A9A9"); //highlighted
        voteChange(elemOpp,elemToModOpp, null,null,true);
        $.post("",{"type":elem.name, "value":1});
    }
}


function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}