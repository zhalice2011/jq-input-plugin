if (typeof (Mclient) == "undefined")
{
    var Mclient = {}
}
Mclient.touchStyle = function (B, A)
{
    $(B).bind("touchstart", function ()
    {
        $(this).addClass(A)
    });
    $(B).bind("touchmove", function ()
    {
        $(this).removeClass(A)
    });
    $(B).bind("touchend", function ()
    {
        $(this).removeClass(A)
    });
    $(B).bind("touchcancel", function ()
    {
        $(this).removeClass(A)
    })
};
var googleAnalytices = function (E, F, C, D)
{
    var A = "http://m.58.com/ga/url/?path=" + E + "&referer=" + (typeof (F) == "undefined" ? "" : F) + (typeof (C) == "undefined" ? "" : C) + "&callback=?";
    var B = true;
    if (D == false)
    {
        B = D
    }
    $.ajax({
        type: "JSONP",
        url: A,
        async: B,
        success: function (I)
        {
            var H = "http://m.58.com" + I.url;
            var G = document.createElement("img");
            G.src = H;
            document.body.appendChild(G)
        },
        timeout: 30000,
        error: function (G) { }
    })
};

function alertShow(F, I, A, G, J, D)
{
    if (!$("#alert_bg").length)
    {
        var K = '<div id=\'alert_bg\' style=" width: 100%; position: absolute; top:0px; left: 0px; z-index: 1000; background: rgba(0, 0, 0, 0.1)"></div><div id="alert_box"><div id="show_mes">信息</div><div id="but_div"></div></div>';
        $("body").append(K);
        var B = $(".body_div").css("height");
        $("#alert_bg").css("height", B)
    } else
    {
        $("#but_div").empty()
    }
    $("#show_mes").text(F);
    if (I == "1")
    {
        $("#but_div").show();
        var H = '<div id="but01">' + A + "</div>";
        $("#but_div").append(H);
        $("#but01").css("width", "100%");
        $("#but01").bind("click", function ()
        {
            J()
        })
    }
    if (I == "2")
    {
        $("#but_div").show();
        var C = '<div id="but01">' + A + '</div><div id="but02">' + G + "</div>";
        $("#but_div").append(C);
        $("#but01").bind("click", function ()
        {
            J()
        });
        $("#but02").bind("click", function ()
        {
            D()
        })
    }
    if (typeof I == "undefined")
    {
        $("#but_div").hide()
    }
    $("#alert_bg").show();
    $("#alert_box").show();
    var E = parseInt($("#alert_box").get().clientHeight) / 2;
    $("#alert_box").css("margin-top", -E + "px");
    $("#but_div > div").bind("touchstart", function ()
    {
        $(this).addClass("but_hover")
    });
    $("#but_div > div").bind("touchmove", function ()
    {
        $(this).removeClass("but_hover")
    });
    $("#but_div > div").bind("touchend", function ()
    {
        $(this).removeClass("but_hover")
    });
    $("#alert_bg").bind("touchmove", function (L)
    {
        L.preventDefault()
    });
    $("#alert_box").bind("touchmove", function (L)
    {
        L.preventDefault()
    })
}

function cancel_but()
{
    $("#alert_bg").hide();
    $("#alert_box").hide()
} (function (A)
{
    A.cookie = {
        get: function (B, D)
        {
            var H = B + "=";
            var E = H.length;
            var G = document.cookie.length;
            var C = 0;
            var F = 0;
            while (C < G)
            {
                F = C + E;
                if (document.cookie.substring(C, F) == H)
                {
                    return this.getCookieVal(F, D)
                }
                C = document.cookie.indexOf(" ", C) + 1;
                if (C == 0)
                {
                    break
                }
            }
            return null
        },
        getCookieVal: function (D, C)
        {
            var B = document.cookie.indexOf(";", D);
            if (B == -1)
            {
                B = document.cookie.length
            }
            if (C == false)
            {
                return document.cookie.substring(D, B)
            } else
            {
                return unescape(document.cookie.substring(D, B))
            }
        }
    }
})(jq);