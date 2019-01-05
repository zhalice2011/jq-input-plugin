/*
* Swipe 2.0
*
* Brad Birdsall
* Copyright 2013, MIT License
*
*/
var mycookiedomain;
var mostPossibleLink = "";
//var baiduMapAk = "";
//var discuzCommonJavascript = "";
var gGlobalTextCopied = "";
var isMobileVersion = true;
var STYLEID = '1', STATICURL = 'static/', IMGDIR = '/images', VERHASH = '201881401', charset = 'gbk', discuz_uid = '0', cookiepre = 't7asq_4ad6_', cookiedomain = '.discuz.net', cookiepath = '/', showusercard = '1', attackevasive = '0', disallowfloat = 'newthread|tradeorder|activity|debate', defaultstyle = '', REPORTURL = 'aHR0cDovL3d3dy5kaXNjdXoubmV0Lw==', SITEURL = '', JSPATH = '/scripts/';

//wechat container
var inWeChat;
var needLbs;

var browserInfo;

/*
* m3.ui.js
*/




$(function () {

    browserInit();

    if ($(".body_div")) {
        body_init();
    };

    setTimeout(function () { window.scrollTo(0, 1); }, 1);

    //TOP
    var scr_time;
    window.onscroll = function () {
        var docH = window.innerHeight;
        var scrT = document.body.scrollTop;
        if ($(".top_div").get(0)) $(".top_div").hide();
        clearInterval(scr_time);
        if (scrT > docH * 3) {
            if (!$(".top_div").get(0)) {
                var top_html = "<div class=\"top_div\"><a href=\"javascript:document.body.scrollTop = 0\">&nbsp;</a></div>";
                $("body").append(top_html);
            }
            scr_time = setInterval(show_top, 100);
        }
    };
    function show_top() {
        $(".top_div").show();
        clearInterval(scr_time);
    };



    a_init();

    input_button_init();

    //屏幕旋转时重置列表页适配 and android不支持orientationchange 的处理
    /*window.addEventListener("orientationchange", function () {
        infoListIconStyle();
    });*/
    /*if (jq.os.android) {
    window.addEventListener("resize", function () {
    infoListIconStyle();
    });
    }*/

});


function a_init() {

    //responsive
    makeLinkResponsive();


    $("a").bind("touchstart", function () {
        if (!$(this).hasClass("disabled")) {
            if ($(this).parent().hasClass("nav_tt") || $(this).parent().hasClass("other_title") || $(this).parent().hasClass("menu_title")) {
                if (!$(this).parent().hasClass("nav_tta")) {
                    $(this).addClass("hover1");
                }
            } else {
                if ($(this).attr("class") != "nav_aurl") {
                    $(this).addClass("hover");
                }
            }
        }
    });
    $("a").bind("touchmove", function () {
        $(this).removeClass("hover");
        $(this).removeClass("hover1");
    });
    $("a").bind("touchend", function () {
        $(this).removeClass("hover");
        $(this).removeClass("hover1");
    });
    $("a").bind("touchcancel", function () {
        $(this).removeClass("hover");
        $(this).removeClass("hover1");
    });



}


function makeLinkResponsive() {
    if (false == browserInfo.versions.mobile) {
        var items = $("a");
        for (var i = 0; i < items.length; i++) {
            var target = $(items[i]).attr("target");
            var href = $(items[i]).attr("href");
            if ("undefined" == typeof (href) || 0 == href.indexOf("javascript:")) {
                continue;
            }
            else {
                if ("undefined" == typeof (target)) {
                    var exist = $(items[i]).attr("target");
                    $(items[i]).attr("target", "_blank");
                }
            }
        }
    }

    processLinkAll();

}

function processLinkAll()
{
    processLink('container');
    processLink('cityId');
    processLink('inviter');
}

function input_button_init() {
    var queryObject = $("input[type='button']");

    $("input[type='button']").bind("touchstart", function () {
        $(this).addClass("hover");
    });

    queryObject.bind("touchmove", function () {
        $(this).removeClass("hover");
    });
    queryObject.bind("touchend", function () {
        $(this).removeClass("hover");
    });
    queryObject.bind("touchcancel", function () {
        $(this).removeClass("hover");
    });
}


