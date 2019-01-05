function processWeChatContainer() {
    if (inWeChat) {
        if (needLbs) {
            getLbsLocation('lbs');
        }
    }
    else {

    }
}


function onLbs(value) {
    var url;
    var homepage;
    var longitude = value.point.lng;
    var latitude = value.point.lat;
    //alert(longitude) ;
    //alert(window.location.protocol) ;
    homepage = window.location.protocol + "//" + window.location.host;
    url = window.location.href;

    $.post("/http/lbs",
                    {
                        command: "getLocationByLatLon"
                        , cityId: cityId
                        , latitude: latitude
                        , longitude: longitude
                        , homepage: homepage
                        , url: url
                    },
                    function (data) {
                        var cityId;
                        var json = eval('(' + data + ')');
                        var result = json.resultId;
                        if (result == '0') {
                            if (confirm(json.resultDesc)) {
                                var urlTo = json.url;
                                cityId = json.cityIdByLbs;

                                setCityIdInWeChatContainer(cityId, urlTo);
                            }
                            else {
                                cityId = json.cityId;
                                setCityIdInWeChatContainer(cityId, "");
                            }

                        }
                    }
                  );
}


function setCityIdInWeChatContainer(cityId, url) {
    $.post("/http/lbs",
                    {
                        command: "setCityIdInWeChatContainer"
                        , cityId: cityId
                    },
                    function (data) {
                        if ("" != url) {
                            window.location.href = url;
                        }
                    }
                )
}