function GetBaiduLon(latlon)
{
    var ret = '';
    if ('' != latlon) {
        var pos = latlon.indexOf(' ', 0);
        if (pos > 0) {
            ret = latlon.substr(0, pos);
        }
    }

    return ret;
}

function GetBaiduLat(latlon)
{
    var ret = '';
    if ('' != latlon) {
        var pos = latlon.indexOf(' ', 0);
        if (pos > 0) {
            ret = latlon.substr(pos + 1);
        }
    }

    return ret;
}