function body_init() {
    var body_height = parseInt($(".body_div").css("height"));
    var win_height = window.innerHeight;
    if (body_height < win_height) {
        var top_margin = win_height - body_height - 2;
        //$(".footer").css("margin-top", top_margin + "px");
    }
}




var loadJS = function (url, callback) {
    var head = document.getElementsByTagName('head');
    if (head && head.length) {
        head = head[0];
    } else {
        head = document.body;
    }
    var script = document.createElement('script');
    script.src = url;
    script.type = "text/javascript";
    head.appendChild(script);
    if (arguments.length == 2) {
        //document.addEventListener("DOMContentLoaded", function () {
        //console.log('DOMContentLoaded');
        script.onload = function () {
            callback();
            script.onload = null;
        }
        //});
    }
};




/*lbs*/
var lbsAction;

//native
function getLbsLocation2(action) {
    lbsAction = action;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("浏览器不支持地理定位。");
    }
}


//baidu map sdk
function getLbsLocation(action) {
    lbsAction = action;

    var script = document.createElement("script");

    var url = "http://api.map.baidu.com/api?v=2.0&ak={0}&callback=getLbsLocationOnCallback";
    url = "https://api.map.baidu.com/api?v=2.0&ak={0}&s=1&callback=getLbsLocationOnCallback";
    var defaultAk = "o5n3YznLKlEE4HOuejedMVvH";
    var ak = baiduMapAk;
    if ("" == baiduMapAk) {
        ak = defaultAk;
    }
    url = url.format(ak);

    script.src = url;
    document.body.appendChild(script);
}

//oldest method
function getLbsLocation0(action) {
    //alert(action);
    lbsAction = action;
    window.BMap_loadScriptTime = (new Date).getTime();
    if (navigator.geolocation) {

        var url = "http://api.map.baidu.com/getscript?v=3.0&ak={0}&services=&t=20161130153924";
        var defaultAk = "o5n3YznLKlEE4HOuejedMVvH";
        //alert(baiduMapAk);
        var ak = baiduMapAk;
        if ("" == baiduMapAk) {
            ak = defaultAk;
        }
        url = url.format(ak);

        loadJS(url, onMapJsLoaded);
    }
    else {
        alert("您的浏览器不支持使用HTML5来获取地理位置服务");
    }
}



function showPosition(position) {
    var lat = position.coords.latitude; //纬度 
    var lag = position.coords.longitude; //经度 
    alert('纬度:' + lat + ',经度:' + lag);
}


function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("定位失败,用户拒绝请求地理定位");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("定位失败,位置信息是不可用");
            break;
        case error.TIMEOUT:
            alert("定位失败,请求获取用户位置超时");
            break;
        case error.UNKNOWN_ERROR:
            alert("定位失败,定位系统失效");
            break;
    }
}


function onMapJsLoaded() {
    onLbsPrepared();
}

function getLbsLocationOnCallback() {
    onLbsPrepared();
}


function onLbsPrepared() {
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            //alert('您的位置：' + r.point.lng + ',' + r.point.lat);
            if ("teacher" == lbsAction) {
                jumpNearbyTeacherList(r);
            }
            else if ("student" == lbsAction) {
                jumpNearbyStudentList(r);
            }
            else if ("lbs" == lbsAction) {
                onLbs(r);
            }
        }
        else {
            alert('定位失败' + ' ' + this.getStatus());
        }
    }, { enableHighAccuracy: true }
    );
}

function handleError(value) {
    switch (value.code) {
        case 1:
            alert("位置服务被拒绝");
            break;
        case 2:
            alert("暂时获取不到位置信息");
            break;
        case 3:
            alert("获取信息超时");
            break;
        case 4:
            alert("未知错误");
            break;
    }
}




function initCommonPageScriptAll(v) {
    //alert('d');
    initAdSwipe();

    

    initCommonPageScriptMarquee();

    gotoTop(600);

    processLinkAll();


    processMiniPragram();

    initCommonPageScriptHighLightenMenu();

}



function initCommonPageScriptHighLightenMenu() {
    if ($(".divNav").length > 0) {
        var currUrl = window.location.href;
        var pathName = window.location.pathname;

        if ("" == pathName) {
            currUrl = currUrl + "/m";
        }

        //alert(currUrl);
        currUrl = currUrl.toLowerCase();
        var urls = $(".divNav a");
        for (var i = 0; i < urls.length; i++) {
            var itemurl = urls[i].href;
            itemurl = itemurl.toLowerCase();
            if ('' != itemurl) {

                if (currUrl == itemurl || currUrl == itemurl + '/') {
                    //alert('-');
                    $(urls[i]).addClass('current');
                    break;
                }
            }
        }
    }
}


