$(function ()
{
    Mclient.touchStyle($(".rc_go").parent().parent(), "hover"), Mclient.touchStyle($(".sav_btn input"), "hover"), $(".sel_txt2").parent().parent().css("position", "static").parent().css("position", "relative"), $(".inp_rad").bind("click", function ()
    {
        $(this).parent().addClass("c_o").siblings().removeClass("c_o")
    }), init_year(), init_target(9225), setDis(), $("select").bind("change", function ()
    {
        $(this).removeClass("c_i")
    }), $(".sel_txt2").bind("change", function ()
    {
        $(this).parent().removeClass("c_i"), this.options[this.selectedIndex].text.indexOf("-") > 3 || "1000以下" == this.options[this.selectedIndex].text || "25000以上" == this.options[this.selectedIndex].text ? $(this).parent().find(".fl").html(this.options[this.selectedIndex].text + "元/月") : $(this).parent().find(".fl").html(this.options[this.selectedIndex].text)
    }), $(".inp_txt,.tex_txt").bind("focus", function ()
    {
        var $this = $(this);
        ("请" == $this.val().substr(0, 1) || "尽" == $this.val().substr(0, 1)) && $this.val(""), $this.removeClass("c_i");
        var tip = $this.attr("tip");
        $this.attr("box") && $this.removeClass("textRt"), $this.parent().find(".wtip").remove();
        var s = '<span class="wtip action"><i></i>' + tip + "</span>";
        $this.parent().append(s)
    }), $(".inp_txt,.tex_txt").bind("blur", function (e)
    {
        var $this = $(this);
        if ($this.attr("box"))
        {
            $this.parent().find(".wtip").remove();
            var source = $this.val().trim();
            if ("" == source) return $this.parent().append("<span class='wtip wrong'><i></i>内容不能为空喔</span>"), void 0;
            if (source = Utility.replacestr(source, '"', "&quot;"), source = Utility.replacestr(source, "\n", "<br />"), source = Utility.replacestr(source, "  ", ""), source.length < $this.attr("min") || source.length > $this.attr("max") || isHasContact(source))
            {
                var message = "<span class='wtip wrong'><i></i>" + $this.attr("message") + "</span> ";
                return $this.parent().append(message), void 0
            }
        }
        valid($this), e.stopPropagation()
    })
});
var goBack = function ()
{
    cancel_but(), history.go(-1)
}, to_resumelist = function ()
{
    cancel_but(), document.location.href = "http://jianli.m.58.com/m_resumelist/?t=" + (new Date).valueOf()
}, valid = function (input)
{
    if ("请" == input.val().substr(0, 1) && input.val(""), !input.attr("regex")) return 1;
    var regs = input.attr("regex").split("#"),
            msgs = input.attr("message").split("#"),
            value = input.val().trim(),
            index = 0,
            flag = 0;
    if (input.attr("regex") || (flag = 1), !flag)
    {
        flag = 1, input.val(value);
        for (var i = 0, len = regs.length; len > i; i++)
        {
            var re = new RegExp(regs[i].replace(/\\\\/g, "\\"));
            if (!re.test(value))
            {
                flag = 0, index = i;
                break
            }
        }
    }
    return input.parent().find(".wtip").remove(), 1 != flag && input.parent().append('<span class="wtip wrong"><i></i>' + msgs[index] + "</span>"), flag
}, valid_textarea = function (input)
{
    input.parent().find(".wtip").remove();
    var source = input.val().trim();
    if ("" == source || "尽" == source.substr(0, 1)) return input.parent().append("<span class='wtip wrong'><i></i>忘记填写自我评价啦</span>"), 0;
    if (source = Utility.replacestr(source, '"', "&quot;"), source = Utility.replacestr(source, "\n", "<br />"), source = Utility.replacestr(source, "  ", ""), source.length < input.attr("min") || source.length > input.attr("max") || isHasContact(source))
    {
        var message = "<span class='wtip wrong'><i></i>" + input.attr("message") + "</span> ";
        return input.parent().append(message), 0
    }
    return 1
}, form_check = function ()
{
    var inputs = $(".inp_txt");
    error_num = 0;
    for (var i = 0; i < inputs.length; i++)
    {
        var vflag = valid($(inputs[i]));
        0 == vflag && error_num++
    }
    return 0 == valid_textarea($("textarea")) && error_num++, 0 != error_num ? 0 : 1
}, valid_select = function ()
{
    for (var selects = $(".sel_txt,.sel_txt2"), error_num = 0, i = 0; i < selects.length; i++)
        if (-1 == $(selects[i]).val())
        {
            alertShow($(selects[i]).attr("message"), "1", "确定", "", cancel_but, ""), error_num++;
            break
        }
    return 0 != error_num ? 0 : 1
}, dosensitive = function (id)
{
    cancel_but(), document.location.href = "http://jianli.m.58.com/m_tomodifyresume/" + id + "?infoid=0"
}, BasicResumeInfo = function ()
{
    var xmlHttp, postJsonObj;
    return {
        deliverSuccess: function ()
        {
            if (4 == xmlHttp.readyState && 200 == xmlHttp.status)
                if (-1 != xmlHttp.responseText.indexOf("error:"))
                {
                    cancel_but();
                    var msg = xmlHttp.responseText.split(":")[1];
                    if ("validatecode" == msg) return $("#codeshow").css("display", "block"), isShowCode = 1, void 0;
                    if ("sensitive" == msg)
                    {
                        var id = xmlHttp.responseText.split(":")[2];
                        return $("#hidresume").val(id), Highlights.pushad(1), alertShow("您的简历正在审核中，休息下再投递吧", void 0, "", "", "", ""), setTimeout("dosensitive(" + id + ")", 1e3), void 0
                    }
                    alertShow(msg, "1", "确定", "", cancel_but, "")
                } else "0" != xmlHttp.responseText ? ($("#hidresume").val(xmlHttp.responseText), Highlights.pushad(1), $.ajax({
                    type: "get",
                    url: "http://jianli.m.58.com/m_deliveryresume?infoid=" + infoid + "&rid=" + xmlHttp.responseText + "&fromurl=" + document.location.href,
                    success: function (ret)
                    {
                        cancel_but();
                        var ans = ret.split("!");
                        type = ans[0], 0 == type ? alertShow("该信息不存在或已删除", "1", "确定", "", cancel_but, "") : -2 == type ? alertShow("您已经向该企业投递过简历啦！", "1", "确定", "", cancel_but, "") : -3 == type ? alertShow("您今天申请的职位数量达到上限，明天再申请吧！", "1", "确定", "", cancel_but, "") : 1 == type && (alertShow("投递成功", void 0, "", "", "", ""), setTimeout("cancel_but()", 1e3))
                    },
                    error: function ()
                    {
                        cancel_but(), alertShow("抱歉，投递失败。请稍后再试。", "1", "确定", "", cancel_but, "")
                    }
                })) : alertShow("简历创建失败!", "1", "确定", "", cancel_but, "")
        },
        addmoreSuccess: function ()
        {
            if (4 == xmlHttp.readyState && 200 == xmlHttp.status)
                if (cancel_but(), -1 != xmlHttp.responseText.indexOf("error:"))
                {
                    var msg = xmlHttp.responseText.split(":")[1];
                    if ("validatecode" == msg) return $("#codeshow").css("display", "block"), isShowCode = 1, void 0;
                    if ("sensitive" == msg)
                    {
                        var id = xmlHttp.responseText.split(":")[2];
                        return $("#hidresume").val(id), Highlights.pushad(1), document.location.href = "http://jianli.m.58.com/m_tomodifyresume/" + id + "?infoid=0", void 0
                    }
                    alertShow(msg, "1", "确定", "", cancel_but, "")
                } else "0" != xmlHttp.responseText ? ($("#hidresume").val(xmlHttp.responseText), Highlights.pushad(1), document.location.href = "http://jianli.m.58.com/m_tomodifyresume/" + xmlHttp.responseText + "?infoid=" + infoid) : alertShow("简历创建失败!", "1", "确定", "", cancel_but, "")
        },
        subForm: function (resume_op)
        {
            if (0 != $("#hidresume").val()) return "addmore" == resume_op || "save" == resume_op ? alertShow("想再次修改这封简历？您可以在简历管理页面继续完善哦！", "2", "确定", "取消", to_resumelist, cancel_but) : "deliver" == resume_op && alertShow("您可以在职位介绍页面直接投递哦", "1", "确定", "", goBack, ""), !1;
            if (0 == check_login()) return !1;
            if (0 == form_check()) return focus_to_err(), !1;
            var code = "";
            if (1 == isShowCode)
            {
                if (!checkAuthInputforLogin(document.getElementById("validatecode"))) return document.getElementById("checkcode").style.display = "block", !1;
                code = $("#validatecode").val()
            }
            if (0 == valid_select()) return !1;
            var trueName = Utility.repLaceData($("#txtUserName").val()),
                    lights = Utility.encodeTxtBox($("#lights").val()),
                    sex = $("input[name='sexType']:checked").val();
            "undefined" == typeof sex && (sex = 0);
            var workyears = $("#selWorked").val(),
                    usereducation = $("#selEducation").val(),
                    usermobile = Utility.repLaceData($("#phone").val().trim()),
                    year = $("#year").val(),
                    birthday = year + "-1-1 13:01:01",
                    target2 = $("#target2").val(),
                    inpUserJob = $("#inpUserJob").val();
            inpUserJob = inpUserJob.replace(/\//g, "或");
            var jobSalary = $("#jobSalary").val();
            if (postJsonObj = {
                resumeid: $("#hidresume").val(),
                birthday: birthday,
                truename: trueName,
                sex: sex,
                workyears: workyears,
                usereducation: usereducation,
                usermobile: usermobile,
                usercity: areaid,
                letter: lights,
                areaid: areaid,
                disCateIds: target2,
                salary: jobSalary,
                position: inpUserJob,
                infoid: infoid,
                mathresult: iqas_mcresult,
                iqasinvc: isShowCode,
                validatecode: code
            }, xmlHttp = SimpleXhrFactory.createXhrObject(), alertShow("正在保存中", void 0, "", "", "", ""), "save" == resume_op) googleAnalytices("/zhaopin/myjob/createresume/save/", document.referer), $.xmlPost(postJsonObj, BasicResumeInfo.addmoreSuccess, xmlHttp, "basicresume");
            else if ("addmore" == resume_op) googleAnalytices("/zhaopin/myjob/createresume/addmore/", document.referer), $.xmlPost(postJsonObj, BasicResumeInfo.addmoreSuccess, xmlHttp, "basicresume");
            else
            {
                if ("deliver" != resume_op) return;
                googleAnalytices("/zhaopin/myjob/createresume/deliver/", document.referer), $.xmlPost(postJsonObj, BasicResumeInfo.deliverSuccess, xmlHttp, "basicresume")
            }
        }
    }
} (),
    init_year = function ()
    {
        for (var y_option = "<option disabled='disabled' value='-1'>请选择出生年份</option>", i = 1997; i >= 1959; i--) y_option += 1985 == i ? "<option value='" + i + "' selected='selected'>" + i + "</option>" : "<option value='" + i + "'>" + i + "</option>";
        $("#year").html(y_option)
    }, init_target = function (pid)
    {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "http://jianli.m.58.com/ajax/getdis/" + pid,
            success: function (obj)
            {
                if (null != obj && "success" == obj.returnMessage)
                {
                    var list = obj.entity,
                        t_option = "<option value='-1'>请选择</option>";
                    $.each(list, function (index, inerObj)
                    {
                        targetId == inerObj.dispCategoryID ? ($("#target1_name").html("" + inerObj.cateName), $("#target1_name").removeClass("c_i"), t_option += "<option value='" + inerObj.dispCategoryID + "' selected='selected'>" + inerObj.cateName + "</option>") : t_option += "<option value='" + inerObj.dispCategoryID + "'>" + inerObj.cateName + "</option>"
                    }), $("#target1").html(t_option)
                }
            }
        })
    }, setDis = function ()
    {
        var pid = $("#target1").val();
        if (-1 == pid || "" == pid) pid = targetId;
        else
        {
            var obj = document.getElementById("target1"),
                name = obj.options[obj.selectedIndex].text;
            $("#target1_name").html(name), $("#target1_name").removeClass("c_i")
        }
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "http://jianli.m.58.com/ajax/getdis/" + pid,
            success: function (obj)
            {
                if (null != obj && "success" == obj.returnMessage)
                {
                    var list = obj.entity,
                        t_option = "<option value='-1'>请选择</option>";
                    $.each(list, function (index, inerObj)
                    {
                        t_option += "<option value='" + inerObj.dispCategoryID + "'>" + inerObj.cateName + "</option>"
                    }), $("#target2").html(t_option), $("#target2_name").html("请选择")
                }
            }
        })
    }, setDis2 = function ()
    {
        $("#target2_name").removeClass("c_i");
        var obj = document.getElementById("target2"),
            name = obj.options[obj.selectedIndex].text;
        $("#inpUserJob").val(name), $("#target2_name").html(name)
    };