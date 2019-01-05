/*window*/
function onclickitem(self)
{
    var resultId = $(self).attr("id");
    var resultName = $(self).find("span").text();
    
    var v = { 'itemId': resultId, 'itemName': resultName };
    var callbackfunname = "callbackSubject(v)";
    eval(callbackfunname)
    hideWindow('SingleSubject');
}

function itemMouseOver(ctrl) {
    $(ctrl).addClass('commonlight');
}

function itemMouseOut(ctrl) {
    $(ctrl).removeClass('commonlight');
}