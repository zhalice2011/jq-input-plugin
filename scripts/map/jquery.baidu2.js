function MyMap(container, options) {

    var cityName = options.cityName;
    var baiduMap = new BMap.Map(container);
    var baiduGeo = new BMap.Geocoder();
    baiduMap.addControl(new BMap.NavigationControl());
    var marker = '';


    "use strict";

    // utilities
    var noop = function () { }; // simple no operation function

    function initMap(latlon)
    {
        var address = "";
        if (arguments.length > 1) {
            address = arguments[1];
        }
        showInitAddress(latlon, address);
    }


    function initMapByJson(v) {
       var latlon = isUndefined(v['latlon']) ? "" : v['latlon'];

        if ("" != latlon) {
            showInitAddress(latlon);
        }
        else {
            var zoom = isUndefined(v['zoom']) ? 6 : v['zoom'];
            var locationName = isUndefined(v['locationName']) ? '' : v['locationName'];
            if ('' != locationName) {
                baiduMap.centerAndZoom(locationName, zoom);
            }
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



    function doGeoAddress(address) {
        if (address != cityName) {
            address = cityName + address;
        }
        baiduGeo.getPoint(address, function (point) {
            if (point) {
                baiduMap.clearOverlays();

                baiduMap.centerAndZoom(point, 16);
                marker = new BMap.Marker(point);
                baiduMap.addOverlay(marker);

                var v = { 'lnglat': point.lng + ' ' + point.lat };
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

    function onMyDragend() {
        var point = marker.getPosition();
        var v = { 'lnglat': point.lng + ' ' + point.lat };
        var callbackfunname = "callackOnDragend(v)";
        eval(callbackfunname)
    }

    function innerFunction()
    {
        alert('inner');
    }

    //initMap('');

    // expose the Swipe API
    return {
        setup: function(){

            innerFunction();
        },
        initMap: function (latlon) {

            initMap(latlon);
        }
        , initMapByJson:function(v)
        {
            initMapByJson(v);   
        }
        ,getMap: function () {
            return baiduMap;
        }
        ,
        doGeoAddress: function (address) {
            doGeoAddress(address);
        }
     
    }

}

