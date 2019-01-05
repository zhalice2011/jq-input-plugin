function onfastblockclick(self) {
    var resultName = $(self).find("span").text();
    var resultId = $(self).find("span").attr('p1');
    var districtId = $(self).find("span").attr('districtid');
    var districtName = $(self).find("span").attr('districtname');

    var cityIncorrect = $('#CheckBoxCity').prop("checked");
    var cityName = $('#TextBoxCityName').val();

    var v = { 'blockname': resultName, 'blockid': resultId, 'districtId': districtId, 'districtName': districtName,'cityIncorrect':cityIncorrect,'cityName':cityName};
        var callbackfunname = "blockcallbackfun(v)";
        eval(callbackfunname)
        hideWindow('smartblock');
}


function onCityIncorrectOk() {

    var cityName = $('#TextBoxCityName').val();
    if ("" == cityName) {
        alert("请输入您所在城市名称与街道名称");
    }
    else {
        var resultName = "";
        var resultId = "0";
        var districtId = "0";
        var districtName = ""

        var cityIncorrect = $('#CheckBoxCity').prop("checked");

        if ("" == resultName) {
            resultName = cityName;
        }

        var v = { 'blockname': resultName, 'blockid': resultId, 'districtId': districtId, 'districtName': districtName, 'cityIncorrect': cityIncorrect, 'cityName': cityName };
        var callbackfunname = "blockcallbackfun(v)";
        eval(callbackfunname)
        hideWindow('smartblock');
    }
}


function onDistrictClick(ctrl)
{
    var children = $(ctrl).children("span");
    var canSelectDistrict = $(children[0]).attr("canSelectDistrict");
    var hasBlocks = $(children[0]).attr("hasBlocks");
    //alert(hasBlocks) ;
    var can = false;
    if ("1" == canSelectDistrict) {
        can = true;
    }
    else if ("0" == hasBlocks) {
        can = true;
    }
    else{
        can = false;
    }

    if (true == can) {
        var districtName = $(ctrl).text();
        districtName = districtName.trim();

        var blockName = '';
        var blockId = '0';
        var districtId = $(ctrl).attr("id");

        var v = { 'blockname': blockName, 'blockid': blockId, 'districtId': districtId, 'districtName': districtName };
        var callbackfunname = "blockcallbackfun(v)";
        eval(callbackfunname)
        hideWindow('smartblock');
    }
    else 
    {
        return;
    }
    
}

function isMaxthon_() {
    try {
        window.external.max_invoke("GetHotKey"); return true; 
 }
    catch (ex)
 { return false; }
  }

  function showMenuOnDistrict(ctrl) 
  {
  
    var menuid = ctrl.id + '_menu';
    //$('#' + menuid).html('ddd');
    showMenu({ 'ctrlid': ctrl.id, 'pos': '12', 'ctrlclass': 'a', 'duration': 2, 'timeout': 250, 'cache': 1 });
    
    var smartblocks = $('#'+menuid+' .fastcityitem');    
    var name = master('TextBoxBlockName').val();
    name = "";
    if (null != name && "" != name) 
    {
        for (var i = 0; i < smartblocks.length; i++) 
        {
            var resultName = $(smartblocks[i]).find("span").text();
            if (resultName.indexOf(name) < 0) 
            {
                //alert(resultName);
                $(smartblocks[i]).hide();
                //$(smartblocks[i]).hide();
            }
        }
    }
}


function districtItemMouseOver(ctrl) {
    $(ctrl).addClass('commonlight');
}

function districtItemMouseOut(ctrl) {
    $(ctrl).removeClass('commonlight');
}

function blockItemMouseOver(ctrl) {
    $(ctrl).addClass('commonlight');
}

function blockItemMouseOut(ctrl) {
    $(ctrl).removeClass('commonlight');
}