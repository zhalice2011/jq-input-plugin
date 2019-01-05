var key_arr = [];
var key_url_arr = [];
if (typeof ____json4fe == 'undefined') {
    var ____json4fe = ____json4fe;
}
function TipWindow(options, containerID, keywordID, buttonID, pageType, oldvalue, scroll, catesou, tipvalue, bcate)
{
    this.options = options ;
    this.containerID = containerID;
    this.keywordID = keywordID;
    this.pageType = pageType;
    this.cacheinputvalue = {};
    this.oldvalue = oldvalue;
    this.scroll = scroll;
    this.catesou = catesou;
    this.tipvalue = tipvalue;
    this.bcate = bcate;
    this.windowId = '';
    this.clear = function (im)
    {
        $('.s_suggest').hide();
        $(im).hide();
        $('.' + this.containerID).hide();

        $('#' + this.keywordID).get(0).focus();
        $('#' + this.keywordID).val(" ");
        setOldValue('');
        $('.ico_clear').hide();
    };

    this.close = function ()
    {
        if ($('#' + this.keywordID).val() == '')
        {
            $('#' + this.keywordID).val(this.oldvalue);
            if (this.oldvalue == this.tipvalue)
            {
                //搜索框优化  如果搜索内容为空，点击历史记录的关闭按钮，输入框样式初始化 颜色由A0A0A0改为#333
                $('#' + this.keywordID).css('color', '#333');
                $('#' + this.keywordID).css('fontSize', '12px');
                $('#' + this.keywordID).css('font-weight', 'normal');
            }
        }
        $('.' + this.containerID).hide();
        $('#' + this.windowId).hide();

    };

    //取推荐词
    this.getData = function (e)
    {
        showHis = true;
        var v = $('#' + this.keywordID).val();
        //搜索框优化 增加删除按钮
        if (trim(v).length == 0)
        {
            if (document.getElementById("delBtn"))
            {
                $("#delBtn").remove();
            }
        }
        else
        {
            if (!document.getElementById("delBtn"))
            {
                var eleDiv = document.createElement("div");
                var eleInput = document.getElementById(this.keywordID);
                insertAfter(eleDiv, eleInput);
                $(eleDiv).attr({ class: "delBtn", id: 'delBtn', onClick: 'win.delEvent(this)' });
            }
        }
        if ((v.length == 1 && v == " ") || v == "")
        {
            $('.' + this.containerID).hide();
            $('.ico_clear').hide();
        } else
        {
            $('.ico_clear').show();
            var cityid;
            var cateid;
            var citylist;
            var catelist;
            if (typeof ____json4fe != 'undefined')
            {
                var j = ____json4fe, m = j.modules;
                var city = j.locallist && j.locallist.length ? j.locallist[0] : j.locallist;
                if (_keyfrom == "sou")
                {
                    var cate = j.catentry && j.catentry.length ? j.catentry[Math.min(j.catentry.length - 1, 1)] : j.catentry;
                } else
                {
                    var cate = j.catentry.length ? j.catentry[0] : j.catentry;
                }
                cityid = city.dispid;
                cateid = cate.dispid;
                citylist = city.listname;
                catelist = cate.listname;
            }

            var data = this.cacheinputvalue[v];
            if (data != null && data != undefined)
            {
                //this.creat(v, citylist, catelist);
            }
            else
            {
                var url = this.options["url"];
                url = url + '?' + 'q' + '=' + encodeURIComponent(v) + '&t=2',
                $.get(url,
                    function (data)
                    {
                        win.creatnew(data);
                    }
                );
            }
        }
    };

    this.creatnew = function (data)
    {
        var json = eval('(' + data + ')');
        var windowId = "windows_" + this.keywordID
        var window = $('#' + windowId);
        var element;
        if (window.length <= 0)
        {
            element = $("<div/>");
            this.windowId = windowId;
            element.attr("id", windowId);
        }
        else
        {
            element = window;
        }


        $('.' + this.containerID).html('').hide();
        var showHtml = "<ul id='search_mes'>";
        if (data)
        {
            var i = 0;
            var j = 1;
            for (i = 0; i < json.length; i++)
            {
                var item = "";
                if (i == 0)
                {
                    //alert(json[i].url);
                }
                if (json[i].url)
                {
                    var formatItemFun = win.options["formatItemFun"];
                    //"undefined"
                    var itemContent = formatItemFun(json[i], i);
                    //item = "<li><a href=" + json[i].url + ">" + itemContent + "</a>";
                    item = itemContent;
                }
                else
                {
                    item = "<li>" + json[i].name + "</li>";
                }
                showHtml += item;
            }
            showHtml += "<li id='close' onclick='win.close()'>关&nbsp;&nbsp;闭</li></ul>";
            $('.' + this.containerID).html(showHtml);


            element.hide();
            element.addClass("search_ajax");
            element.css("position", "absolute");
            document.body.appendChild(element[0]);


            var offset = $('#' + this.keywordID).offset();
            var myWidth = $('#' + this.keywordID).css("width"); //带px
            var myHeight = $('#' + this.keywordID).css("height"); //带px
            var pos = myHeight.indexOf('px');
            var offsetHeight = myHeight.substr(0, pos);
            var last = parseInt(offset.top) + parseInt(offsetHeight);
            var top = last.toString() + 'px';

            element.css('width', myWidth);
            element.css('top', top);
            element.css('left', offset.left + 'px');

            element.html(showHtml);
            element.show();


            $('#' + this.windowId + " ul#search_mes li").bind("click", function ()
            {
                var interval = win.options["interval"];

                //alert('oldSearchText:' + oldSearchText);

                oldSearchText = $(this).text();

                if ($(this).attr("id") != "close")
                {
                    win.setTipSearchValue($(this).text());
                    win.close();
                }
                else
                {

                }
            });

        }
    };



	var showHis=false;
    this.focus = function () {
        $('#' + this.keywordID).css('color', '#374565');
		//搜索框优化 聚焦后改完输入字体大小
		$('#' + this.keywordID).css('fontSize', '17px');

        var v = $('#' + this.keywordID).val();
        $(".ico_clear").show();
		//搜索框优化  增加条件v == "" 点击删除按钮后，输入框获得焦点并展示历史记录
        if (v == this.tipvalue || (v.length == 1 && v == " ") || v == "") {
			//搜索框优化 val(' ')中的空格去掉
            $('#' + this.keywordID).val("");
            $(".ico_clear").hide();
            //创建历史搜索词  只有首页显示
            if(____json4fe.catentry.name == "sou"){
                createHistory();
            }
        }
		//搜索框优化 搜索结果页点击搜索框，自动展示原搜索词suggestion
		else{
			if(____json4fe.catentry.name != "sou" && v != this.tipvalue && showHis==false){
				win.getData();
			}
		}
    };
	//搜索框优化 删除按钮的功能
	this.delEvent= function(obj){
		pre(obj).value="";
		pre(obj).focus();
		obj.parentNode.removeChild(obj);
		if(____json4fe.catentry.name == "sou"){
			createHistory();
		}
	};

    this.blur = function (e) {	
		//搜索框优化 离开焦点字体颜色不变
        //$('#' + this.keywordID).css('color', '#B6B6B6');
        var v = $('#' + this.keywordID).val();
        setTimeout(function () {
            if (v.length == 0 || (v.length == 1 && v == " ")) {
                $('#' + this.keywordID).val(this.tipvalue);
            }
            $(".ico_clear").hide();
        }, 100);
    };

    this.submit = function (f) {
        var v = $('#' + this.keywordID).val();
        v = v || '';
        v = v.replace(/([^\u0391-\uFFE5a-zA-Z0-9@#\+\-_\. ])/ig, '').replace(/(^\s*)|(\s*$)/g, '');//.replace(/[ ]/g,'');
        if (v == "" || v == this.tipvalue) {
            if (f == 0) {
				//搜索框优化增加修改字体大小
				$('#' + this.keywordID).css("font-size","12px");
                $('#' + this.keywordID).val(this.tipvalue);
            } else {
                $('#' + this.keywordID).val("");
            }
            $(".ico_clear").hide();
            return false;
        }
        //$(".search_but").css("background-position", "0 -42px");
        $(".search_ajax").hide();

        this.toSearch(v);
        return false;
    };


    this.toSearch = function (v)
    {
        var url;
        var liArray = $('#' + this.windowId + " ul#search_mes li");
        var li = liArray[0];
        var aArray = $(li).children("a");
        var a = aArray[0];
        a.click();
    }

    this.setInputValue = function () {
        $('#' + this.keywordID).val(this.oldvalue);
    };


    this.setOldValue = function (v)
    {
        //$('#' + this.keywordID).val(v);
        this.oldvalue = v;
    };

    this.setTipSearchValue = function (v) {
        $('#' + this.keywordID).val(v);
    };

    this.startInterval = function ()
    {
        setInterval(this.intervalFun, 1000);
    };

    this.intervalFun = function ()
    {
        var currSearchText = $('#' + win.keywordID).val();
        if ('' != currSearchText && currSearchText != win.oldvalue)
        {
            win.oldvalue = currSearchText;
            win.getData();
        }
    };

    //去前后空格
    function trim(str) {
        return str.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
    }
};


//搜索框优化 增加删除按钮的相关DOM操作函数
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);	
	}
	else{
		parent.insertBefore(newElement,targetElement.nextSibling)
	}
}
function pre(obj){
	return obj.previousElementSibling || obj. previousSibling;
}

