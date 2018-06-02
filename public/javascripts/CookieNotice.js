function acceptCookies(){
    var elem = $('.CookieNotice');
    document.cookie =  "CookiesAccepted = " +true + ";";
    elem.slideToggle(500);
}

$(document).ready(function(){
    if (FindCookie("CookiesAccepted") != null){
        var elem = $('.CookieNotice');
        elem.slideToggle(500);
    }
    window.onresize = function(a){
    }
});
function FindCookie(name) {

    var nameEQ = name + "=";
    var ca = document.cookie.split(";");

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
}