function initCommonPageScriptMarquee() {
    if ($(".marquee").length > 0) {
        $(".marquee").each(function () {
            $(this).marquee({ yScroll: "bottom" });
        });
    }
}



function initAdSwipe() {
    if ($("#myAdSwipe").length > 0) {
        $('#myAdSwipe').Swipe(
            {
                // startSlide: 4,
                auto: 3000,
                speed: 400,
                continuous: true,
                // disableScroll: true,
                // stopPropagation: true,
                callback: function (index, element) { swipeAdCallback(index, element); }
                // transitionEnd: function(index, element) {}
            });
    }
    else {
        //alert('00');
    }
}

function initAdSwipe0() {
    var elem = document.getElementById('myAdSwipe');
    var mySwipe = Swipe(elem,
        {
            // startSlide: 4,
            auto: 3000,
            speed: 400,
            continuous: true,
            // disableScroll: true,
            // stopPropagation: true,
            callback: function (index, element) { swipeAdCallback(index, element); }
            // transitionEnd: function(index, element) {}
        });


}

function swipeAdCallback(index, element) {
    return;
}


String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}


/* self js*/
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g,
        function (m, i) {
            return args[i];
        });
}


function QueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


$.fn.maxlength = function () {

    $("textarea[maxlength], input[maxlength]").keypress(function (event) {
        var key = event.which;

        //all keys including return.
        if (key >= 33 || key == 13 || key == 32) {
            var maxLength = $(this).attr("maxlength");
            var length = this.value.length;
            if (length >= maxLength) {
                event.preventDefault();
            }
        }
    });
}

function getSelectedRadioButtonListValue(ctrl) {
    var ret = "";

    var selector = "input[name='{0}']:checked";
    selector = selector.format($(ctrl).attr("id"));
    ret = $(selector).val();

    return ret;
}


function getSelectedRadioButtonListText(ctrl) {
    var ret = "";
    var children = ctrl.children("input");
    for (var i = 0; i < children.length; i++) {
        var checked = $(children[i])[0].checked;
        if (true == checked) {
            ret = $(children[i])[0].nextSibling.innerHTML;
            break;
        }
    }
    return ret;
}

function getSelectedRadioButtonListIndex(ctrl) {
    var ret = -1;
    var children;
    var id = ctrl.attr("id");
    var string = '#' + id + ' input';
    children = $(string);
    for (var i = 0; i < children.length; i++) {
        var checked = $(children[i])[0].checked;
        if (true == checked) {
            ret = i;
            break;
        }
    }
    return ret;
}


function getSelectedDecoroateRadioButtonListText(ctrl) {
    var ret = "";
    var id = ctrl.attr("id");
    var string = '#' + id + ' input';
    children = $(string);
    for (var i = 0; i < children.length; i++) {
        var checked = $(children[i])[0].checked;
        if (true == checked) {
            var theSpan = $(children[i]).siblings('span');
            ret = theSpan.text();
            break;
        }
    }
    return ret;
}

function setSelectedRadioButtonListIndex(id, index, callback) {
    var children;
    var string = '#' + id + ' input';
    children = $(string);
    for (var i = 0; i < children.length; i++) {
        if (i == index) {
            $(children[i])[0].checked = true;
            break;
        }
    }

    if ('' != callback) {
        var fun = callback + "('" + id + "')";
        //alert(fun);
        eval(fun);
    }

    changeRadio($('#' + id)[0]);
}

//radiobuttonlist

function decorateAllRadioButtonList() {
    var id;
    var arr = $('.radiolist');
    for (var i = 0; i < arr.length; i++) {
        decroateRadioList($(arr[i]));
        changeRadio($(arr[i])[0]);
    }
}



function ifRadioButtonListChecked(radiobuttonlist) {
    var ret;
    ret = false;
    var inputs = radiobuttonlist.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            ret = true;
            break;
        }
    }
    return ret;
}



