var promptLanguage;
var urlOfMobile;
var iszhcn;
var ispc;
var mycookiedomain;
var mostPossibleLink = "";
var isMobileVersion = false;

var STYLEID = '1', STATICURL = 'static/', IMGDIR = '/images', VERHASH = '2016050301', charset = 'gbk', discuz_uid = '0', cookiepre = 't7asq_4ad6_', cookiedomain = '.discuz.net', cookiepath = '/', showusercard = '1', attackevasive = '0', disallowfloat = 'newthread|tradeorder|activity|debate', defaultstyle = '', REPORTURL = 'aHR0cDovL3d3dy5kaXNjdXoubmV0Lw==', SITEURL = '', JSPATH = '/scripts/';
if(!isIE()){  //firefox  innerText  define 
      HTMLElement.prototype.__defineGetter__("innerText", 
        function(){ 
          var  anyString  =  ""; 
          var  childS  =  this.childNodes; 
          for(var  i=0;  i <childS.length;  i++)  { 
            if(childS[i].nodeType==1) 
              anyString  +=  childS[i].tagName=="BR"  ?  '\n'  :  childS[i].innerText; 
            else  if(childS[i].nodeType==3) 
              anyString  +=  childS[i].nodeValue; 
          } 
          return  anyString; 
        } 
      ); 
      HTMLElement.prototype.__defineSetter__("innerText", 
        function(sText){ 
          this.textContent=sText; 
        } 
      );
  }



  function processLanguage() {
      if (true == promptLanguage) 
      {
        configLanguage("abc");
      }
      else 
      {
      }
  }

  function configLanguage(targetUrl) {
      hideMenu();
      var url = "/window/language?url={0}";
      url = url.format(targetUrl);
      var v = { 'maxh': 800, 'pos': '00', 'cache': 0 };
      showWindow("Language", url, 'get', -1, v);
  }

function getSelectedRadioButtonListValue(ctrl)
{
    var ret = "";
    var children = ctrl.children("input");
    for (var i = 0; i < children.length; i++)
    {
        var checked = $(children[i]).prop("checked");
        if (true == checked)
        {
            ret = $(children[i]).val();
            break;
        }
    }
    //var ret = ctrl.children("input[prop:checked]").val();
    return ret;
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


function getSelectedRadioButtonListText(ctrl)
{
    var ret = "";
    var children = ctrl.children("input");
    for (var i = 0; i < children.length; i++)
    {
        var checked = $(children[i]).prop("checked");
        if (true == checked)
        {
            ret = $(children[i]).next().text();
            break;
        }
    }
    return ret;
}


function getSelectedDecoroateRadioButtonListText(ctrl) {
     var ret = "";
     var id = ctrl.attr("id") ;
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

function ifCheckBoxListChecked(ctrlid) {
    ret = false; 
    var valueText = ""; //保存checkbox选中值
    var value = "";    
    var expression = '#'+ ctrlid + ' input[type=checkbox]:checked' ;
    $(expression).
    each(function () {
        if (false == ret) {
            value += valueText;
            ret = true;
        }
    }
    );
    return ret ;
}


function ifRadioButtonListChecked(radiobuttonlist)
{
     var ret ;
     ret = false ;
     var inputs = radiobuttonlist.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++)
      {
        if (inputs[i].checked) 
        {
            ret = true ;
            break ;
        }
      }
      return ret ;
 }
         
   function master(id)
  {
   return $('#ctl00_P_' + id) ;
}

function getId(id) {
    return 'ctl00_P_' + id;
}
   
  function $$(id)
  {
    return document.getElementById(id) ;
  }

String.prototype.trim = function() {
    // 用正则表达式将前后空格  
    // 用空字符串替代。  
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

function convert() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if ("text" == inputs[i].type || "password" == inputs[i].type) {
            inputs[i].value = toDBC(inputs[i].value);
            inputs[i].value = inputs[i].value.trim();
            
        }
    }

    var textareas = document.getElementsByTagName("textarea");
    for (var i = 0; i < textareas.length; i++) 
    {
        if ("1" == $(textareas[i]).attr("fullwidth")) {
            continue;
        }
        else {
            var temp = $(textareas[i]).val();
            temp = toDBC(temp);
            temp = temp.trim();
            $(textareas[i]).val(temp)
        }
    }
}

