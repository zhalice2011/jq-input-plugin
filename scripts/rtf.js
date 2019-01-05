function editRtf(ownerId) {
    var content;
    content = $("#rtfContent").html();
    //content = encodeURIComponent(content) ;
    saveKeyStore(ownerId, content);
}

function saveKeyStore(ownerId, content) {
    $.post("/http/keystore",
                {
                    command: "save"
                    ,ownerId:ownerId
                    ,value:content
                },
                function (data) {
                    var json = eval('(' + data + ')');
                    if ("0" == json.resultId) {
                        var key = json.key ;
                        doEditRtf(ownerId,key) ;
                    }
                    else{
                        alert(json.resultDesc);
                    }
                }
            )
}


function doEditRtf(ownerId,key) {
    var url = "/window/rtfcompatible";
    var width = screen.width;
    var height = screen.height;
    width = $(window).width();
    var content = "" ;

    var para = "?callbackfun=no&random={0}&tag=3&width={1}&height={2}&content={3}&ownerId={4}&key={5}";
    para = para.format(Math.random(),width,height,content,ownerId,key);

    url = url + para ;

    var screenHeight = document.documentElement.clientHeight;
    v = { 'maxh': 800, 'maxw': 500, 'pos': '00', 'cache': 0, 'cover': 0, 'maxh': screenHeight };
    showWindow("rtf", url, 'get', -1, v);
}


    
function callbackRtf(v) {
        
    var id = isUndefined(v['id']) ? '' : v['id'];
    var content = isUndefined(v['content']) ? '' : v['content'];
    var tag = isUndefined(v['tag']) ? '' : v['tag'];

    //alert(content) ;
        
    $("#rtfContent").html(content);


}