function decroateRadioList(queryObj) {
    var callback = '';
    if (typeof (queryObj.attr("callbackFun")) != "undefined")
        //if (queryObj.hasAttribute("callbackFun"))
    {
        callback = queryObj.attr("callbackFun");
    }
    else {
        callback = '';
    }
    //alert(callback);

    var id = queryObj.attr("id");
    var inputString = '#' + id + ' input';
    var inputs = $(inputString);
    var ul = $("<ul class='ul_radiobuttonlist clearfix'></ul>");
    var what = queryObj.append(ul);
    var alt = "";
    for (var i = 0; i < inputs.length; i++)
    {
        var tempLabel;
        //tempLabel= $(inputs[i])[0].nextSibling;
        tempLabel = $(inputs[i]).next("label");
        var text = tempLabel.html();
        var html = $(inputs[i])[0].outerHTML;

        alt = $(inputs[i]).parent("span").attr("data-icon");
        //var liText = "<li id='myli{0}' onclick=setSelectedRadioButtonListIndex('{3}',{0})>{1}<span>{2}</span></li>";
        //liText = liText.format(i, html, text, id);
        var liText;
        if (undefined != alt&&''!=alt)
        {
            liText = "<li id='myli{0}' onclick=setSelectedRadioButtonListIndex('{3}',{0},'{4}')>{1}<img src='{5}' class='verticalAlignMiddle'/><span class='verticalAlignMiddle'>{2}</span></li>";
            liText = liText.format(i, html, text, id, callback, alt);
        }
        else {
            liText = "<li id='myli{0}' onclick=setSelectedRadioButtonListIndex('{3}',{0},'{4}')>{1}<span>{2}</span></li>";
            liText = liText.format(i, html, text, id, callback);
        }
        
        var liItem = $(liText);
        $(liItem).hover(function () {
            $(this).addClass('itemHighLight');
        }, function () {
            $(this).removeClass('itemHighLight');
        });

        ul.append(liItem);
        
        $(inputs[i]).remove();
        tempLabel.remove();
    }

    var willAdjustWidth = queryObj.attr("data-adjustWidth");
    if (undefined == willAdjustWidth)
    {
        adjustWidth(queryObj[0]);
    }
    else
    {
        if ("1" == willAdjustWidth)
        {
            adjustWidth(queryObj[0]);
        }
    }


}

function changeRadio(self) {
    var id = self.id;
    var index = getSelectedRadioButtonListIndex($(self));
    if (-1 != index) {
        var liTemplate = "myli{0}";
        var li = liTemplate.format(index);
        $("#" + id + " #" + li).addClass("current");
        var string = '#' + id + ' input';
        var children = $(string);
        for (var i = 0; i < children.length; i++) {
            if (i != index) {
                li = liTemplate.format(i);
                $("#" + id + " #" + li).removeClass("current");
            }
        }
    }
    else {
        var liTemplate = "myli{0}";
        var li;
        var string = '#' + id + ' input';
        var children = $(string);
        for (var i = 0; i < children.length; i++) {
            li = liTemplate.format(i);
            $("#" + id + " #" + li).removeClass("current");
        }
    }
}

function isUndefinedMy(variable) {
    return typeof variable == 'undefined' ? true : false;
}

function setRadioButtonListSelected(ctrl, value) {
    if (isUndefinedMy(ctrl)) {
        return;
    }

    var id = ctrl.attr("id");
    var string = '#' + id + ' input';
    children = $(string);
    for (var i = 0; i < children.length; i++) {
        if ($(children[i]).val() == value) {
            $(children[i])[0].checked = true;
        }
        else {
            $(children[i])[0].checked = false;
        }
    }

    changeRadio($('#' + id)[0]);
}


function setRadioButtonListNoSelected(ctrl) {

    var id = ctrl.attr("id");
    var string = '#' + id + ' input';
    children = $(string);
    for (var i = 0; i < children.length; i++) {
        $(children[i])[0].checked = false;
    }

    changeRadio($('#' + id)[0]);
}


function getSelectedDecoroateRadioButtonListValue(ctrl) {
    var ret = "";
    var id = ctrl.attr("id");
    var string = '#' + id + ' input';
    children = $(string);
    for (var i = 0; i < children.length; i++) {
        var checked = $(children[i])[0].checked;
        if (true == checked) {
            ret = $(children[i]).val();
            break;
        }
    }
    return ret;
}


