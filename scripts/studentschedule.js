/*window*/
function onclickposition(self) {
    var resultId = $(self).attr("id");
    var resultName = $(self).text();

    var v = { 'posotionid': resultId, 'posotionname': resultName };
    var callbackfunname = "studentScheduleCallbackfun(v)";
    eval(callbackfunname)
    hideWindow('StudentSchedule');
}


function onClickFrequency(self) {
    var resultId = $(self).attr("id");
    var resultName = $(self).text();

    var v = { 'posotionid': resultId, 'posotionname': resultName };
    var callbackfunname = "studentFrequencyCallbackfun(v)";
    eval(callbackfunname)
    hideWindow('StudentFrequency');
}

function positionMouseOver(ctrl) {
    $(ctrl).addClass('commonlight');
}

function positionMouseOut(ctrl) {
    $(ctrl).removeClass('commonlight');
}