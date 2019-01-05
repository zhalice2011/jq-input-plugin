//http: //www.lanrenzhijia.com/jquery/fenye-jquery.page.html
//pager
(function ($) {
    var current;
    var ms = {
        init: function (obj, args) {
            current = args.current;
            return (function () {
                ms.fillHtml(obj, args);
                ms.bindEvent(obj, args);
            })();
        },
        //填充html
        fillHtml: function (obj, args) {
            return (function () {
                obj.empty();
                obj.html("");
                //上一页
                if (args.current > 1) {
                    obj.append('<a href="javascript:void(0);" class="prevPage">' + args.prePageText + '</a>');
                } else {
                    obj.remove('.prevPage');
                    obj.append('<span class="disabled">' + args.prePageText + '</span>');
                }

                //下一页
                if (args.current < args.pageCount) {
                    obj.append('<a href="javascript:void(0);" class="nextPage">' + args.nextPageText + '</a>');
                } else {
                    obj.remove('.nextPage');
                    obj.append('<span class="disabled">' + args.nextPageText + '</span>');
                }

                //input
                obj.append('<input type="text" style="width:40px;" class="inputText"></input>');

                var html = '<input type="button" value="{0}"  class="inputButton"></input>';
                html = html.format(args.okText);
                obj.append(html);

                html = "<br/>";

                html = "<span class=''>{0}/{1}</span>";
                html = html.format(args.current, args.pageCount);

                obj.append(html);


            })();
        },
        //绑定事件
        bindEvent: function (obj, args) {
            var id = obj.attr("id");
            return (function () {
                $("#"+id + " "+"a.tcdNumber").bind("click",function(){
                //obj.on("click", "a.tcdNumber", function () {
                    var current = parseInt($(this).text());
                    //ms.fillHtml(obj, { "current": current, "pageCount": args.pageCount });
                    if (typeof (args.backFn) == "function") {
                        args.backFn(current);
                    }
                });

                //上一页
                $("#" + id + " " + "a.prevPage").bind("click", function () {
                //obj.on("click", "a.prevPage", function () {
                    //var current = parseInt(obj.children("span.current").text());
                    //ms.fillHtml(obj, { "current": current - 1, "pageCount": args.pageCount, "prePageText": args.prePageText, "nextPageText": args.nextPageText, "okText": args.okText });
                    if (typeof (args.backFn) == "function") {
                        args.backFn(current - 1);
                    }
                });
                //下一页
                
                $("#"+id + " "+"a.nextPage").bind("click",function(){
                //obj.on("click", "a.nextPage", function () {
                    //var current = parseInt(obj.children("span.current").text());
                    //ms.fillHtml(obj, { "current": current + 1, "pageCount": args.pageCount, "prePageText": args.prePageText, "nextPageText": args.nextPageText, "okText": args.okText });
                    if (typeof (args.backFn) == "function") {

                        //var lists = $("a.nextPage");
                        //alert(lists.length);
                        args.backFn(current + 1);
                    }
                });

                //input
                $("#"+id + " "+".inputButton").bind("click",function(){
                //obj.on("click", ".inputButton", function () {
                    var page = $(".inputText").val(); ;
                    current = parseInt(page);
                    //ms.fillHtml(obj, { "current": current, "pageCount": args.pageCount, "prePageText": args.prePageText, "nextPageText": args.nextPageText, "okText": args.okText });
                    if (typeof (args.backFn) == "function") {
                        args.backFn(current);
                    }
                });


            })();
        }
    }
    $.fn.createPage = function (options) {
        var args = $.extend({
            pageCount: 10
            , current: 1

            //global
            , nextPageText: "下一页"
            , prePageText: "上一页"
            , okText: "Go"

            , backFn: function () { }
        }, options);
        ms.init(this, args);
    }
})(window.jq || window.jQuery);


//pager ends