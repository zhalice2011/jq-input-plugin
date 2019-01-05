function onfastcityclick(self) {
        var cityName = $(self).find("span").text();
        var provinceId = $(self).attr("provinceId");
        var cityId = $(self).attr("cityId");
        var v = { 'cityname': cityName, 'provinceId': provinceId, 'cityId': cityId };

        var callbackfunname ;//= "citycallbackfun(v)";
        callbackfunname = "{0}(v)";
        var targetParent = $(".citytopwrapper");
        fun = $(targetParent).attr("callback");
        callbackfunname = callbackfunname.format(fun);
        eval(callbackfunname)

        hideWindow('city');
    }

   


function onfastprovinceclick(ctrl)
{
    var resultName = $(ctrl).text();
    resultName = resultName.trim();
    var v = {'provincename':resultName};
    var callbackfunname = "citycallbackfun(v)";
    eval(callbackfunname)
    hideWindow('city');
}

function isMaxthon() {
    try {
        window.external.max_invoke("GetHotKey"); return true; 
 }
    catch (ex)
 { return false; }
  }

function showMenuOnProvince(ctrl) 
{
    if (!isMaxthon()) {
        var menuId = 'p' + ctrl.id + '_menu';
        //alert(menuId);
        showMenu({ 'ctrlid': ctrl.id, 'menuid': menuId, 'pos': '12', 'ctrlclass': 'a', 'duration': 2, 'timeout': 250 });
    }
    else {
        //alert('maxthon');
    }
}


function provinceItemMouseOver(ctrl) {
    $(ctrl).addClass('commonlight');
}

function provinceItemMouseOut(ctrl) {
    $(ctrl).removeClass('commonlight');
}

function cityItemMouseOver(ctrl) {
    $(ctrl).addClass('commonlight');
}

function cityItemMouseOut(ctrl) {
    $(ctrl).removeClass('commonlight');
}