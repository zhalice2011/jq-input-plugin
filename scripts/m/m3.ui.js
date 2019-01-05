/*
* Swipe 2.0
*
* Brad Birdsall
* Copyright 2013, MIT License
*
*/
var mycookiedomain;
var mostPossibleLink = "";

var STYLEID = '1', STATICURL = 'static/', IMGDIR = '/images', VERHASH = 'dwG', charset = 'gbk', discuz_uid = '0', cookiepre = 't7asq_4ad6_', cookiedomain = '.discuz.net', cookiepath = '/', showusercard = '1', attackevasive = '0', disallowfloat = 'newthread|tradeorder|activity|debate', defaultstyle = '', REPORTURL = 'aHR0cDovL3d3dy5kaXNjdXoubmV0Lw==', SITEURL = '', JSPATH = '/scripts/';

function Swipe(container, options) {

    "use strict";

    // utilities
    var noop = function () { }; // simple no operation function
    var offloadFn = function (fn) { setTimeout(fn || noop, 0) }; // offload a functions execution

    // check browser capabilities
    var browser = {
        addEventListener: !!window.addEventListener,
        touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
        transitions: (function (temp) {
            var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
            for (var i in props) if (temp.style[props[i]] !== undefined) return true;
            return false;
        })(document.createElement('swipe'))
    };

    // quit if no root element
    if (!container) return;
    var element = container.children[0];
    var slides, slidePos, width, length;
    options = options || {};
    var index = parseInt(options.startSlide, 10) || 0;
    var speed = options.speed || 300;
    options.continuous = options.continuous !== undefined ? options.continuous : true;

    function setup() {

        // cache slides
        slides = element.children;
        length = slides.length;

        // set continuous to false if only one slide
        if (slides.length < 2) options.continuous = false;

        //special case if two slides
        if (browser.transitions && options.continuous && slides.length < 3) {
            //commented in Nov 9,2015
            /*element.appendChild(slides[0].cloneNode(true));
            element.appendChild(element.children[1].cloneNode(true));
            slides = element.children;*/
        }

        // create an array to store current positions of each slide
        slidePos = new Array(slides.length);

        // determine width of each slide
        width = container.getBoundingClientRect().width || container.offsetWidth;

        element.style.width = (slides.length * width) + 'px';

        // stack elements
        var pos = slides.length;
        while (pos--) {

            var slide = slides[pos];

            slide.style.width = width + 'px';
            slide.setAttribute('data-index', pos);

            if (browser.transitions) {
                slide.style.left = (pos * -width) + 'px';
                move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
            }
            //alert('1');
            $(slide).removeClass("hide");
            //alert('2');

        }

        // reposition elements before and after index
        if (options.continuous && browser.transitions) {
            move(circle(index - 1), -width, 0);
            move(circle(index + 1), width, 0);
        }

        if (!browser.transitions) element.style.left = (index * -width) + 'px';

        container.style.visibility = 'visible';

    }

    function prev() {

        if (options.continuous) slide(index - 1);
        else if (index) slide(index - 1);

    }

    function next() {

        if (options.continuous) slide(index + 1);
        else if (index < slides.length - 1) slide(index + 1);

    }

    function circle(index) {

        // a simple positive modulo using slides.length
        return (slides.length + (index % slides.length)) % slides.length;

    }

    function slide(to, slideSpeed) {

        // do nothing if already on requested slide
        if (index == to) return;

        if (browser.transitions) {

            var direction = Math.abs(index - to) / (index - to); // 1: backward, -1: forward

            // get the actual position of the slide
            if (options.continuous) {
                var natural_direction = direction;
                direction = -slidePos[circle(to)] / width;

                // if going forward but to < index, use to = slides.length + to
                // if going backward but to > index, use to = -slides.length + to
                if (direction !== natural_direction) to = -direction * slides.length + to;

            }

            var diff = Math.abs(index - to) - 1;

            // move all the slides between index and to in the right direction
            while (diff--) move(circle((to > index ? to : index) - diff - 1), width * direction, 0);

            to = circle(to);

            move(index, width * direction, slideSpeed || speed);
            move(to, 0, slideSpeed || speed);

            if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place

        } else {

            to = circle(to);
            animate(index * -width, to * -width, slideSpeed || speed);
            //no fallback for a circular continuous if the browser does not accept transitions
        }

        index = to;
        offloadFn(options.callback && options.callback(index, slides[index]));
    }

    function move(index, dist, speed) {

        translate(index, dist, speed);
        slidePos[index] = dist;

    }

    function translate(index, dist, speed) {

        var slide = slides[index];
        var style = slide && slide.style;

        if (!style) return;

        style.webkitTransitionDuration =
    style.MozTransitionDuration =
    style.msTransitionDuration =
    style.OTransitionDuration =
    style.transitionDuration = speed + 'ms';

        style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
        style.msTransform =
    style.MozTransform =
    style.OTransform = 'translateX(' + dist + 'px)';

    }

    function animate(from, to, speed) {

        // if not an animation, just reposition
        if (!speed) {

            element.style.left = to + 'px';
            return;

        }

        var start = +new Date;

        var timer = setInterval(function () {

            var timeElap = +new Date - start;

            if (timeElap > speed) {

                element.style.left = to + 'px';

                if (delay) begin();

                options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

                clearInterval(timer);
                return;

            }

            element.style.left = (((to - from) * (Math.floor((timeElap / speed) * 100) / 100)) + from) + 'px';

        }, 4);

    }

    // setup auto slideshow
    var delay = options.auto || 0;
    var interval;

    function begin() {

        interval = setTimeout(next, delay);

    }

    function stop() {

        delay = 0;
        clearTimeout(interval);

    }


    // setup initial vars
    var start = {};
    var delta = {};
    var isScrolling;

    // setup event capturing
    var events = {

        handleEvent: function (event) {

            switch (event.type) {
                case 'touchstart': this.start(event); break;
                case 'touchmove': this.move(event); break;
                case 'touchend': offloadFn(this.end(event)); break;
                case 'webkitTransitionEnd':
                case 'msTransitionEnd':
                case 'oTransitionEnd':
                case 'otransitionend':
                case 'transitionend': offloadFn(this.transitionEnd(event)); break;
                case 'resize': offloadFn(setup); break;
            }

            if (options.stopPropagation) event.stopPropagation();

        },
        start: function (event) {

            var touches = event.touches[0];

            // measure start values
            start = {

                // get initial touch coords
                x: touches.pageX,
                y: touches.pageY,

                // store time to determine touch duration
                time: +new Date

            };

            // used for testing first move event
            isScrolling = undefined;

            // reset delta and end measurements
            delta = {};

            // attach touchmove and touchend listeners
            element.addEventListener('touchmove', this, false);
            element.addEventListener('touchend', this, false);

        },
        move: function (event) {

            // ensure swiping with one touch and not pinching
            if (event.touches.length > 1 || event.scale && event.scale !== 1) return

            if (options.disableScroll) event.preventDefault();

            var touches = event.touches[0];

            // measure change in x and y
            delta = {
                x: touches.pageX - start.x,
                y: touches.pageY - start.y
            }

            // determine if scrolling test has run - one time test
            if (typeof isScrolling == 'undefined') {
                isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
            }

            // if user is not trying to scroll vertically
            if (!isScrolling) {

                // prevent native scrolling
                event.preventDefault();

                // stop slideshow
                stop();

                // increase resistance if first or last slide
                if (options.continuous) { // we don't add resistance at the end

                    translate(circle(index - 1), delta.x + slidePos[circle(index - 1)], 0);
                    translate(index, delta.x + slidePos[index], 0);
                    translate(circle(index + 1), delta.x + slidePos[circle(index + 1)], 0);

                } else {

                    delta.x =
            delta.x /
              ((!index && delta.x > 0               // if first slide and sliding left
                || index == slides.length - 1        // or if last slide and sliding right
                && delta.x < 0                       // and if sliding at all
              ) ?
              (Math.abs(delta.x) / width + 1)      // determine resistance level
              : 1);                                 // no resistance if false

                    // translate 1:1
                    translate(index - 1, delta.x + slidePos[index - 1], 0);
                    translate(index, delta.x + slidePos[index], 0);
                    translate(index + 1, delta.x + slidePos[index + 1], 0);
                }

            }

        },
        end: function (event) {

            // measure duration
            var duration = +new Date - start.time;

            // determine if slide attempt triggers next/prev slide
            var isValidSlide =
            Number(duration) < 250               // if slide duration is less than 250ms
            && Math.abs(delta.x) > 20            // and if slide amt is greater than 20px
            || Math.abs(delta.x) > width / 2;      // or if slide amt is greater than half the width

            // determine if slide attempt is past start and end
            var isPastBounds =
            !index && delta.x > 0                            // if first slide and slide amt is greater than 0
            || index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0

            if (options.continuous) isPastBounds = false;

            // determine direction of swipe (true:right, false:left)
            var direction = delta.x < 0;

            // if not scrolling vertically
            if (!isScrolling) {

                if (isValidSlide && !isPastBounds) {

                    if (direction) {

                        if (options.continuous) { // we need to get the next in this direction in place

                            move(circle(index - 1), -width, 0);
                            move(circle(index + 2), width, 0);

                        } else {
                            move(index - 1, -width, 0);
                        }

                        move(index, slidePos[index] - width, speed);
                        move(circle(index + 1), slidePos[circle(index + 1)] - width, speed);
                        index = circle(index + 1);

                    } else {
                        if (options.continuous) { // we need to get the next in this direction in place

                            move(circle(index + 1), width, 0);
                            move(circle(index - 2), -width, 0);

                        } else {
                            move(index + 1, width, 0);
                        }

                        move(index, slidePos[index] + width, speed);
                        move(circle(index - 1), slidePos[circle(index - 1)] + width, speed);
                        index = circle(index - 1);

                    }

                    options.callback && options.callback(index, slides[index]);

                } else {

                    if (options.continuous) {

                        move(circle(index - 1), -width, speed);
                        move(index, 0, speed);
                        move(circle(index + 1), width, speed);

                    } else {

                        move(index - 1, -width, speed);
                        move(index, 0, speed);
                        move(index + 1, width, speed);
                    }

                }

            }

            // kill touchmove and touchend event listeners until touchstart called again
            element.removeEventListener('touchmove', events, false)
            element.removeEventListener('touchend', events, false)

        },
        transitionEnd: function (event) {

            if (parseInt(event.target.getAttribute('data-index'), 10) == index) {

                if (delay) begin();

                options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

            }

        }

    }

    // trigger setup
    setup();

    // start auto slideshow if applicable
    if (delay) begin();


    // add event listeners
    if (browser.addEventListener) {

        // set touchstart event on element
        if (browser.touch) element.addEventListener('touchstart', events, false);

        if (browser.transitions) {
            element.addEventListener('webkitTransitionEnd', events, false);
            element.addEventListener('msTransitionEnd', events, false);
            element.addEventListener('oTransitionEnd', events, false);
            element.addEventListener('otransitionend', events, false);
            element.addEventListener('transitionend', events, false);
        }

        // set resize event on window
        window.addEventListener('resize', events, false);

    } else {

        window.onresize = function () { setup() }; // to play nice with old IE

    }

    // expose the Swipe API
    return {
        setup: function () {

            setup();

        },
        slide: function (to, speed) {

            // cancel slideshow
            stop();

            slide(to, speed);

        },
        prev: function () {

            // cancel slideshow
            stop();

            prev();

        },
        next: function () {

            // cancel slideshow
            stop();

            next();

        },
        stop: function () {

            // cancel slideshow
            stop();

        },
        getPos: function () {

            // return current index position
            return index;

        },
        getNumSlides: function () {

            // return total number of slides
            return length;
        },
        kill: function () {

            // cancel slideshow
            stop();

            // reset element
            element.style.width = '';
            element.style.left = '';

            // reset slides
            var pos = slides.length;
            while (pos--) {

                var slide = slides[pos];
                slide.style.width = '';
                slide.style.left = '';

                if (browser.transitions) translate(pos, 0, 0);

            }

            // removed event listeners
            if (browser.addEventListener) {

                // remove current event listeners
                element.removeEventListener('touchstart', events, false);
                element.removeEventListener('webkitTransitionEnd', events, false);
                element.removeEventListener('msTransitionEnd', events, false);
                element.removeEventListener('oTransitionEnd', events, false);
                element.removeEventListener('otransitionend', events, false);
                element.removeEventListener('transitionend', events, false);
                window.removeEventListener('resize', events, false);

            }
            else {

                window.onresize = null;

            }

        }
    }

}