function toDBC(Str) {
    var DBCStr = "";
    for (var i = 0; i < Str.length; i++) {
        var c = Str.charCodeAt(i);
        if (c == 12288) {
            DBCStr += String.fromCharCode(32);
            continue;
        }
        if (c > 65280 && c < 65375) {
            DBCStr += String.fromCharCode(c - 65248);
            continue;
        }
        DBCStr += String.fromCharCode(c);
    }
    return DBCStr;
}



//半角转换为全角函数
   function ToQuanjiao(txtstring)
   {
    var   tmp   =   "";
    
    for(var i=0;i<txtstring.length;i++)
    {  
    if(txtstring.charCodeAt(i)==32)
     { 
     tmp= tmp+  String.fromCharCode(12288);
     continue;
   }
    if(txtstring.charCodeAt(i)<127)
    {
     tmp=tmp+String.fromCharCode(txtstring.charCodeAt(i)+65248);
     continue;
     }    
       tmp += String.fromCharCode(txtstring.charCodeAt(i));
      
   }
   return tmp;     
  }

 function isEmail(email) 
 {
    //regmail=/^\w+@\w+(\.\w+)*$/g;   
    regmail=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;   
    return regmail.test(email) ;
 }


function isPostcode(s)   
{
    var number=s;
    var pattern=/^\d{6}$/;   
    if (pattern.test(number))
        return true;  
    else
        return false;
}


function isMobile(s)   
{
    var mobile=s;
    var pattern=/^[0]{0,1}(13|15|18){1}(\d){1}[ ]?[-]?(\d){8,8}$/;   
    if (pattern.test(mobile))
        return true;  
    else
        return false;
}

//检验固定电话

function isfixedphone(s) {
    var number = s;
    var pattern = /^\(0\d{2}\)[- ]?\d{8}$|^0\d{2}[- ]?\d{8}$|^\(0\d{3}\)[- ]?\d{7,8}$|^0\d{3}[- ]?\d{7,8}$/;
    if (pattern.test(number))
        return true;
    else
        return false;
}


//copy url
function CopyURL(obj)
{
	var myHerf = top.location.href;
	var title  = document.title;
	if(window.clipboardData)
	{
	    //alert($(obj).val());
	    var ok = window.clipboardData.setData("Text",$(obj).val());
		if(ok) alert("按Ctrl + V ,粘贴发送给您的好友们吧 ！");
	}else
	{
		//alert("对不起，目前此功能不支持当前浏览器，请直接手动复制！");
	}
}

function SetCookies2(referrer,value)
{
SetCookies(value) ;
window.location = referrer ;
}

function SetShareCookies(value,domain,where)
    {
    	var Days = 360; //此 cookie 将被保存 360 天

    	var exp  = new Date();    //new Date("December 31, 9998");
    	exp.setTime(exp.getTime() + Days*24*60*60*1000);
    	
    	document.cookie = "chome="+ escape (value) + ";expires=" + exp.toGMTString() + ";domain="+domain;
    	if(null!=where&&where.length>0)
    	{
    	    window.location = where ;
    	}
    	else
    	{
    	    window.location = '/' ;
    	}
    	//alert(document.referrer) ;
    }
    

    function SetCookies0(value)
    {
    	var Days = 360; //此 cookie 将被保存 360 天

    	var exp  = new Date();    //new Date("December 31, 9998");
    	exp.setTime(exp.getTime() + Days*24*60*60*1000);
    	var domain = ".lovejiajiaodev.com" ;
    	document.cookie = "home="+ escape (value) + ";expires=" + exp.toGMTString() + ";domain="+domain;
    	//alert(<%=_Domain%>) ;
    	//alert('dd') ;
    	
    	window.location = "/" ;
    	//alert(document.referrer) ;
    }
    
    function getCookie( name ) 
{ 
var start = document.cookie.indexOf( name + "=" ); 
var len = start + name.length + 1; 
if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) { 
return null; 
} 
if ( start == -1 ) return null; 
var end = document.cookie.indexOf( ';', len ); 
if ( end == -1 ) end = document.cookie.length; 
return unescape( document.cookie.substring( len, end ) );
}


function setmycookie(cookieName, cookieValue, seconds) {
    var d = new Date();
    d.setTime(d.getTime() + seconds);
    var expires = "expires=" + d.toUTCString();
    var path = "path=/";
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";" + path + ";" + "domain=" + mycookiedomain;
}

  
  String.prototype.trimleftbrace= function()  
{    
    return this.replace(/(^\(*)|(\(*$)/g, "");  
}

  String.prototype.trimrightbrace= function()  
{    
    return this.replace(/(^\)*)|(\)*$)/g, "");  
}
  
  
  //正则表达式将前后空格  
  //用空字符串替代。    