function adjustWidth(self) {
    var id = self.id;
    var string = $("#" + id + " ul li");
    var lis = $(string);
    var maxWidth = 0;
    var i;
    for (i = 0; i < lis.length; i++) {
        var width = $(lis[i])[0].clientWidth;
        maxWidth = Math.max(maxWidth, width);
    }

    if (0 != maxWidth) {
        for (i = 0; i < lis.length; i++) {
            $(lis[i])[0].style.width = maxWidth + 'px';
            $(lis[i])[0].style.display = 'unset';
        }
    }
}

function isMobile(s) {
    var mobile = s;
    var pattern = /^[0]{0,1}1(3|4|5|6|7|8|9)(\d){1}[ ]?[-]?(\d){8}$/;
    if (pattern.test(mobile))
        return true;
    else
        return false;
}


function gotoTop(min_height) {
    //预定义返回顶部的html代码，它的css样式默认为不显示
    var gotoTop_html = '<div id="gotoTop" class="common_icon"><em>顶部</em></div>';
    //将返回顶部的html代码插入页面上id为page的元素的末尾 
    $("body").append(gotoTop_html);
    $("#gotoTop")[0].onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    //获取页面的最小高度，无传入值则默认为600像素
    min_height ? min_height = min_height : min_height = 600;
    //为窗口的scroll事件绑定处理函数
    $(window).scroll(function () {
        var s;
        s = document.documentElement.scrollTop || document.body.scrollTop;
        //alert(s);
        if (s > min_height) {
            $("#gotoTop").show();
        } else {
            $("#gotoTop").hide();
        };
    });
}


function parseBoolean(str) {
    return /^true$/i.test(str);
}

function showShare() {
    $('#shareWrapper').removeClass("hide");
}


/*decorate checkbox start*/
function decorateAllCheckBox() {
    decorateCheckBoxList();
    decorateSingleCheckBox();
    decroateSwitch();
}

function decorateCheckBoxList() {
    var id;
    var arr = $('.checklist');
    for (var i = 0; i < arr.length; i++) {
        decroateCheckBox($(arr[i]));
        initCheckBox($(arr[i])[0]);
    }
}


function decorateSingleCheckBox() {
    var id;
    var arr = $('.singleCheckBox');
    for (var i = 0; i < arr.length; i++) {
        decroateCheckBox($(arr[i]));
        initCheckBox($(arr[i])[0]);
    }
}


function decroateSwitch() {
    var arr = $('.switchClass');
    for (var i = 0; i < arr.length; i++) {
        var item = $(arr[i]);
        var attrDecorated = "decroated";
        if ("1" != item.attr(attrDecorated)) {
            decroateSwitchButton($(arr[i]));
            initSwitchSwitchButton($(arr[i])[0]);
            item.attr(attrDecorated, "1")
        }
    }
}


function decroateCheckBox(queryObj) {
    var id = queryObj.attr("id");
    var inputString = '#' + id + ' input';
    var inputs = $(inputString);
    var ul = $("<ul class='ul_checkboxlist clearfix'></ul>");
    var what = queryObj.append(ul);
    var alt = "0";
    for (var i = 0; i < inputs.length; i++) {
        var notext = $(inputs[i]).parent("span").attr("notext");

        var tempLabel = $(inputs[i])[0].nextSibling;

        var html = $(inputs[i])[0].outerHTML;
        alt = $(inputs[i]).parent("span").attr("alt");
        var liText;

        var text = $(tempLabel).text();
        if (notext == "1") {
            text = "";
            liText = "<li id='myli{0}' style='width:24px;' onclick=setSelectedCheckBox('{3}',{0});{5}>{1}<span alt='{4}'>{2}</span></li>";
        }
        else {
            liText = "<li id='myli{0}' onclick=setSelectedCheckBox('{3}',{0});{5}>{1}<span alt='{4}'>{2}</span></li>";
        }

        var inputClickJs = "this.children[0].click()";

        //alert(inputClickJs);

        liText = liText.format(i, html, text, id, alt, inputClickJs);

        ul.append($(liText));
        $(inputs[i]).remove();
        $(tempLabel).remove();
    }

    adjustWidth(queryObj[0]);
}