if (window.jq || window.jQuery || window.Zepto) {
    (function ($) {
        $.fn.Swipe = function (params) {
            return this.each(function () {
                $(this).data('Swipe', new Swipe($(this)[0], params));
            });
        }
    })(window.jq || window.jQuery || window.Zepto)
}



/*
* m3.ui.js
*/
$(function(){

    if($(".body_div")){
        body_init();
    };

    setTimeout(function(){ window.scrollTo(0, 1); }, 1);

    //TOP
    var scr_time;
    window.onscroll=function(){
        var docH = window.innerHeight;
        var scrT = document.body.scrollTop;
        if($(".top_div").get(0)) $(".top_div").hide();
        clearInterval(scr_time);
        if(scrT > docH*3){
            if(!$(".top_div").get(0)){
                var top_html = "<div class=\"top_div\"><a href=\"javascript:document.body.scrollTop = 0\">&nbsp;</a></div>";
                $("body").append(top_html);
            }
            scr_time = setInterval(show_top,100);
        }
    };
    function show_top(){
        $(".top_div").show();
        clearInterval(scr_time);
    };

    //iphone
//    if(____json4fe.catentry.name == "sou" && $(".index_div")&& window.location.href.indexOf("local")>0){
//        if ((/iphone|ipad/gi).test(navigator.appVersion)) {
//            if(window.localStorage){
//                if(typeof(localStorage.addLayer)=='undefined'){
//                    $(".index_div").append('<div id="addMscreen"><b class="ico_close"></b><p>请按下方"<strong>+</strong>"或者"<strong>@</strong>"<br>然后选择 "添加到主屏幕"<br>即可快速浏览我们了啦!</p><div class="addThree"></div></div>');
//                    $('#addMscreen').css("display","block");
//                    localStorage.setItem('addLayer','addMscreen');
//                }
//                $('.ico_close').bind('click',function(){
//                    $('#addMscreen').css("display","none");
//                });
//                $('#addMscreen').bind('click',function(){
//                    $(this).css("display","none");
//                });
//            }
//        }
//    };

    a_init();

    //屏幕旋转时重置列表页适配 and android不支持orientationchange 的处理
    window.addEventListener("orientationchange",function(){
        infoListIconStyle();
    });
    if(jq.os.android){
        window.addEventListener("resize",function(){
            infoListIconStyle();
        });
    }

});


