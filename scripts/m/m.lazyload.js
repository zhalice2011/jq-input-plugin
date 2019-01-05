/**
 * name: m.loadJS.js
 * intro: js加载器，异步加载所需的js模块
 * Date: 13-1-17
 */
var loadJS = function(url,callback){
    var head = document.getElementsByTagName('head');
    if(head&&head.length){
        head = head[0];
    }else{
        head = document.body;
    }
    var script = document.createElement('script');
    script.src = url;
    script.type = "text/javascript";
    head.appendChild(script);
    if(arguments.length == 2){
        //document.addEventListener("DOMContentLoaded", function () {
			//console.log('DOMContentLoaded');
            script.onload = function(){
				callback();
                script.onload=null;
            }
        //});
    }
};