function decroateSwitchButton(queryObj) {
    var id = queryObj.attr("id");
    var inputString = '#' + id + ' input';
    var inputs = $(inputString);
    var ul = $("<ul class='ul_swicthbuttonlist'></ul>");
    var what = queryObj.parent().append(ul);
    ul.attr("id", id);
    for (var i = 0; i < inputs.length; i++) {
        var html = $(inputs[i])[0].outerHTML;
        var liText = "<li id='myli{0}' onclick=setSelectedSwitch('{1}',{0});{2}>{3}</li>"
        var inputClickJs = "this.children[0].click()";
        liText = liText.format(i, id, inputClickJs, html);
        ul.append($(liText));
        $(inputs[i]).remove();
        $(queryObj).remove();
    }
}



function initSwitchSwitchButton(self) {
    var id = self.id;
    var string = '#' + id + ' input';
    var children = $(string);
    for (var i = 0; i < children.length; i++) {
        var liTemplate = "myli{0}";
        var li = liTemplate.format(i);
        var checked = $(children[i])[0].checked;
        if (checked) {
            $("#" + id + " #" + li).removeClass("normal");
            $("#" + id + " #" + li).addClass("select");
        }
        else {
            $("#" + id + " #" + li).removeClass("select");
            $("#" + id + " #" + li).addClass("normal");
        }
    }

}

function setSelectedSwitch(id, index) {
    var children;
    var string = '#' + id + ' input';
    children = $(string);

    var old = $(children[index])[0].checked;

    $(children[index])[0].checked = !old;


    changeSwitchButton($('#' + id)[0], index);
}


function changeSwitchButton(self, index) {
    var id = self.id;
    var liTemplate = "myli{0}";
    var li = liTemplate.format(index);
    var string = '#' + id + ' input';
    var children = $(string);
    var checked = $(children[index])[0].checked;
    if (checked) {
        $("#" + id + " #" + li).removeClass("normal");
        $("#" + id + " #" + li).addClass("select");
    }
    else {
        $("#" + id + " #" + li).removeClass("select");
        $("#" + id + " #" + li).addClass("normal");
    }
}

function setSwitchState(wapperId, checked) {
    var children;
    var string = '#' + wapperId + ' input';
    children = $(string);

    $(children[0])[0].checked = checked;
    changeSwitchButton($('#' + wapperId)[0], 0);
}

function setSelectedCheckBox(id, index, mustBeTrue) {
    var children;
    var string = '#' + id + ' input';
    children = $(string);

    var newValue;
    var old = $(children[index])[0].checked;
    if (mustBeTrue) {
        newValue = true;
    }
    else {
        newValue = !old;
    }
    $(children[index])[0].checked = newValue;


    changeCheckBox($('#' + id)[0], index);
}



function initCheckBox(self) {
    var id = self.id;
    var string = '#' + id + ' input';
    var children = $(string);
    for (var i = 0; i < children.length; i++) {
        var liTemplate = "myli{0}";
        var li = liTemplate.format(i);
        var checked = $(children[i])[0].checked;
        if (checked) {
            $("#" + id + " #" + li).addClass("current");
        }
        else {
            $("#" + id + " #" + li).removeClass("current");
        }
    }
}

function changeCheckBox(self, index) {
    var id = self.id;
    var liTemplate = "myli{0}";
    var li = liTemplate.format(index);
    var string = '#' + id + ' input';
    var children = $(string);
    var checked = $(children[index])[0].checked;
    if (checked) {
        $("#" + id + " #" + li).addClass("current");
    }
    else {
        $("#" + id + " #" + li).removeClass("current");
    }
}


function getDecoratedCheckBoxListValue(ctrlName) {
    var valuelist = ""; //保存checkbox选中值
    //遍历name以ctrlName开头的checkbox
    var selector = "input[name^='{0}']";
    selector = selector.format(ctrlName);
    $(selector).each(function () {
        if (this.checked) {
            //$(this):当前checkbox对象;
            //$(this).parent("span"):checkbox父级span对象
            //valuelist += $(this).parent("span").attr("alt") + ",";
            var spanDom = $(this)[0].nextSibling;
            var oneItem = $(spanDom).attr("alt");
            valuelist += oneItem + ",";
        }
    });
    if (valuelist.length > 0) {
        //得到选中的checkbox值序列,结果为400,398
        valuelist = valuelist.substring(0, valuelist.length - 1);
    }

    return valuelist;
}