function a_init(){
    $("a").bind("touchstart",function(){
        if(!$(this).hasClass("disabled")){
            if($(this).parent().hasClass("nav_tt") || $(this).parent().hasClass("other_title") || $(this).parent().hasClass("menu_title") ){
                if(!$(this).parent().hasClass("nav_tta")){
                    $(this).addClass("hover1");
                }
            }else{
                if($(this).attr("class") != "nav_aurl"){
                    $(this).addClass("hover");
                }
            }
        }
    });
    $("a").bind("touchmove",function(){
        $(this).removeClass("hover");
        $(this).removeClass("hover1");
    });
    $("a").bind("touchend",function(){
        $(this).removeClass("hover");
        $(this).removeClass("hover1");
    });
    $("a").bind("touchcancel",function(){
        $(this).removeClass("hover");
        $(this).removeClass("hover1");
    });
}


function body_init(){
    var body_height = parseInt($(".body_div").css("height"));
    var win_height = window.innerHeight;
    if(body_height < win_height){
        var top_margin = win_height-body_height-2;
        $(".footer").css("margin-top",top_margin+"px");
    }
}

//dom 解析完成后执行
document.addEventListener("DOMContentLoaded",function(){
    detailAttrStyle();
});

//列表页文字图片适配
var infoListIconStyle=function(){
    if(!$(".infolst").length){return}
    var currUl = $(".infolst");
    var currUlIndex = currUl.length-1;
    $(currUl.get(currUlIndex)).find("li").each(function(){
        var tagi = $(this).find("dt i");
        if(tagi.length==1){
            $(this).find("strong").css("padding-right","40px");
        }else if(tagi.length==2){
            $(this).find("strong").css("padding-right","55px");
            $(this).find(".biz").css("right","20px");
            $(this).find(".qiandai").css("right","20px");
        }
    });
};


