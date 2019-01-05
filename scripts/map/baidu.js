var cityName;
var baiduMap;
var baiduGeo;
var marker;

function initMap(latlon) {
    baiduMap = new BMap.Map("map_canvas");
    // 创建地址解析器实例s
    baiduGeo = new BMap.Geocoder();
    baiduMap.addControl(new BMap.NavigationControl());

    var address = "";
    if (arguments.length > 1) {
        address = arguments[1];
    }
    showInitAddress(latlon,address);
}

function initMapByJson(v) {
    baiduMap = new BMap.Map("map_canvas");
    // 创建地址解析器实例s
    baiduGeo = new BMap.Geocoder();
    baiduMap.addControl(new BMap.NavigationControl());

    var enableDragging = isUndefined(v['enableDragging']) ? true : v['enableDragging'];
    
    if (enableDragging) {
        baiduMap.enableDragging();
    }
    else {
        baiduMap.disableDragging();
    }

    var latlon = isUndefined(v['latlon']) ? "" : v['latlon'];
   
    if ("" != latlon)
    {
       showInitAddress(latlon);
    }
    else
    {
        var zoom = isUndefined(v['zoom']) ? 6 : v['zoom'];
        var locationName = isUndefined(v['locationName']) ? '' : v['locationName'];
        if ('' != locationName)
        {
            baiduMap.centerAndZoom(locationName, zoom);
        }
        else {
            showInitAddress('');
        }
    }

   

}

function doGeoAddress(address) {
    if ('' != address) {
        if (address != cityName) {
            address = cityName + address;
        }
        baiduGeo.getPoint(address, function (point) {
            if (point) {
                baiduMap.clearOverlays();

                baiduMap.centerAndZoom(point, 16);
                marker = new BMap.Marker(point);
                baiduMap.addOverlay(marker);

                var lng = point.lng;
                var lat = point.lat;
                var v = { 'lnglat': lng + ' ' + lat, 'lat': lat, 'lng': lng };
                var callbackfunname = "geoCallback(v)";
                eval(callbackfunname)

                if (typeof callackOnDragend == 'function') {
                    marker.enableDragging(true);
                }
            }
        }
            , cityName
            );
    }
}

function showInitAddress(latlon) {
    var address = latlon;
    if ('' != address) {
        var lon = GetBaiduLon(address);
        var lat = GetBaiduLat(address);
        var point = new BMap.Point(lon, lat);
        baiduMap.centerAndZoom(point, 16);
        marker = new BMap.Marker(point);
        baiduMap.addOverlay(marker);

        if (typeof callackOnDragend == 'function') {
            marker.enableDragging(true);
            marker.addEventListener("dragend", onMyDragend);
        }
    }
    else {
        if (arguments.length > 1) {
            address = arguments[1];
            if ("" != address) {
                doGeoAddress(address);
            }
            else {
                baiduMap.centerAndZoom(cityName, 15);
            }
        }
        else {
            baiduMap.centerAndZoom(cityName, 15);
        }
    }

}


function onMyDragend() {
    var point = marker.getPosition();
    var v = { 'lnglat': point.lng + ' ' + point.lat };
    var callbackfunname = "callackOnDragend(v)";
    eval(callbackfunname)
}


function doEnableDragging(ctrl, enable) {
    if (enable) {
        baiduMap.enableDragging();
        $(ctrl).hide();
    }
    else {
        baiduMap.disableDragging();
    }
}