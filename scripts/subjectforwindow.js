var itemArray = new Array();
var items;
var maxsubjects = 0;//0表示无限制 


function initSubject() {
    items = $("#divsubject input[type='checkbox']");
    for (var i = 0; i < items.length; i++) {
        $(items[i]).bind("click", function () { onitemclick('TextBoxSubjectName', 'TextBoxSubjectId'); });
    }
    ParseItem();

    initSelected('TextBoxSubjectId');
}


function hideSubjectDiv() {
    //$("#divsubject").hide() ;
    //alert('aa')
    hideWindow('subject');
}


function InitCoor(dockElement, offsetLeft) {
    var dock = master(dockElement)
    var pos = getPosition(dock[0]);
    var divPos = document.getElementById('divsubject');
    divPos.style.left = pos.x + offsetLeft;
    divPos.style.top = pos.y + dock[0].offsetHeight + 2;
}

function myAppendToAppender(self) {
    var parent = document.getElementById('append_parent');
    parent.appendChild(self);
}

function showSubjectList() {

    myAppendToAppender(document.getElementById('divsubject'));
    var divBlock = $("#divsubject");

    document.getElementById('divsubject').style.top = "0px";

    var width = document.body.clientWidth;
    document.getElementById('divsubject').style.width = width + "px";

    //if (divBlock.is(":hidden"))
    {

        divBlock.show();
    }
    //else
    {
        //  divBlock.hide();
    }
}





function Show(id) {
    var div = $("#" + id);
    div.show();
}


function ParseItem() {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var name = $(item).get(0).nextSibling.innerHTML;
        var pos = name.indexOf('_');
        var left = name.substring(0, pos);
        var right = name.substring(pos + 1);
        itemArray[i] = left;
        //alert($(item).get(0).innerHTML);
        $(item).get(0).nextSibling.innerHTML = right;
    }
}


function blockSelectedBySubjectId(name, selected) {
    var ret;
    var parent;
    var child;
    ret = false;

    parent = "," + selected + ","
    child = "," + name + ","
    if (parent.indexOf(child) >= 0) {
        return true;
    }
    else {
        return false;
    }
}


function blockSelected(name, selected) {
    var ret;
    var parent;
    var child;
    ret = false;

    parent = "," + selected + ","
    child = "," + name + ","
    if (parent.indexOf(child) >= 0) {
        return true;
    }
    else {
        return false;
    }
}



function initSelected(id) {
    var selected = $('#' + id).val();
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var name = $(item).siblings().text();

        var subjectId = itemArray[i];
        if (blockSelectedBySubjectId(subjectId, selected)) {
            //$(item).attr("checked",true) ;
            //$(item).next().addClass("itemselected") ;

            $(item).get(0).checked = true;
            $(item).siblings().addClass("itemselected");
        }
    }
}

function ifChecked(ctrl) {
    var checked = ctrl.checked;
    return checked;
}

function getselectedcount() {
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var checked = ifChecked($(item).get(0));
        if (true == checked) {
            count++;
        }
    }
    return count;
}


function getEvent() {
    if (document.all) return window.event;
    func = getEvent.caller;
    while (func != null) {
        var arg0 = func.arguments[0];
        if (arg0) {
            if ((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof (arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
                return arg0;
            }
        }
        func = func.caller;
    }
    return null;
}

function onitemclick0(ctrlName, ctrlId) {
}
function onitemclick(ctrlName, ctrlId) {
    var evt = getEvent();
    //alert('dd');
    var element = evt.srcElement || evt.target

    if (0 != maxsubjects) {
        var count = getselectedcount();
        if (count > maxsubjects) {

            var warningTip = "您选择的科目已经超过" + maxsubjects + "。不能再选";
            alert(warningTip);
            $(element).get(0).checked = false;
            return;
        }
    }

    if (ifChecked($(element).get(0))) {
        $(element).siblings().addClass("itemselected");
    }
    else {
        $(element).siblings().removeClass("itemselected");
    }

    var countOfSelectedItem = 0;

    var names;
    var ids;
    names = '';
    ids = '';
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var checked = $(item).get(0).checked;
        var name = $(item).get(0).nextSibling.innerHTML;
        if (true == checked) {
            names += name + ',';
            ids += itemArray[i] + ',';
            countOfSelectedItem++;
        }
    }
    $('#' + ctrlName).val(names);
    $('#' + ctrlId).val(ids);
}