// cookie存储
(function($){
    $.cookie = {
        get: function (name, encode) {
            var arg = name + "=";
            var alen = arg.length;
            var clen = document.cookie.length;
            var i = 0;
            var j = 0;
            while (i < clen) {
                j = i + alen;
                if (document.cookie.substring(i, j) == arg)
                    return this.getCookieVal(j, encode);
                i = document.cookie.indexOf(" ", i) + 1;
                if (i == 0)
                    break;
            }
            return null;
        },
        //取cookie串下的某个参数值
        getname:function(cookie_name,name){
            var cookie_val = this.get(cookie_name);
            var regex = new RegExp("[?&]" + encodeURIComponent(name) + "\\=([^&#]+)");
            var value = (cookie_val.match(regex)||["",""])[1];
            return decodeURIComponent(value);
        },
        set: function (name, value, expires, path, domain, secure) {
            var argv = arguments;
            var argc = arguments.length;
            //        var expires = (argc > 2) ? argv[2] : null;
            var now = new Date();
            var expires = (argc > 2) ? argv[2] : new Date(now.getFullYear(), now.getMonth() + 1, now.getUTCDate());
            var path = (argc > 3) ? argv[3] : '/';
            var domain = (argc > 4) ? argv[4] : '.58.com';
            var secure = (argc > 5) ? argv[5] : false;
            document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
        },
        remove: function (name) {
            if (this.get(name)) this.set(name, "", new Date(1970, 1, 1));
        },

        getCookieVal : function(offset, encode){
            var endstr = document.cookie.indexOf(";", offset);
            if (endstr == -1) {
                endstr = document.cookie.length;
            }
            if (encode == false) return document.cookie.substring(offset, endstr);
            else return unescape(document.cookie.substring(offset, endstr));
        }
    };
})(jq);



