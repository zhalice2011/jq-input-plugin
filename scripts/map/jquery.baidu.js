function MyBaiduMap(container, options)
{
    alert(container);
    this.cityName = options.cityName;
    this.baiduMap = new BMap.Map(container);
    this.baiduGeo = new BMap.Geocoder();
    this.baiduMap.addControl(new BMap.NavigationControl());
    this.marker = '' ;
}

MyBaiduMap.prototype.initMap=function(latlon) 
{
    var address = "";
    if (arguments.length > 1) {
        address = arguments[1];
    }
    alert('5');
    this.showInitAddress(latlon, address);
};

MyBaiduMap.prototype.initMapByJson=function(v) {
    var latlon = isUndefined(v['latlon']) ? "" : v['latlon'];

    if ("" != latlon) {
        this.showInitAddress(latlon);
    }
    else {
        var zoom = isUndefined(v['zoom']) ? 6 : v['zoom'];
        var locationName = isUndefined(v['locationName']) ? '' : v['locationName'];
        if ('' != locationName) {
            this.baiduMap.centerAndZoom(locationName, zoom);
        }
    }

};

MyBaiduMap.prototype.onGeo = function(point)
{
    alert(this.baiduMap);
    this.baiduMap.clearOverlays();

    this.baiduMap.centerAndZoom(point, 16);
    this.marker = new BMap.Marker(point);
    this.baiduMap.addOverlay(this.marker);

    var v = { 'lnglat': point.lng + ' ' + point.lat };
    var callbackfunname = "geoCallback(v)";
    eval(callbackfunname)

    if (typeof callackOnDragend == 'function') {
        this.marker.enableDragging(true);
    }
}


MyBaiduMap.prototype.doGeoAddress=function(address) {
    if (address != this.cityName) {
        address = this.cityName + address;
    }
    alert('geo');
    alert(address);
    this.baiduGeo.getPoint(address, function (point) {
        alert(point);
        if (point) {
            this.onGeo(point);
        }
    }
        , cityName
        );
};


MyBaiduMap.prototype.showInitAddress=function(latlon)
    {
        var address = latlon;
        if ('' != address) {
            var lon = GetBaiduLon(address);
            var lat = GetBaiduLat(address);
            var point = new BMap.Point(lon, lat);
            this.baiduMap.centerAndZoom(point, 16);
            this.marker = new BMap.Marker(point);
            this.baiduMap.addOverlay(this.marker);

            if (typeof callackOnDragend == 'function') {
                this.marker.enableDragging(true);
                this.marker.addEventListener("dragend", onMyDragend);
            }
        }
        else {
            if (arguments.length > 1) {
                address = arguments[1];
                if ("" != address) {
                    this.doGeoAddress(address);
                }
                else {
                    this.baiduMap.centerAndZoom(this.cityName, 15);
                }
            }
            else {
                this.baiduMap.centerAndZoom(this.cityName, 15);
            }
        }

    };

MyBaiduMap.prototype.onMyDragend=function(){
        var point = this.marker.getPosition();
    var v = { 'lnglat': point.lng + ' ' + point.lat };
    var callbackfunname = "callackOnDragend(v)";
    eval(callbackfunname)
};

