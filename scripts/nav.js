function replacePara(queryString,name) {
    var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)", "i");
    
    var result = queryString.replace(reg, '');

    return result;
}

function processNav()
{
    var currUrl = window.location.href;
    currUrl = replacePara(currUrl, "container");
    currUrl = replacePara(currUrl, "sessionKey");
    currUrl = replacePara(currUrl, "cityId");
    //alert(currUrl);

currUrl = String(currUrl);
currUrl = getFileName(currUrl);//
var index = 0;
var urls = $(".wrappernav ul a");
for (var i = 0; i < urls.length; i++) {
    var itemurl = urls[i].href;
    itemurl = String(itemurl);
    itemurl = getFileName(itemurl);
    if ('' != itemurl) {
        if (itemurl.toLowerCase().indexOf(currUrl.toLowerCase()) >= 0) {
            index = i;
            extraJs(index);
            break;
        }
    }
}
}

function getFileName(url) {
    var ret = '';
    var pos = url.lastIndexOf('/');
    if (pos >= 0) {
        ret = url.substring(pos + 1);
    }
    else {
        ret = url;
    }
    return ret;
}


function extraJs(index) {
    var jsFlexible = "/scripts/flexible.js";
    var jsIscroll = "/scripts/iscroll-lite.js";
    var jsNavbarscroll = "/scripts/navbarscroll.js";
    head.load(jsIscroll, jsNavbarscroll);
    head.ready(function () {
        initNav(index);
    });
}


function initNav(index) {
    //alert(index);
    $('#wrappernav').navbarscroll({
        defaultSelect: index,
        scrollerWidth: 6,
        fingerClick: 1,
        endClickScroll: function (obj) {
            //console.log(obj.text())
        }
    });
}