/*decorate checkbox end*/


function setmycookie(cookieName, cookieValue, seconds) {
    var d = new Date();
    d.setTime(d.getTime() + seconds);
    var expires = "expires=" + d.toUTCString();
    var path = "path=/";
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";" + path + ";" + "domain=" + mycookiedomain;
}



/*search*/
function search() {
    var url = "";
    if ("" != mostPossibleLink) {
        window.location.href = mostPossibleLink;
    }
    else {
        var keyword = $("#TextBoxKeyword").val();
        if (userNameInputTip == keyword || "" == keyword) {
            keyword = "";
            url = "/m/teacherlist";
        }
        else {
            url = "/m/teacherlist/keyword" + keyword + "";
        }
        window.location.href = url;
    }
}


function openLink(link, keyword) {
    saveTerm(link, keyword)
}

function saveTerm(link, keyword) {
    var cityId;
    cityId = QueryString('cityId');
    var command = 1;

    $.post("/http/search",
                    {
                        command: command
                        , keyword: keyword
                        , cityId: cityId
                        , terminateType: 2

                    },
                    function (data) {
                        window.location.href = link;
                    }
                )
}

function keywordComplete() {
    var cityId;
    var inputValue = '';

    cityId = QueryString('cityId');
    $("#TextBoxKeyword").autocomplete(null, {
        minChars: 1,
        matchCase: false, //不区分大小写
        autoFill: false,
        max: 20,
        width: 280,
        url: '/http/search',
        extraParams: { cityId: cityId },
        urlparaname: 'keyword',
        scrollHeight: 280,
        formatItem: function (row, i, max, match, term) {
            if (1 == i) {
                mostPossibleLink = row.url;
            }
            var ret = "";

            ret = row.name + " <span class=cgray>(" + row.desc + ")</span>";
            if (1 == i) {
                //ret += "搜索";
            }
            return ret;

            if (row.code.indexOf(v) == 0 || row.spell.indexOf(v) == 0) {
                return row.name; //+ " (" + row.code + ")";
            }
            else
                return false;
        },
        formatMatch: function (row, i, max) {
            return row.name; //+ " (" + row.code+")";
        },
        formatResult: function (row) {
            //alert('formatResult') ;
            return row.code;
        },
        onSelected: function (t) {
            mostPossibleLink = "";
            openLink(t.url, t.name);
        },
        reasultSearch: function (row, v)//本场数据自定义查询语法 注意这是我自己新加的事件
        {
            if (row.data.code.indexOf(v) == 0 || row.data.spell.indexOf(v) == 0) {
                return row;
            }
            else
                return false;
        }
    });
}


/*search ends*/

function ifSupportHtml5() {
    var ret = false;
    if (window.applicationCache
          || (typeof (Worker) !== "undefined")
          ) {
        ret = true;
    }
    else {
        ret = false;
    }
    return ret;
}


