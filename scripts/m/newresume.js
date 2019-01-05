var Highlights = (function ()
{
    return {
        pushad: function (A)
        {
            var B = Math.random();
            $.ajax({
                type: "get",
                url: "http://jianli.m.58.com/ajax/gethighlights",
                data: {
                    rid: $("#hidresume").val(),
                    "t": A,
                    "time": B
                },
                success: function (C) { }
            })
        }
    }
})();

function StringBuffer()
{
    this.__strings__ = new Array
}
StringBuffer.prototype.append = function (A)
{
    this.__strings__.push(A)
};
StringBuffer.prototype.toString = function ()
{
    return this.__strings__.join("")
};
$.xmlPost = function (A, F, E, D)
{
    E.onreadystatechange = F;
    var C = new StringBuffer();
    C.append('<?xml version="1.0" encoding="UTF-8"?>');
    C.append("<sendinfo>");
    C.append("<operate>" + D + "</operate>");
    $.each(A, function (H, G)
    {
        if (H.indexOf("_") != 0)
        {
            C.append("<" + H + ">");
            if (typeof (G) == "string" && isNaN(G))
            {
                C.append("<![CDATA[" + G + "]]>")
            } else
            {
                C.append(G)
            }
            C.append("</" + H + ">")
        }
    });
    C.append("</sendinfo>");
    var B = "http://jianli.m.58.com/ajax/m_addnewresume";
    E.open("POST", B, true);
    E.setRequestHeader("Conent-Type", "text/xml");
    E.send(C.toString())
};
var SimpleXhrFactory = (function ()
{
    var B = {
        createXhrObject: function ()
        {
            return new XMLHttpRequest()
        }
    };
    var A;
    try
    {
        A = B.createXhrObject();
        return B
    } catch (C) { }
})();
var Utility = {
    trimJS: function (A)
    {
        A = Utility.replacestr(A, "<", "&lt;");
        A = Utility.replacestr(A, ">", "&gt;");
        return A
    },
    replacestr: function (C, D, B)
    {
        var A = new RegExp(D, "g");
        return (C.replace(A, B))
    },
    repLaceData: function (A)
    {
        if (A != "")
        {
            A = Utility.replacestr(A, "'", "");
            return A.replace(/]]>/g, "")
        } else
        {
            return ""
        }
    },
    encodeTxtBox: function (A)
    {
        if (A != null && A.trim().length > 0)
        {
            A = Utility.trimJS(A);
            A = A.replace(" ", "&nbsp;")
        }
        return A
    }
};

function isHasContact(D)
{
    var B = /([0-9０１２３４５６７８９零一二三四五六七八九壹贰叁肆伍陆柒捌玖]{7})/;
    var C = new RegExp(B);
    var A = C.test(D);
    if (!A)
    {
        B = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]{1,12}\.([a-zA-Z0-9_-]){2,4}/;
        C = new RegExp(B);
        A = C.test(D)
    }
    if (!A)
    {
        B = /(([qｑQＱ]+)(.?|.{1,5})(([0-9]|[０-９]|[零一二三四五六七八九]|[①-⑨]|[㈠-㈨])[-_@\~\#\$\%\^\&\*]*){5,13})|((([0-9]|[０-９]|[零一二三四五六七八九]|[①-⑨]|[㈠-㈨])[-_@\~\#\$\%\^\&\*]*){5,13}(.?|.{1,5})([qｑQＱ]+))/;
        C = new RegExp(B);
        A = C.test(D)
    }
    return A
}
var check_login = function ()
{
    $.ajax({
        type: "get",
        url: "http://jianli.m.58.com/m_verify?op=no",
        success: function (A)
        {
            if (A > 0)
            {
                return 1
            } else
            {
                document.location.href = "http://m.m.58.com/login/?path=" + document.location.href;
                return 0
            }
        },
        error: function ()
        {
            alertShow("网络连接不稳定，请稍后再试！", "1", "确定", "", cancel_but, "")
        }
    })
};

function focus_to_err()
{
    var A = $(".wrong").get(0).offsetTop;
    if (A <= 0)
    {
        A = 5
    }
    if ($(".wrong").get(0).parentNode.id == "qw")
    {
        return
    }
    document.body.scrollTop = A
};