String.prototype.trim= function()  
{    
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}



  //正则表达式将前逗号
String.prototype.trimcomma= function()  
{    
    return this.replace(/(^,*)|(,*$)/g, "");  
}


String.prototype.format = function()
{
    var args = arguments;
    return this.replace(/\{(\d+)\}/g,               
        function(m,i){
            return args[i];
        });
}


function  isIE(){  //ie? 
      if  (window.navigator.userAgent.toLowerCase().indexOf("msie")>=1) 
        return  true; 
      else 
        return  false; 
} 

function getEvent()
{
 if(document.all)    return window.event;//如果是ie
 func=getEvent.caller;
        while(func!=null){
            var arg0=func.arguments[0];
            if(arg0){if((arg0.constructor==Event || arg0.constructor ==MouseEvent) || (typeof(arg0)=="object" && arg0.preventDefault && arg0.stopPropagation)){return arg0;}            }
            func=func.caller;
        }
       return null;
}


function QueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


   function PreviewImg(imgFile)
{
//新的预览代码，支持 IE6、IE7。
imgFile = "F:\\temp\\F001017.jpg" ;
var newPreview = document.getElementById("newphotoreview");
newPreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgFile;
newPreview.style.width = "95px";
newPreview.style.height = "95px";
}


   function PreviewImg2(input)
{
//新的预览代码，支持 IE6、IE7。
var imgFile = getFullPath(input) ;
//var imgFile = $(input).attr('name') ;;
//alert(imgFile) ;
//imgFile = "F:\\temp\\F001017.jpg" ;
var newPreview = document.getElementById("newphotoreview");
newPreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgFile;
newPreview.style.width = "95px";
newPreview.style.height = "95px";
}


function getFullPath(obj)
{
    if(obj)
    {
        //ie
        if (window.navigator.userAgent.indexOf("MSIE")>=1)
        {
            obj.select();
            return document.selection.createRange().text;
        }
        //firefox
        else if(window.navigator.userAgent.indexOf("Firefox")>=1)
        {
           if(obj.files)
            {
               return obj.files.item(0).getAsDataURL();
            }
            return obj.value;
        }
        
        return obj.value;
    }
}



function GetLat(latlon)
{
    var ret = '' ;
    if(''!=latlon)
    {
        var pos = latlon.indexOf(',',0) ;
        if(pos>0)
        {
        ret = latlon.substr(0,pos) ;
        }
    }
    
    return ret ;
}

function GetLon(latlon)
{
    var ret = '' ;
    if(''!=latlon)
    {
        var pos = latlon.indexOf(',',0) ;
        if(pos>0)
        {
        ret = latlon.substr(pos+1) ;
        }
    }
    
    return ret ;
}




function addfavorite(url, title) {
  
	if(!url)
	{
		url = window.location.href;
	}
	if(!title)
	{
		title = document.title;
    }

try {
    window.external.addFavorite(url, title);
} catch (e) {
    try {
        window.sidebar.addPanel(title, url, '');
    } catch (e) {
       alert("请按 Ctrl+D 键添加到收藏夹", 'notice');
    }
}

}


function ifContain(parent, child) {
    if (parent.indexOf(child) >= 0) {
        return true;
    }
    else {
        return false;
    }
}




function mouseOver(row) {
    var old = $(row).css("background-color");
    $(row).attr("old-background-color", old);
    $(row).css("background-color", "#c9e39c");
    //$(row).css("color", "#fff");
}

function mouseOut(row) {

    var old = $(row).attr("old-background-color");
    //alert(old);
    $(row).css("background-color", old);

    //$(row).css("color", "");
}


function parseBoolean(str)
{
    return /^true$/i.test(str);
}



function openLink(link) {
    window.location.href=link;
}

