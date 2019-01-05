/*window*/
var multimodePosition = true;

function initSelectedMultiPosition(selectedMultiPosition)
{
    var items = $(".positionitem");

    var resultIds;

    resultIds = "";

    for (var i = 0; i < items.length; i++)
    {
        var resultId = $(items[i]).attr("id");
        resultId = resultId.trim();
        var parent = "," + selectedMultiPosition + ","
        var child = "," + resultId + ","
        if (parent.indexOf(child) >= 0)
        {
            $(items[i]).addClass('commonlight');
        }
    }

}

function onclickposition(self)
{
    if ($(self).hasClass("commonlight"))
    {
        $(self).removeClass('commonlight');
    }
    else
    {
        $(self).addClass('commonlight');
    }

    
    if ($("#CheckBoxUndergraduate").length > 0)
    {
        initUndergraduate($("#CheckBoxUndergraduate")[0]);
    }


    if (false == multimodePosition)
    {
        var resultId = $(self).attr("id");
        var resultName = $(self).find("span").text();
    
        var v = { 'posotionid': resultId, 'posotionname': resultName };
        var callbackfunname = "callbackfun(v)";
        eval(callbackfunname)
    
        hideWindow('position');
    }
}

function positionMouseOver(ctrl) {
    $(ctrl).addClass('itemmouseover');
}

function positionMouseOut(ctrl) {
    $(ctrl).removeClass('itemmouseover');
}

function onOkMultiPosition()
{
    var items = $(".positionitem");

    //alert(items.length);
    var resultIds;
    var resultNames;

    resultIds = "";
    resultNames = "";
    var validIndex = 0;
    var totalCount = $(".commonlight").length ;
    for(var i=0;i<items.length;i++)
    {
        if($(items[i]).hasClass("commonlight"))
        {
            
            var resultId = $(items[i]).attr("id");
            var resultName = $(items[i]).find("span").text();

            resultIds += resultId + ",";
            resultNames += resultName;
            if (validIndex != totalCount - 1)
            {
                resultNames += ",";
            }

            validIndex++;

        }
    }


    var v = { 'posotionid': resultIds, 'posotionname': resultNames };
    var callbackfunname = "callbackfun(v)";
    eval(callbackfunname)
    
    hideWindow('position');
    
}

function onCancelMultiPosition() {
    hideWindow('position');
}


function clickType(ctrl) {
    var checked = $(ctrl).prop("checked");

    var divParentOfPositions;

    var targetObj = $(ctrl).parent().attr("targetobj");
    divParentOfPositions = $(ctrl).parent().siblings();
    if ("2" == targetObj) {
        divParentOfPositions = $(ctrl).parent().parent().siblings();
    }

    var items = divParentOfPositions.children(".positionitem");
    for (var i = 0; i < items.length; i++) {
        if (checked)
         {
            $(items[i]).addClass('commonlight');
        }
        else {
            $(items[i]).removeClass('commonlight');
        }
    }

}

function initUndergraduate(ctrl) {
    var targetObj;
    var divParentOfPositions;

    targetObj = $(ctrl).parent().attr("targetobj");
    divParentOfPositions = $(ctrl).parent().siblings();
    if("2"==targetObj)
    {
        divParentOfPositions = $(ctrl).parent().parent().siblings();
    }

    var items = divParentOfPositions.children(".positionitem");
    var itemsOfTheTypeAllSelected = true;
    for (var i = 0; i < items.length; i++) {
        if (false == $(items[i]).hasClass("commonlight")) {
            itemsOfTheTypeAllSelected = false;
            break;
        }
    }

    //   $(ctrl).attr("checked", itemsOfTheTypeAllSelected);
    $(ctrl).prop("checked", itemsOfTheTypeAllSelected);

}