var cityName;
var map;
var baiduGeo;

function initMap(latlon) {
    showInitAddress(latlon);
}


function callback(location) {
    var lng = location.lng();
    var lat = location.lat() ;
    var v = { 'lnglat':lng + ' ' + lat,'lat':lat,'lng':lng};
    var callbackfunname = "geoCallback(v)";
    eval(callbackfunname)
}

function doGeoAddress(latlon) {
    var geocoder = new google.maps.Geocoder();

    var address = latlon;
    if (address != cityName) {
        address = cityName + address;
    }

    //地址正向解析
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //alert(results[0].geometry.location);
            //alert("经度:" + results[0].geometry.location.lng());
            //alert("纬度:" + results[0].geometry.location.lat());
            var myOptions = {
                zoom: 14,
                center: results[0].geometry.location,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

            //定义标示   
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: 'location',
                draggable: true
            });
            marker.setMap(map);

            //callback
            callback(results[0].geometry.location);

            google.maps.event.addListener(marker, "dragend", function (event) {
                //逆地址解析               
                geocoder.geocode({
                    'location': event.latLng
                }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var html = '<div>' + results[0].formatted_address + '</div>';

                        var infowindow = new google.maps.InfoWindow({
                            content: html
                        });
                        infowindow.open(map, marker);
                    }
                });

                //单击后在地图上增加一个标示
                google.maps.event.addListener(map, 'click', function (event) {
                    var marker1 = new google.maps.Marker({
                        map: map,
                        position: event.latLng
                    });
                    marker1.setMap(map);
                });

                //添加双击事件，返回地图中央
                google.maps.event.addListener(map, "dblclick", function (evvent) {
                    var center = map.getCenter();
                    var lat = center.lat();
                    var lng = center.lng();
                    var latlng = new google.maps.LatLng(lat, lng);
                    map.setCenter(latlng);

                })
            });
        }
    });


}

function showInitAddress(latlon) {
    if ('' != latlon) {
        var lat;
        var lon;

        var lon = GetBaiduLon(latlon);
        var lat = GetBaiduLat(latlon);
        var position = new google.maps.LatLng(lat, lon);

        var mapOptions = {
            //设置经纬度
            center: position,
            zoom: 14, //地图的缩放度
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        //创建一个地图
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);


        createMark(position);
    }
    else {
        doGeoAddress(cityName);
    }

}


//创建标记
function createMark(position) {
    var marker = new google.maps.Marker({
        position: position,
        map: map, //要添加标记的地图
        title: 'Click to zoom'
    });
}