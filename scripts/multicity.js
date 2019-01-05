function onfastcityclick(self) {
        
        var provinceId = $(self).attr("provinceId");
        
        //alert(targetParent);
        var selected = $(self).attr("data-selected");
        if(1==selected)
        {
            $(self).attr("data-selected", 0);
            $(self).removeClass('commonlightchecked')
        }
        else{
            $(self).attr("data-selected", 1);
            $(self).addClass('commonlightchecked')
        }

        var cityIds = "";
        var cityNames = "";
        var items = $("#append_parent").find(".fastcityitem");
        //alert(items.length);
        var selectCount = 0;
        for (var i = 0; i < items.length; i++) {
            selected = $(items[i]).attr("data-selected");
            if (1==selected)
            {
                cityIds += $(items[i]).attr("cityId");
                cityIds += ",";

                var cityName = $(items[i]).find("span").text();

                cityNames += cityName;
                cityNames += ",";

                selectCount++ ;
            }
        }

        var v = { 'cityNames': cityNames, 'provinceId': provinceId, 'cityIds': cityIds };

        var callbackfunname; //= "citycallbackfun(v)";
        callbackfunname = "{0}(v)";
        var targetParent = $(".citytopwrapper");
        var fun = $(targetParent).attr("callback");
        callbackfunname = callbackfunname.format(fun);
        eval(callbackfunname)

        //hideWindow('city');
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