var loadJS = function(url,callback){
    var head = document.getElementsByTagName('head');
    if(head&&head.length){
        head = head[0];
    }else{
        head = document.body;
    }
    var script = document.createElement('script');
    script.src = url;
    script.type = "text/javascript";
    head.appendChild(script);
    if(arguments.length == 2){
        //document.addEventListener("DOMContentLoaded", function () {
			//console.log('DOMContentLoaded');
            script.onload = function(){
				callback();
                script.onload=null;
            }
        //});
    }
};




/*lbs*/
var lbsAction;
function getLbsLocation(action)
{
    lbsAction = action;
    window.BMap_loadScriptTime = (new Date).getTime();
    if (navigator.geolocation)
    {
        loadJS("http://api.map.baidu.com/getscript?v=1.3&ak=&services=&t=20140102035033", onMapJsLoaded);
    }
    else
    {
        alert("您的浏览器不支持使用HTML5来获取地理位置服务");
    }
}


function onMapJsLoaded()
{
    loadJS("http://api.map.baidu.com/res/13/bmap.css", onLbsPrepared);
}

function handleError(value)
{
    switch (value.code)
    {
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

function onLbsPrepared()
{
    if ("teacher" == lbsAction)
    {
        navigator.geolocation.getCurrentPosition(jumpNearbyTeacherList, handleError, { enableHighAccuracy: true, maximumAge: 1000 });
    }
    else if ("student" == lbsAction)
    {
        navigator.geolocation.getCurrentPosition(jumpNearbyStudentList, handleError, { enableHighAccuracy: true, maximumAge: 1000 });
    }
}



function initCommonPageScriptAll(v) 
    {
        //alert('d');
        initAdSwipe();

        initCommonPageScriptMarquee();

        gotoTop(600);

        

    }

    function initCommonPageScriptMarquee() {
        if ($("#marquee").length > 0) {
            $("#marquee").marquee({ yScroll: "bottom" });
        }
    }

    function initAdSwipe() {
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

    function initAdSwipe0() {
        var elem = document.getElementById('myAdSwipe');
        window.myAdSwipe = Swipe(elem,
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
                ret = $(children[i])[0].nextSibling.innerHTML;
                break;
            }
        }
        return ret;
    }
    function setSelectedRadioButtonListIndex(id,index) {
        var children;
        var string = '#' + id + ' input';
        children = $(string);
        for (var i = 0; i < children.length; i++) {
            if (i == index) {
                $(children[i])[0].checked = true;
                break;
            }
        }
        changeRadio($('#' + id)[0]);
    }

//radiobuttonlist
    function decroateRadioList(queryObj) {
        var id = queryObj.attr("id");
        var inputString = '#' + id + ' input';
        var inputs = $(inputString);
        var ul = $("<ul class='ul_radiobuttonlist clearfix'></ul>");
        var what = queryObj.append(ul);
        for (var i = 0; i < inputs.length; i++) {
            var tempLabel = $(inputs[i])[0].nextSibling;
            var text = $(tempLabel).html();
            var html = $(inputs[i])[0].outerHTML;
            var liText = "<li id='myli{0}' onclick=setSelectedRadioButtonListIndex('{3}',{0})>{1}<span>{2}</span></li>";
            liText = liText.format(i, html,text, id);
            ul.append($(liText));
            $(inputs[i]).remove();
            $(tempLabel).remove();
        }

        adjustWidth(queryObj[0]);
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
            for (var i = 0; i < children.length; i++) 
            {
                    li = liTemplate.format(i);
                    $("#" + id + " #" + li).removeClass("current");
            }
        }
    }

    function setRadioButtonListSelected(ctrl, value) {

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
        for (var i = 0; i < children.length; i++) 
        {
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
            }
        }
    }

    function isMobile(s) {
        var mobile = s;
        var pattern = /^[0]{0,1}(13|15|18){1}(\d){1}[ ]?[-]?(\d){8,8}$/;
        if (pattern.test(mobile))
            return true;
        else
            return false;
    }


    function gotoTop(min_height) {
        //预定义返回顶部的html代码，它的css样式默认为不显示
        var gotoTop_html = '<div id="gotoTop"><em>顶部</em></div>';
        //将返回顶部的html代码插入页面上id为page的元素的末尾 
        $("body").append(gotoTop_html);
        $("#gotoTop")[0].onclick = function () {                        
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        }
        //获取页面的最小高度，无传入值则默认为600像素
        min_height ? min_height = min_height : min_height = 600;
        //为窗口的scroll事件绑定处理函数
        $(window)[0].onscroll = (function () {
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
    function decroateCheckBox(queryObj) {
        var id = queryObj.attr("id");
        var inputString = '#' + id + ' input';
        var inputs = $(inputString);
        var ul = $("<ul class='ul_checkboxlist clearfix'></ul>");
        var what = queryObj.append(ul);
        var alt = "0";
        for (var i = 0; i < inputs.length; i++) {
            var tempLabel = $(inputs[i])[0].nextSibling;
            var text = $(tempLabel).text();
            var html = $(inputs[i])[0].outerHTML;
            alt = $(inputs[i]).parent("span").attr("alt");
            var liText = "<li id='myli{0}' onclick=setSelectedCheckBox('{3}',{0})>{1}<span alt='{4}'>{2}</span></li>";
            liText = liText.format(i, html, text, id,alt);
            ul.append($(liText));
            $(inputs[i]).remove();
            $(tempLabel).remove();
        }

        adjustWidth(queryObj[0]);
    }


    function setSelectedCheckBox(id, index) {
        var children;
        var string = '#' + id + ' input';
        children = $(string);

        var old = $(children[index])[0].checked;

        $(children[index])[0].checked = !old;


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


    function openLink(link) {
        window.location.href = link;
    }

function keywordComplete() {
        var inputValue = '';
        $("#TextBoxKeyword").autocomplete(null, {
            minChars: 1,
            matchCase: false, //不区分大小写
            autoFill: false,
            max: 20,
            width: 280,
            url: '/http/search',
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
                openLink(t.url);
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


    /*marque start*/
    ; (function ($) {
        // set the version of the link select
        $.marquee = { version: "1.0.01" };

        $.fn.marquee = function (options) {
            var method = typeof arguments[0] == "string" && arguments[0];
            var args = method && Array.prototype.slice.call(arguments, 1) || arguments;
            // get a reference to the first marquee found
            //var self = (this.length == 0) ? null : $.data(this[0], "marquee");
            var self = (this.length == 0) ? null : $(this[0]).data("marquee");

            // if a method is supplied, execute it for non-empty results
            if (self && method && this.length) {

                // if request a copy of the object, return it			
                if (method.toLowerCase() == "object") return self;
                // if method is defined, run it and return either it's results or the chain
                else if (self[method]) {
                    // define a result variable to return to the jQuery chain
                    var result;
                    this.each(function (i) {
                        // apply the method to the current element
                        //var r = $.data(this, "marquee")[method].apply(self, args);
                        var r = $(this).data("marquee")[method].apply(self, args);
                        // if first iteration we need to check if we're done processing or need to add it to the jquery chain
                        if (i == 0 && r) {
                            // if this is a jQuery item, we need to store them in a collection
                            if (!!r.jquery) {
                                result = $([]).add(r);
                                // otherwise, just store the result and stop executing
                            } else {
                                result = r;
                                // since we're a non-jQuery item, just cancel processing further items
                                return false;
                            }
                            // keep adding jQuery objects to the results
                        } else if (!!r && !!r.jquery) {
                            result = result.add(r);
                        }
                    });

                    // return either the results (which could be a jQuery object) or the original chain
                    return result || this;
                    // everything else, return the chain
                } else return this;
                // initializing request
            } else {
                // create a new marquee for each object found
                return this.each(function () {
                    new $.Marquee(this, options);
                });
            };
        };

        $.Marquee = function (marquee, options) {
            options = $.extend({}, $.Marquee.defaults, options);

            var self = this, $marquee = $(marquee), current = -1, hard_paused = false, paused = false, loop_count = 0;

            var $lis = $marquee.find("li");

            // store a reference to this marquee
            //$.data($marquee[0], "marquee", self);
            $($marquee[0]).data("marquee", self);

            // pause the marquee
            this.pause = function () {
                // mark as hard pause (no resume on hover)
                hard_paused = true;
                // pause scrolling
                pause();
            }

            // resume the marquee
            this.resume = function () {
                // mark as hard pause (no resume on hover)
                hard_paused = false;
                // resume scrolling
                resume();
            }

            // update the marquee
            this.update = function () {
                var iCurrentCount = $lis.length;

                // update the line items
                $lis = $marquee.find("li");

                // if we only have one item, show the next item by resuming playback (which will scroll to the next item)
                if (iCurrentCount <= 1) resume();
            }

            // code to introduce the new marquee message
            function show(i) {
                // if we're already scrolling an item, stop processing
                if ($lis.filter("." + options.cssShowing).length > 0) 
                {
                   alert('1') ;
                   return false;
                }

                //var $li = $lis.eq(i);
                var $li = $($lis[i]);

                // run the beforeshow callback
                if ($.isFunction(options.beforeshow)) options.beforeshow.apply(self, [$marquee, $li]);

                var outerHeight = 30; // $li.outerHeight();
                var params = {
                    top: (options.yScroll == "top" ? "-" : "+") + 0 + "px"
				, left: 0
                };



                $marquee.data("marquee.showing", true);
                $li.addClass(options.cssShowing);

                //$li.css(params);
                //$li.removeClass("hide");

                $li[0].style.left = 0 + 'px';

                var height = $li[0].clientHeight;
                //alert(height) ;
                var curPos = height;
                //alert(height*-1) ;
                animateTop($li[0],height*1,0,options.showSpeed) ;


                if ($.isFunction(options.show)) options.show.apply(self, [$marquee, $li]);
                $marquee.data("marquee.showing", false);
                scroll($li);

                /*$li.css(params).animate({top: "0px"}, options.showSpeed, options.fxEasingShow, function (){ 
                // run the show callback
                if( $.isFunction(options.show) ) options.show.apply(self, [$marquee, $li]);
                $marquee.data("marquee.showing", false);
                scroll($li);
                });*/
            }

            // keep the message on the screen for the user to read, scrolling long messages
            function scroll($li, delay) {
                // if paused, stop processing
                if (paused == true) return false;

                // get the delay speed
                delay = delay || options.pauseSpeed;
                // if	item is wider than marquee, then scroll
                if (doScroll($li)) {
                    setTimeout(function () {
                        // if paused, stop processing (we need to check to see if the pause state has changed)
                        if (paused == true) return false;

                        var width; //= $li.outerWidth();
                        //width = $li.width() ;
                        width = $li[0].clientWidth;
                        var endPos = width * -1
                        var curPos = parseInt($li.css("left"), 10);

                        // scroll the message to the left					
                        //$li.animate({left: endPos + "px"}, ((width + curPos) * options.scrollSpeed), options.fxEasingScroll, function (){ finish($li); });
                        var from;
                        var to;
                        var scollSpped;
                        to = endPos;
                        from = curPos;
                        scollSpped = options.scrollSpeed;
                        scollSpped = 20 * 1000;
                        animate($li[0], from, to, scollSpped);

                        //finish($li);

                    }, delay);
                } else if ($lis.length > 1) {
                    setTimeout(function () {
                        // if paused, stop processing (we need to check to see if the pause state has changed)
                        if (paused == true) return false;

                        // scroll the message down
                        //$li.animate({top: (options.yScroll == "top" ? "+" : "-") + $marquee.innerHeight() + "px"}, options.showSpeed, options.fxEasingScroll);
                        //$li.addClass("hide");

                        var height = $li[0].clientHeight;
                        var curPos = parseInt($li.css("top"), 10);
                        animateTop($li[0],curPos,height*-1,options.showSpeed) ;

                        // finish showing this message
                        finish($li);
                    }, delay);
                }

            }


            function animateTop(element,from, to,speed) {

                var start = +new Date;

                //element.style.left = to + 'px';
                //return ;
                var timer = setInterval(function () {

                    var timeElap = +new Date - start;
                    //console.log(timeElap);

                    if (timeElap > speed) {

                        element.style.top = to + 'px';

                        clearInterval(timer);

                        //finish($(element));

                        return;

                    }

                    element.style.top = (((to - from) * (Math.floor((timeElap / speed) * 100) / 100)) + from) + 'px';

                }, 4);

            }


            function animate(element, from, to, speed) {

                var start = +new Date;

                //element.style.left = to + 'px';
                //return ;
                var timer = setInterval(function () {

                    var timeElap = +new Date - start;
                    //console.log(timeElap);

                    if (timeElap > speed) {

                        element.style.left = to + 'px';

                        clearInterval(timer);

                        finish($(element));

                        return;

                    }

                    element.style.left = (((to - from) * (Math.floor((timeElap / speed) * 100) / 100)) + from) + 'px';

                }, 4);

            }


            function finish($li) {
                // run the aftershow callback, only after we've displayed the first option
                if ($.isFunction(options.aftershow)) options.aftershow.apply(self, [$marquee, $li]);

                // mark that we're done scrolling this element
                $li.removeClass(options.cssShowing);

                // show the next message
                showNext();
            }

            // this function will pause the current animation
            function pause() {
                // mark the message as paused
                paused = true;
                // don't stop animation if we're just beginning to show the marquee message
                if ($marquee.data("marquee.showing") != true) {
                    // we must dequeue() the animation to ensure that it does indeed stop animation
                    $lis.filter("." + options.cssShowing).dequeue().stop();
                }
            }

            // this function will resume the previous animation
            function resume() {
                // mark the message as resumed
                paused = false;
                // don't resume animation if we haven't completed introducing the message
                if ($marquee.data("marquee.showing") != true) scroll($lis.filter("." + options.cssShowing), 1);
            }

            // determine if we should pause on hover
            /*if( options.pauseOnHover ){
            $marquee.hover(
            function (){
            // if hard paused, prevent hover events
            if( hard_paused ) return false;
            // pause scrolling
            pause();
            }
            , function (){
            // if hard paused, prevent hover events
            if( hard_paused ) return false;
            // resume scrolling
            resume();
            }
            );
            }*/

            // determines if the message needs to be scrolled to read
            function doScroll($li) {
                var liWidth = $li[0].clientWidth;
                var marqueeWidth = $marquee[0].clientWidth;
                return (liWidth > marqueeWidth);
                //return false ;
            }

            // show the next message in the queue		
            function showNext() {
                // increase the current counter (starts at -1, to indicate a new marquee beginning)
                current++;

                // if we only have 1 entry and it doesn't need to scroll, just cancel processing
                if (current >= $lis.length) {
                    // if we've reached our loop count, cancel processing
                    if (!isNaN(options.loop) && options.loop > 0 && (++loop_count >= options.loop)) return false;
                    current = 0;
                }

                // show the next message
                show(current);
            }

            // run the init callback
            if ($.isFunction(options.init)) options.init.apply(self, [$marquee, options]);

            // show the first item
            showNext();
        };

        $.Marquee.defaults = {
            yScroll: "top"                          // the position of the marquee initially scroll (can be either "top" or "bottom")
		, showSpeed: 850                          // the speed of to animate the initial dropdown of the messages
		, scrollSpeed: 12                         // the speed of the scrolling (keep number low)
		, pauseSpeed: 5000                        // the time to wait before showing the next message or scrolling current message
		, pauseOnHover: true                      // determine if we should pause on mouse hover
		, loop: -1                                // determine how many times to loop through the marquees (#'s < 0 = infinite)
		, fxEasingShow: "swing"                   // the animition easing to use when showing a new marquee
		, fxEasingScroll: "linear"                // the animition easing to use when showing a new marquee

            // define the class statements
		, cssShowing: "marquee-showing"

            // event handlers
		, init: null                              // callback that occurs when a marquee is initialized
		, beforeshow: null                        // callback that occurs before message starts scrolling on screen
		, show: null                              // callback that occurs when a new marquee message is displayed
		, aftershow: null                         // callback that occurs after the message has scrolled
        };

    })(window.jq);

    /*marque end*/