function browserInit() {
    browserInfo = {
        versions: function () {
            var u = navigator.userAgent,
            app = navigator.appVersion;
            return {
                mobile: !!u.match(/AppleWebKit.*Mobile.*/),
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
                iPhone: u.indexOf("iPhone") > -1,
                iPad: u.indexOf("iPad") > -1
                , canShare: u.indexOf("MQQBrowser/") > -1 || u.indexOf("UCBrowser/") > -1
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
}

function initClipboard() {
    var clipboard = new Clipboard('.copyElement');

    clipboard.on('success', function (e) {
        //e.clearSelection();
        showPrompt('tip_' + Math.random(), null, gGlobalTextCopied, 2000);


    });

    clipboard.on('error', function (e) {
    });

}


/*baidu map*/
function GetBaiduLon(latlon) {
    var ret = '';
    if ('' != latlon) {
        var pos = latlon.indexOf(' ', 0);
        if (pos > 0) {
            ret = latlon.substr(0, pos);
        }
    }

    return ret;
}

function GetBaiduLat(latlon) {
    var ret = '';
    if ('' != latlon) {
        var pos = latlon.indexOf(' ', 0);
        if (pos > 0) {
            ret = latlon.substr(pos + 1);
        }
    }

    return ret;
}

function discuzJsLoaded() {
    var ret = false;
    if (typeof showMenu == 'function') {
        ret = true;
    }
    return ret;
}

function showCustomerWeChatWindow(ctrl) {
    if (false == discuzJsLoaded()) {
        head.load(discuzCommonJavascript);
        head.ready(function () {
            doShowCustomerWeChatWindow(ctrl);
        });
    }
    else {
        doShowCustomerWeChatWindow(ctrl);
    }

}

function doShowCustomerWeChatWindow(ctrlObj) {
    var screenHeight = document.documentElement.clientHeight;
    var url = (!isUndefined(ctrlObj.href) ? ctrlObj.href : ctrlObj.attributes['href'].value);
    var v = { 'pos': '00', 'cache': 1, 'maxh': screenHeight };
    showWindow("customerwechat", url, 'get', -1, v);
}


function showSubmittingCommon(ctrl) {
    var submittingText = $(ctrl).attr("submittingText");
    $(ctrl).attr("disabled", true);
    $(ctrl).addClass("ac_loading_onbutton");
    $(ctrl).val(submittingText);
}

function showUIOnSubmitDoneCommon(ctrl) {
    var text = $(ctrl).attr("normalText");
    $(ctrl).removeAttr("disabled");
    $(ctrl).removeClass("ac_loading_onbutton");
    $(ctrl).val(text);
}

function processMiniPragram() {
    if (isMiniProgramEnv()) {
        $('.miniProgram').hide();

        $('.showInMiniProgram').removeClass('hide');

    }
}

function processLink(paraName) {
    var value = QueryString(paraName);
    var add = false;
    if (value > 0) {
        add = true;
    }

    if (add) {
        var items = $("a");
        for (var i = 0; i < items.length; i++) {
            var transmit = $(items[i]).attr("transmit");
            if ('0' == transmit) {
                continue;
            }
            else {
                var href = $(items[i]).attr("href");
                if (undefined == href) {
                    continue;
                }
                var docA = document.createElement('a');
                docA.href = href;
                var protocal = docA.protocol.replace(':', '');
                var lowerProtocal = protocal.toLowerCase();
                if ('http' == lowerProtocal || 'https' == lowerProtocal) {
                    var newHref;
                    if (false == containPara(href, paraName)) {
                        newHref = addPara(href, paraName, value);
                        $(items[i]).attr("href", newHref);
                    }
                }
                else {
                 
                }
            }

        }
    }
}


function containPara(href, paraName) {
    paraName = paraName.toLowerCase();
    var ret = false;
    if (href.toLowerCase().indexOf('?' + paraName + '=') < 0 && href.toLowerCase().indexOf('&' + paraName + '=') < 0) {
        ret = false;
    }
    else {
        ret = true;
    }
    return ret;
}

function addPara(href, paraName, paraValue) {
    var newHref;
    var token = '';
    if (href.indexOf('?') >= 0) {
        token = '&';
    }
    else {
        token = '?';
    }
    newHref = href + token + paraName + "=" + paraValue;
    return newHref;
}

function clickSelectCityLink(ctrl) {
    var isMiniProgram = isMiniProgramEnv();
    //isMiniProgram = true;
    if (isMiniProgram) {
        var href = $(ctrl).attr("href");
        var newHref;
        newHref = addPara(href, 'IsMiniProgram', 1);
        $(ctrl).attr("href", newHref);
    }
    else {
        //alert('not mini program');     
    }
    return true;

}


function isMiniProgramEnv() {
    var ret = window.__wxjs_environment === 'miniprogram';
    return ret;
}

function json2str(o) {
    var arr = [];
    var fmt = function (s) {
        if (typeof s == 'object' && s != null) return json2str(s);
        return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
    }
    for (var i in o) arr.push("'" + i + "':" + fmt(o[i]));
    return '{' + arr.join(',') + '}';
}


$.fn.hoverDelay = function (options) {
    var defaults = {
        hoverDuring: 200,
        outDuring: 200,
        hoverEvent: function () {
            $.noop();
        },
        outEvent: function () {
            $.noop();
        }
    };
    var sets = $.extend(defaults, options || {});
    var hoverTimer, outTimer;
    return $(this).each(function () {
        $(this).hover(function () {
            clearTimeout(outTimer);
            hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
        },
            function () {
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });
    });
};