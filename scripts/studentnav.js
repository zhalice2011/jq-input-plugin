function initStudentOrderTab()
{
    var currUrl = window.location.pathname;
    currUrl = String(currUrl);
    currUrl = getFileName(currUrl);
    //alert('currUrl2:' + currUrl);
    var urls = $("#menu1 a");
    for (var i = 0; i < urls.length; i++) {
        var itemurl = urls[i].href;
        itemurl = String(itemurl);
        itemurl = getFileName(itemurl);
        
        //alert('itemurl333:' + itemurl);
        if (''!= itemurl) {
            if (itemurl.toLowerCase().indexOf(currUrl.toLowerCase()) >= 0) {
                //alert('d');
                $(urls[i]).parent().addClass('hover');
                break;
            }
        }
    }

}

    function getFileName(url) {
        var ret = '';
        var pos = url.lastIndexOf('/');
        if (pos >= 0) {
            ret =  url.substring(pos + 1);
        }
        //alert('c'+ret);
        pos = ret.lastIndexOf('?');
        if (pos >= 0) {
            ret = ret.substring(0, pos);
        }
        return ret;
    }