function keywordComplete() {

    var inputValue = '';
    $("#TextBoxKeyword").autocomplete(null, {
        minChars: 1,
        matchCase: false, //不区分大小写
        autoFill: false,
        max: 20,
        width:280,
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
                ret += "搜索";
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


//return pressed
function processenter() {
    if (document.addEventListener) {
        document.addEventListener("keypress", fireFoxHandler, false);

    } else {
        document.attachEvent("onkeypress", ieHandler);
    }
}

function fireFoxHandler(evt) {
    if (evt.keyCode == 13) {
        //alert('ff');
        document.all['searchbutton'].click();
        //$('#searchbutton').click();
        return false;
    }
}

function ieHandler(evt) {

    if (evt.keyCode == 13) {
        document.all['searchbutton'].click();
        return false;
    }
}


function search() {
    var url = "";
    if ("" != mostPossibleLink) {
        window.location.href = mostPossibleLink;
    }
    else {
        var keyword = $("#TextBoxKeyword").val();
        if (userNameInputTip == keyword || "" == keyword) {
            keyword = "";
            url = "/teacherlist";
        }
        else {
            url = "/teacherlist/keyword" + keyword + "";
        }
        window.location.href = url;
    }
}


//from coordinate.js
function getPosition(e) {
    var left = 0;
    var top = 0;

    while (e.offsetParent) {
        left += e.offsetLeft;
        top += e.offsetTop;
        e = e.offsetParent;
    }

    left += e.offsetLeft;
    top += e.offsetTop;
    return { x: left, y: top };
}

//from jquery.extend.js
$.ajaxWebService = function (url, dataMap, fnSuccess) {
    //alert(url);
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: url,
        data: dataMap,
        dataType: "json",
        success: fnSuccess
    });
}

$.fn.loadUserControl = function (control, page) {
    var $dom = this;
    //alert(control);
    if (page == "" || page == null) {
        page = location.pathname.replace("/", "");
    }

    page += "/RenderUserControl"; //RenderUserControl是PageProxy中的方法，不要轻易修改
    $.ajaxWebService(page, "{control:'" + control + "'}", function (result) {
        $dom.html(result.d);
    });

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


function inputtype() {
    $(".digital").keyup(function () {
        this.value = this.value.replace(/\D/g, '');
    }
    );

    $(".digital").afterpaste(function () {
        this.value = this.value.replace(/\D/g, '');
    }
    );
}


$.fn.ShowSelfTip = function (tip) {
    var $dom = this;

    init();


    $dom.bind("blur", function () { onblur(); });
    $dom.bind("focus", function () { onfocus(); });
    $dom.bind("click", function () { onfocus(); });

    function onblur() {
        if ($dom.val() == '') {
            $dom.val(tip);
            $dom.addClass('cgray');
        }
        else if ($dom.val() == tip) {
            $dom.val(tip);
        }
        else {
            //$dom.val('');
            $dom.removeClass('cgray');
        }
    }


    function onfocus() {
        //alert('dd');
        if ($dom.val() == tip) {
            $dom.val('');
        }
        $dom.removeClass('cgray');
    }


    function init() {
        if ($dom.val() != tip) {
            //$dom.val(tip);
        }

        if ($dom.val() == '') {
            $dom.val(tip);
            $dom.addClass('cgray');
        }
    }
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
    return $(this).each(function () 
    {
        $(this).hover(function () 
        {
            clearTimeout(outTimer);
            hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
        },
            function () 
            {
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });
    });
 }


 $.fn.showByPart = function () {
     var $dom = this;     
     $dom.bind("keyup", function (event) { onkeyup(event); });

     function onkeyup(e) {

         var currKey = 0, e = e || event;
         currKey = e.keyCode || e.which || e.charCode;
         //alert(currKey);
         if (8 == currKey) {
             return;

         }

         var val = $.trim($dom.val()).replace(/\s/g, '');
         if (val.length <= 8) {
             
             return;
         }
         var val2 = "";

         for (var i = 0; i < val.length; i++) {
             val2 += val.split('')[i];
             if ((i + 1) % 4 == 0) {
                 val2 += ' ';
             }
         }

         var val3 = "";
         val3 = val.replace(/^(\d{3})|(\d{4})/g, "$& ")
         //val3 = val.replace(/^(\d{3})(\d{1,4})(\d{1,4})$/, "$1 $2 $3")

         $dom.val(val3);
     }

 }


$.fn.showQQByPart = function () {
    var $dom = this;
    $dom.bind("keyup", function (event) { onkeyup(event); });
    function onkeyup(e) {
        var currKey = 0, e = e || event;
        currKey = e.keyCode || e.which || e.charCode;
        if (8 == currKey) {
            return;
        }

        var val = $.trim($dom.val()).replace(/\s/g, '');

        var val2 = "";

        for (var i = 0; i < val.length; i++) {
            val2 += val.split('')[i];
            if ((i + 1) % 4 == 0) {
                val2 += ' ';
            }
        }
        $dom.val(val2);
    }
}


/**
* $.float
* @extends jquery.1.4
* @fileOverview 创建一个悬浮层，支持上、下、左、右、右中、左中浮动
* @author 明河共影
* @email mohaiguyan12@126.com
* @version 0.1
* @date 2010-04-18
* Copyright (c) 2010-2010 明河共影
* @example
*    $("#to-right").float({position:"rm"}); //右中位置浮动
*/
jQuery.fn.float = function (settings) {
    if (typeof settings == "object") {
        settings = jQuery.extend({
            //延迟
            delay: 1000,
            //位置偏移
            offset: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            style: null, //样式
            width: 100,  //宽度
            height: 200, //高度
            position: "rm" //位置
        }, settings || {});
        var winW = $(window).width();
        var winH = $(window).height();

        //根据参数获取位置数值
        function getPosition($applyTo, position) {
            var _pos = null;
            switch (position) {
                case "rm":
                    $applyTo.data("offset", "right");
                    $applyTo.data("offsetPostion", settings.offset.right);
                    _pos = { right: settings.offset.right, top: winH / 2 - $applyTo.innerHeight() / 2 };
                    break;
                case "lm":
                    $applyTo.data("offset", "left");
                    $applyTo.data("offsetPostion", settings.offset.left);
                    _pos = { left: settings.offset.left, top: winH / 2 - $applyTo.innerHeight() / 2 };
                    break;
                case "rb":
                    _pos = { right: settings.offset.right, top: winH - $applyTo.innerHeight() };
                    break;
                case "lb":
                    _pos = { left: settings.offset.left, top: winH - $applyTo.innerHeight() };
                    break;
                case "l":
                    _pos = { left: settings.offset.left, top: settings.offset.top };
                    break;
                case "r":
                    _pos = { right: settings.offset.right, top: settings.offset.top };
                    break;
                case "t":
                    $applyTo.data("offset", "top");
                    $applyTo.data("offsetPostion", settings.offset.top);
                    _pos = { left: settings.offset.left, top: settings.offset.top };
                    break;
                case "b":
                    $applyTo.data("offset", "bottom");
                    $applyTo.data("offsetPostion", settings.offset.bottom);
                    _pos = { left: settings.offset.left, top: winH - $applyTo.innerHeight() };
                    break;
            }
            return _pos;
        }
        //设置容器位置
        function setPosition($applyTo, position, isUseAnimate) {
            var scrollTop = $(window).scrollTop();
            var scrollLeft = $(window).scrollLeft();
            var _pos = getPosition($applyTo, position);
            _pos.top += scrollTop;
            isUseAnimate && $applyTo.stop().animate(_pos, settings.delay) || $applyTo.css(_pos);
        }
        return this.each(function () {
            var $this = $(this);
            $this.css("position", "absolute");
            settings.style && $this.css(settings.style);
            setPosition($this, settings.position);
            $(this).data("isAllowScroll", true);
            $(window).scroll(function () {
                $this.data("isAllowScroll") && setPosition($this, settings.position, true);
            });
        })
    } else {
        var speed = arguments.length > 1 && arguments[1] || "fast";
        this.each(function () {
            if (settings == "clearOffset") {
                var _c = {};
                if ($(this).data("offset")) {
                    _c[$(this).data("offset")] = 0;
                    $(this).data("isAllowScroll", false);
                    $(this).stop().animate(_c, speed);
                }
            } else if (settings == "addOffset") {
                var _c = {};
                if ($(this).data("offset") && $(this).data("offsetPostion")) {
                    _c[$(this).data("offset")] = $(this).data("offsetPostion");
                    $(this).stop().animate(_c, speed);
                    $(this).data("isAllowScroll", true);
                }

            } else if (settings == "setScrollDisable") {
                $(this).data("isAllowScroll", false);
            } else if (settings == "setScrollUsable") {
                $(this).data("isAllowScroll", true);
            }
        })
    }
};

//from default.js
function initSlide(container, slider, count) {

    var forEach = function (array, callback, thisObject) {
        if (array.forEach) {
            array.forEach(callback, thisObject);
        } else {
            for (var i = 0, len = array.length; i < len; i++) { callback.call(thisObject, array[i], i, array); }
        }
    }

    var st = new SlideTrans(container, slider, count, { Vertical: false });

    var nums = [];
    //插入数字
    for (var i = 0, n = st._count - 1; i <= n; ) {
        (nums[i] = slide$("idNum").appendChild(document.createElement("li"))).innerHTML = ++i;
    }

    forEach(nums, function (o, i) {
        o.onmouseover = function () { o.className = "on"; st.Auto = false; st.Run(i); }
        o.onmouseout = function () { o.className = ""; st.Auto = true; st.Run(); }
    })

    var images = [];
    var idSliderContainer = document.getElementById('idSlider');
    images = idSliderContainer.getElementsByTagName('img');
    //alert(images.length) ;

    forEach(images, function (o, i) {
        o.onmouseover = function () { st.Auto = false; st.Run(i); }
        o.onmouseout = function () { st.Auto = true; st.Run(); }
    })


    st.onStart = function () {
        forEach(nums, function (o, i) { o.className = st.Index == i ? "on" : ""; })
    }
    st.Run();
}


//from slide.js
var slide$ = function (id) {
    return "string" == typeof id ? document.getElementById(id) : id;
};

var Extend = function (destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
}

var CurrentStyle = function (element) {
    return element.currentStyle || document.defaultView.getComputedStyle(element, null);
}

var Bind = function (object, fun) {
    var args = Array.prototype.slice.call(arguments).slice(2);
    return function () {
        return fun.apply(object, args.concat(Array.prototype.slice.call(arguments)));
    }
}

var Tween = {
    Quart: {
        easeOut: function (t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        }
    },
    Back: {
        easeOut: function (t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        }
    },
    Bounce: {
        easeOut: function (t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        }
    }
}


//容器对象,滑动对象,切换数量
var SlideTrans = function (container, slider, count, options) {
    this._slider = slide$(slider);
    this._container = slide$(container); //容器对象
    this._timer = null; //定时器
    this._count = Math.abs(count); //切换数量
    this._target = 0; //目标值
    this._t = this._b = this._c = 0; //tween参数

    this.Index = 0; //当前索引

    this.SetOptions(options);

    this.Auto = !!this.options.Auto;
    this.Duration = Math.abs(this.options.Duration);
    this.Time = Math.abs(this.options.Time);
    this.Pause = Math.abs(this.options.Pause);
    this.Tween = this.options.Tween;
    this.onStart = this.options.onStart;
    this.onFinish = this.options.onFinish;

    var bVertical = !!this.options.Vertical;
    this._css = bVertical ? "top" : "left"; //方向

    //样式设置
    var p = CurrentStyle(this._container).position;
    p == "relative" || p == "absolute" || (this._container.style.position = "relative");
    this._container.style.overflow = "hidden";
    this._slider.style.position = "absolute";

    this.Change = this.options.Change ? this.options.Change :
		this._slider[bVertical ? "offsetHeight" : "offsetWidth"] / this._count;
};
SlideTrans.prototype = {
    //设置默认属性
    SetOptions: function (options) {
        this.options = {//默认值
            Vertical: true, //是否垂直方向（方向不能改）
            Auto: true, //是否自动
            Change: 0, //改变量
            Duration: 50, //滑动持续时间
            Time: 10, //滑动延时
            Pause: 6000, //停顿时间(Auto为true时有效)
            onStart: function () { }, //开始转换时执行
            onFinish: function () { }, //完成转换时执行
            Tween: Tween.Quart.easeOut//tween算子
        };
        Extend(this.options, options || {});
    },
    //开始切换
    Run: function (index) {
        //修正index
        index == undefined && (index = this.Index);
        index < 0 && (index = this._count - 1) || index >= this._count && (index = 0);
        //设置参数
        this._target = -Math.abs(this.Change) * (this.Index = index);
        this._t = 0;
        this._b = parseInt(CurrentStyle(this._slider)[this.options.Vertical ? "top" : "left"]);
        this._c = this._target - this._b;

        this.onStart();
        this.Move();
    },
    //移动
    Move: function () {
        clearTimeout(this._timer);
        //未到达目标继续移动否则进行下一次滑动
        if (this._c && this._t < this.Duration) {
            this.MoveTo(Math.round(this.Tween(this._t++, this._b, this._c, this.Duration)));
            this._timer = setTimeout(Bind(this, this.Move), this.Time);
        } else {
            this.MoveTo(this._target);
            this.Auto && (this._timer = setTimeout(Bind(this, this.Next), this.Pause));
        }
    },
    //移动到
    MoveTo: function (i) {
        this._slider.style[this._css] = i + "px";
    },
    //下一个
    Next: function () {
        this.Run(++this.Index);
    },
    //上一个
    Previous: function () {
        this.Run(--this.Index);
    },
    //停止
    Stop: function () {
        clearTimeout(this._timer); this.MoveTo(this._target);
    }
};



/*getqq*/
function getQQ() 
{
    $.ajax({
        url: "/ajax/contactqq",
        type: 'GET', dataType: 'html', timeout: 30000,
        success: function (html) {
            if ("" != html) {
                $('#contactqq').html(html);
            }
        }
    });
}


/*show ajex menu*/
function showAjaxMemu(ctrl) {
    //function ajaxmenu(ctrlObj, timeout, cache, duration, pos, recall, idclass, contentclass)
    var screenHeight = document.documentElement.clientHeight;
    ajaxmenu(ctrl, 1000, 1, 2, '00', null, null, null, { 'maxh': screenHeight });
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

/*end of baidu map*/

function initCommonPageScriptHighLightenMenu() {
    var currUrl = window.location.href;
    var pathName = window.location.pathname;
    if ("" == pathName)
    {
        currUrl = currUrl + "/" + "default";
    }
    else if ("/" == pathName)
    {
        currUrl = currUrl + "default";
    }
    //alert(currUrl);
    currUrl = currUrl.toLowerCase();
    var urls = $(".nav a");
    for (var i = 0; i < urls.length; i++) {
        var itemurl = urls[i].href;
        if (0 == i) 
        {
            //alert(itemurl);
        }
        itemurl = itemurl.toLowerCase();
        if ('' != itemurl) {

            if (currUrl == itemurl) {
                //alert('-');
                $(urls[i]).addClass('currnav');
                break;
            }
        }
    }
}


function initCommonPageScriptLazyLoad() {
    $("img.lazy").lazyload();
}

function initCommonPageScriptMarquee() {
    if ($("#marquee").length > 0) {
        $("#marquee").marquee({ yScroll: "bottom" });
    }
}

function initCommonPageScriptWeixin() {
    if ($("#weixin").length > 0) {
        $("#weixin").hoverDelay(
        {
            hoverDuring: 1000,
            hoverEvent: function () {
                showAjaxMemu($("#weixin").get(0));
                //alert('dd');
            }
        });
    }
}


function initCommonPageScriptQrcode() 
{
    $(".qrall").each(function () {
        var temp = this;
        $(this).hoverDelay(
            {
                hoverDuring: 500,
                hoverEvent: function () {
                    //alert($(temp).html());
                    ajaxmenu(temp, 200, 1, 2, '00', null, null, null, { maxh: 900 });
                }
            }
           );
    }
    );
}


function initCommonPageScriptCompany() {
    $(".welcomecompany").each(function () {
        var temp = this;
        $(this).hoverDelay(
            {
                hoverDuring: 500,
                hoverEvent: function () {
                    //alert($(temp).html());
                    ajaxmenu(temp, 200, 1, 2, '43', null, null, null, { maxh: 900 });
                }
            }
           );
    }
    );
}



function initCommonPageScriptLbs() {
    if ($("#lbs").length > 0) {
        $("#lbs").hoverDelay(
        {
            hoverDuring: 500,
            hoverEvent: function () {
                //ajaxmenu(this, 1000, 1, 2, '00', null, null, null, { maxh: 900 });
                ajaxmenu($("#lbs").get(0), 200, 1, 2, '43', null, null, null, { maxh: 900 });
                //alert('dd');
            }
        });
    }
}


function initCommonPageScriptHistory() {
    if ($(".historylinkTop").length > 0) {
        $(".historylinkTop").hoverDelay(
        {
            hoverDuring: 1000,
            hoverEvent: function () {
                showAjaxMemu($(".historylinkTop").get(0));
            }
        });
    }
}


function initCommonPageScriptFloat() {
    $("#righterbar").float({ position: "rm" });
    $("#bottombar").float({ position: "b" });

    if ($("#liveChatBar").length > 0) {
        $("#liveChatBar").removeClass("hide");
        $("#liveChatBar").float({ position: "lm" });
    }
}

function initAdBanner() {
    $('.topadbanner').unslider
    (
        {
            dots: true
        }
    );
}

function initCommonPageScriptAll() {
    initCommonPageScriptLbs();
    initCommonPageScriptQrcode();
    initCommonPageScriptCompany();
    initCommonPageScriptWeixin();
    initCommonPageScriptHistory();
    initCommonPageScriptHighLightenMenu();
    initCommonPageScriptFloat();
    initCommonPageScriptMarquee();
    initCommonPageScriptLazyLoad();

    initAdBanner();

    gotoTop();

    processLanguage() ;
}

function hideLiveChatBarbody() {
    var barBody = $("#liveChatBarbody");
    var onlinechatcollapsed = $("#onlinechatcollapsed");
    if (barBody.hasClass("hide"))
    {
        barBody.removeClass("hide");
        onlinechatcollapsed.addClass("hide");
    }
    else {
        barBody.addClass("hide");
        onlinechatcollapsed.removeClass("hide");
    }
}


function enableTableHover() {

    $('table.general_table tr').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });
}


    //经过变色
$('table.general_table tr').hover(function () {
    $(this).addClass('hover');
}, function () {
    $(this).removeClass('hover');
});



function gotoTop(min_height) {
    //预定义返回顶部的html代码，它的css样式默认为不显示
    var gotoTop_html = '<div id="gotoTop"><em>顶部</em></div>';
    //将返回顶部的html代码插入页面上id为page的元素的末尾 
    $("body").append(gotoTop_html);
    $("#gotoTop").click(//定义返回顶部点击向上滚动的动画
        function () {
            $('html,body').animate({ scrollTop: 0 }, 1);
        }).hover(//为返回顶部增加鼠标进入的反馈效果，用添加删除css类实现
        function () { },
        function () {         
        });
    //获取页面的最小高度，无传入值则默认为600像素
    min_height ? min_height = min_height : min_height = 600;
    //为窗口的scroll事件绑定处理函数
    $(window).scroll(function () {
        //获取窗口的滚动条的垂直位置
        var s = $(window).scrollTop();
        //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
        if (s > min_height) {
            $("#gotoTop").fadeIn(500);
            //alert(document.body.clientWidth);
            //$("#gotoTop").text(document.body.clientWidth);
            //$("#gotoTop").css("margin-left", "465px");
        } else {
            $("#gotoTop").fadeOut(500);
        };
    });
};

function checkLbs(ctrl) {
    $.get("/http/lbs",
                { command: 'check'
                },
                function (data) {
                    var json = eval('(' + data + ')');
                    var callbackfunname = "callbackCheckLbs(json,ctrl)";
                    eval(callbackfunname)
                }
                );
 }

 function callbackCheckLbs(json, ctrl) {
     if ("0" != json.resultId) {
         var url = $(ctrl).attr("href");
         configMyLocation(url);
     }
     else {
         var url = $(ctrl).attr("href");
         window.location = url;
     }
 }


 function configMyLocation(targetUrl) {
     hideMenu();
     var url = "/window/mylocation?url={0}";
     url = url.format(targetUrl);
     var v = { 'maxh': 800, 'pos': '00', 'cache': 0 };
     showWindow("MyLocation", url, 'get', -1, v);
 }
    
 function callbackConfigMyLocation(targetUrl)
 {
     window.location = targetUrl;
 }



 //radiobuttonlist
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
         eval(callback+"()");
     }

     changeRadio($('#' + id)[0]);
 }

 function decroateRadioList(queryObj) {
     var callback = '';
     if (arguments.length > 1) 
     {
         callback = arguments[1];
     }

     var id = queryObj.attr("id");
     var inputString = '#' + id + ' input';
     var inputs = $(inputString);
     var ul = $("<ul class='ul_radiobuttonlist clearfix'></ul>");
     var what = queryObj.append(ul);
     for (var i = 0; i < inputs.length; i++) {
         var tempLabel = $(inputs[i])[0].nextSibling;
         var text = $(tempLabel).html();
         var html = $(inputs[i])[0].outerHTML;
         var liText = "<li id='myli{0}' onclick=setSelectedRadioButtonListIndex('{3}',{0},'{4}')>{1}<span>{2}</span></li>";
         liText = liText.format(i, html,text, id,callback);
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
     if (maxWidth > 0) {
         for (i = 0; i < lis.length; i++) {
             $(lis[i])[0].style.width = maxWidth + 'px';
         }
     }
 }


 function ifSupportHtml5() {
     var ret = false;
     if (window.applicationCache) {
         ret = true;
     }
     else {
         ret = false;
     }
     return ret;
 }