//http: //www.lanrenzhijia.com/jquery/fenye-jquery.page.html
//pager
(function ($) {
    var current;
    var inputCurr;

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
                for (var i = 0; i < args.InputBoxCount; i++) {
                    obj.append('<input type="tel" maxlength="1" style="width:30px;" class="inputText" ></input>');
                }

                var id = obj.attr("id");
                var objectList = document.querySelectorAll("#" + id + " " + ".inputText");
                objectList[0].focus();

            })();
        },
      
        bindEvent: function (obj, args) {
            var id = obj.attr("id");
            $("#" + id + " " + ".inputText").each(function () {
                $(this).keyup(function (e) {
                    if ($(this).val().length < 1) {
                        inputCurr = $(this).prev();
                        setTimeout(function () { inputCurr.focus(); }, 20);
                        //$(this).prev().focus();
                    } else {
                        if ($(this).val().length >= 1) {
                            inputCurr = $(this).next();
                            setTimeout(function () { inputCurr.focus(); }, 20);
                            //$(this).next().focus();
                        }
                    }

                    //last then focus
                    var index = $(this).index();
                    var code = "";
                    if (index == args.InputBoxCount - 1) {
                        var objectList = document.querySelectorAll("#" + id + " " + ".inputText"); 
                        for (var i = 0; i < objectList.length; i++) {
                            code = code + $(objectList[i]).val();
                        }
                        if (typeof (args.backFn) == "function") {
                            args.backFn(code);
                        }
                    }

                });

            });
        }
                
    }
    $.fn.createInputBox = function (options) {
        var args = $.extend({
            InputBoxCount: 4
            , backFn: function () { 
            }
        }, options);
        ms.init(this, args);
    }
})(window.jq || window.jQuery);


//pager ends