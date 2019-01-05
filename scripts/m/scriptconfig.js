var  
isClient = '', 
clientV = '',
userInfo = {
    "id": "1419280075",
    "name": "\u4f55\u6c34\u534e\u6df1\u5733",
    "ShowMblogPic": 1,
    "MBlogPageSize": 5, 
 "vtype": 0,
 "vipInfo": { "valid": 0 },
 "ShowPortrait": 1,
 "profile_image_url": "http:\/\/tp4.sinaimg.cn\/1419280075\/180\/1299545750\/1",
 "ta": "\u4ed6"
} || {},
isUcBrowser = 0,
jsHashMapVersion = 'da952f966fe49be4453b1be5f7d522e6',
isOnline = '1';
function loadJS(url, id, callback)
{
    var script = document.createElement('script');
    if (id)
    {
        script.id = id;
    }
    script.src = url;
    script.onload = script.onerror = script.onreadystatechange = function ()
    {
        if (/loaded|complete|undefined/.test(script.readyState))
        {
            script.onload = script.onerror = script.onreadystatechange = null;
            callback.call();
            script = null;
        }
    };
    document.body.appendChild(script);
};