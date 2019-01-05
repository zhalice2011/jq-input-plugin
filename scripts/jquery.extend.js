
///该文件定义了一些jQuery扩展
/// Created By  xmx
/// <reference path="jquery-1.3.2-vsdoc.js" />

///	<summary>
///    jQuery原型扩展，重新封装Ajax请求WebServeice
///	</summary>
///	<param name="url" type="String">
///     处理请求的地址
///</param>
///	<param name="dataMap" type="String">
///     参数，json格式的字符串
///</param>
///	<param name="fnSuccess" type="function">
///     请求成功后的回调函数
///</param>
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

///	<summary>
///    jQuery实例扩展，Ajax加载封装用户控件(*.ascx)，输出Html，仅适用于Asp.Net。
///     依赖 $.ajaxWebService(url, dataMap, fnSuccess)
///	</summary>
///	<param name="control" type="String">
///     需要加载的用户控件的相对路径
///</param>
///	<param name="page" type="String">
///     输出控件Html片段的页面，不一定是当前页面。可选，缺省值为当前页面。
///     该页面需继承代理基类PageProxy，详细代码C#：
//        [WebMethod]
//        public static string RenderUserControl(string control)
//        {
//            Page page = new Page();
//            UserControl ctl = (UserControl)page.LoadControl("~/" + control);
//            page.Controls.Add(ctl);
//            StringWriter writer = new StringWriter();
//            HttpContext.Current.Server.Execute(page, writer, false);
//            return writer.ToString();
//        }
///</param>
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

        var val2 = "";

        for (var i = 0; i < val.length; i++) 
        {
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

jQuery.fn.floatIt = function (options) {
    //parameter like { location: "bottom" } or { location: "top" }
    // by extending the default settings, we don't modify the argument
    settings = jQuery.extend({ location: "bottom" }, options);

    var h = $(window).height();
    var w = $(window).width();

    var topLocation = 10;
    var leftLocation = 10;

    var currentId = $(this).attr("id");

    switch (settings["location"].toLowerCase()) {
        case ("bottom"):

            topLocation = 0;
            $(window).scroll(function () {
                var topLocation = $(document).scrollTop() + $(window).height() - $("#" + currentId).height(); //closure
                $("#" + currentId).css({ position: "absolute", top: topLocation, right: 10 });
            });
            break;
        case ("top"):

            topLocation = 10;
            $(window).scroll(function () {
                var topLocation = $(document).scrollTop() + 10; //closure
                $("#" + currentId).css({ position: "absolute", top: topLocation, right: 10 });
            });
            break;
        default:
            topLocation = h - $(this).width();
            break;
    }

    $("#" + currentId).css({ position: "absolute", top: topLocation, right: leftLocation ,display:''});
};



