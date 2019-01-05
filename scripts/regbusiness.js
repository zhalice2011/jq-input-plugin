function chooseBirthPlace(ctrl) {
    var url = "/window/city";
    url = url + "?callbackfun=birthPlaceCallback&random=" + Math.random();
    v = { 'maxh': 800, 'ctrlid': master('TextBoxBirthPlace').attr('id'), 'pos': '43' };
    showWindow("city", url, 'get', -1, v);
}


function birthPlaceCallback(v) {
    var provincename = isUndefined(v['provincename']) ? '' : v['provincename'];
    var cityname = isUndefined(v['cityname']) ? '' : v['cityname'];

    var provinceId = isUndefined(v['provinceId']) ? '' : v['provinceId'];
    var cityId = isUndefined(v['cityId']) ? '' : v['cityId'];

    var displayName = '' != cityname ? cityname : provincename;

    master('TextBoxBirthPlace').val(displayName);
    master('TextBoxBirthPlaceProvinceId').val(provinceId);
    master('TextBoxBirthPlaceCityId').val(cityId);


    var onBirthPlaceCallbackFunName = "onBirthPlaceCallback";
    if (isExitsFunction(onBirthPlaceCallbackFunName)) {
        var call = onBirthPlaceCallbackFunName + "();";
        //eval(call)
        onBirthPlaceCallback();
    }

}



function isExitsFunction(funcName) {
    try {
        if (typeof (eval(funcName)) == "function") {
            return true;
        }
    } catch (e) { }
    return false;
}

