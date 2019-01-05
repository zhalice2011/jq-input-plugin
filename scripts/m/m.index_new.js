var win;
function isRootDir() {
	var url = window.location.href;
	return /\.com\/?$/.test(url) || /58\.com\/\?refrom=www/.test(url) || /\.com\/\?/.test(url);
}

$(function(){
    //iphone
    if (____json4fe.catentry.name == "sou" && $(".index_div") && !isRootDir()) {
        if ((/iphone|ipad/gi).test(navigator.appVersion)) {
            if (window.localStorage) {
                if (typeof(localStorage.addLayer) == 'undefined') {
                    $(".index_div").append('<div id="addMscreen"><b class="ico_close"></b><p>请按下方"<strong>+</strong>"或者"<strong>@</strong>"<br>然后选择 "添加到主屏幕"<br>即可快速浏览我们了啦!</p><div class="addThree"></div></div>');
                    $('#addMscreen').css("display", "block");
                    localStorage.setItem('addLayer', 'addMscreen');
                }
                $('.ico_close').bind('click', function () {
                    $('#addMscreen').css("display", "none");
                });
                $('#addMscreen').bind('click', function () {
                    $(this).css("display", "none");
                });
            }
        }
    }

    if(typeof $.location =="object"){
        //定位
        var initurl = window.location.href;
        if ($(".index_page").length && isRootDir()) {
            $.location.posInit();
        }
    }

	
});
