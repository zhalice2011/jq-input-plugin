//console.log('dw:' + window.location.href);
/**
 * User: chengjun
 * Date: 13-1-14
 */

//城市定位
(function($){
    $.location={
        //获取当前位置
        getCurrPos:function(){
			//console.log('开始获取位置');
            if(navigator.geolocation){
                if($(".city_page").length){
                    $(".curr_city").html("正在定位中,请稍后...");
                }else if($(".index_page").length){
                    $.location.createTips("正在获取位置信息...");
                }else if($(".getpos_page").length){
                    $.location.createTips("城市定位中...");
                }
                navigator.geolocation.getCurrentPosition(this.getPosSuccess,this.getPosError,{
                    timeout:10000,
                    maximumAge:60000,
                    enableHighAccuracy:true
                });
                googleAnalytices("/location/clickcity/" ,document.referrer);
            }else{
				googleAnalytices("/location/fail/unsupport/" ,document.referrer);
                alert("您的浏览器不支持GPS定位服务");
            }
        },
        //成功后储存位置数据,执行跳转或显示
        getPosSuccess:function(pos){
			//console.log('定位成功');
            // 此处 this指向的window对象
            var lat = pos.coords.latitude;
            var lon = pos.coords.longitude;
            var service_url = "http://"+_rootDomainNoProtocol+"/location/?l=" + lat + "&d=" + lon;
            $.ajax({url:service_url,success:function(data){
                var citydata = eval('(' + data + ')');
                if(typeof citydata =="object" && citydata.listname.length){
                    if(window.localStorage){
                        var saveDate = new Date();
                        localStorage.setItem("locationDate",saveDate.getDate());
                        localStorage.setItem("myLat",lat);
                        localStorage.setItem("myLon",lon);
                        localStorage.setItem("myCity",citydata.listname);
                        localStorage.setItem("myCityName",citydata.cityname);
                    }
                    //alert("您所在的城市是："+citydata.cityname);
                    if(window.location.href.indexOf("from")>0){
                        var isfrom = GetURLString("from");
                        var gotoUrl = "http://"+_rootDomainNoProtocol+"/"+citydata.listname+"/?from="+isfrom;
                    }else{
                        var gotoUrl = "http://"+_rootDomainNoProtocol+"/"+citydata.listname + '/' + window.location.search;
                    }
                    //var gotoUrl = "http://"+_rootDomainNoProtocol+"/"+citydata.listname;
                    if($(".index_page").length){
                        $.location.createTips("当前定位城市："+citydata.cityname);
                        setTimeout(function(){
                            $("#tipsDiv").hide();
                        },3000);
                        window.location.href=gotoUrl;
                    }else if($(".city_page").length){
                        $(".curr_city").html("当前定位城市: "+"<a href="+gotoUrl+">"+citydata.cityname+"</a>");
                    }else if($(".getpos_page").length){
                        $.location.createTips("当前定位城市："+citydata.cityname);
                        setTimeout(function(){
                            $("#tipsDiv").hide();
                        },3000);
                        window.location.href="http://"+_rootDomainNoProtocol+"/"+citydata.listname+"/pinche/?from=qq_pinche&channel=qq";
                    }
                }
                //ga统计
                var oldcity = ____json4fe.locallist[0].listname ;
                var eq = "eq" ;
                if(oldcity != citydata.listname){eq = "ne";}
                googleAnalytices("/location/"+ oldcity +"/locate/"+ citydata.listname +"/"+ eq +"/success/" ,document.referrer);
            },timeout:10000,error:function(){
                $.location.createTips("定位失败，请手动选择城市。");
				googleAnalytices("/location/fail/locationTimeout/" ,document.referrer);
                setTimeout(function(){
                    $("#tipsDiv").hide();
                },3000);
            }});
        },
        //失败后显示错误信息
        getPosError:function(err){
			//console.log('定位失败');
            // 此处 this指向的window对象，直接this.createTips会报错。
            var oldcity = ____json4fe.locallist[0].listname;
            switch(err.code){
                case err.PERMISSION_DENIED:
                    if($(".getpos_page").length){
                        $.location.createTips("定位失败，为您跳转至北京拼车页面...");
                        window.location.href="http://"+_rootDomainNoProtocol+"/bj/pinche/?from=qq_pinche&channel=qq";
                    }else{
                        $.location.createTips("您拒绝了共享位置，可手动选择城市。");
                    }
                    setTimeout(function(){
                        $("#tipsDiv").hide();
                    },3000);
                    googleAnalytices("/location/"+ oldcity +"/locate/"+ oldcity+"/eq/fail/denied/" ,document.referrer);
                    //console.log("用户拒绝共享位置");
                    break;
                case err.POSITION_UNAVAILABLE:
                    $.location.getCityIp();
                    googleAnalytices("/location/"+ oldcity +"/locate/"+ oldcity+"/eq/fail/unavailable/" ,document.referrer);
                    //console.log("无法获取当前位置");
                    break;
                case err.TIMEOUT:
                    $.location.getCityIp();
                    googleAnalytices("/location/"+ oldcity +"/locate/"+ oldcity+"/eq/fail/timeout/" ,document.referrer);
                    //console.log("获取位置超时");
                    break;
                default:
                    $.location.getCityIp();
                    googleAnalytices("/location/"+ oldcity +"/locate/"+ oldcity+"/eq/fail/unknownerror/" ,document.referrer);
                    //console.log("未知错误");
                    break;
            }
        },
        getCityIp:function(){
			//console.log('根据ip');
            var ipserverurl = "http://"+_rootDomainNoProtocol+"/ipservice/?callback=?";
            $.ajax({url:ipserverurl,success:function(data){
                var ipCityData = data;
				var cityName = ipCityData.listname;
				if (!cityName || cityName == '-1') {
					cityName = 'bj';
				}
                if(typeof ipCityData=="object"){
                    //如果浏览器支持本地储存，即把数据存入本地
                    if(window.localStorage){
                        var saveDate = new Date();
                        localStorage.setItem("locationDate",saveDate.getDate());
                        localStorage.setItem("myCity",ipCityData.listname);
                        localStorage.setItem("myCityName",ipCityData.localname);
                    }
                    if(window.location.href.indexOf("from")>0){
                        var isfrom = GetURLString("from");
                        var gotoUrl = "http://"+_rootDomainNoProtocol+"/"+ cityName +"/?from="+isfrom;
                    }else{
                        var gotoUrl = "http://"+_rootDomainNoProtocol+"/"+ cityName + '/' + window.location.search;
                    }
                    //var gotoUrl= "http://"+_rootDomainNoProtocol+"/"+ipCityData.listname;
                    if($(".index_page").length ){
                        $.location.createTips("当前定位城市："+ipCityData.localname);
                        setTimeout(function(){
                            $("#tipsDiv").hide();
                        },3000);
                        window.location.href=gotoUrl;
                    }else if($(".city_page").length){
                        $(".curr_city").html("当前定位城市: "+"<a href="+gotoUrl+">"+ipCityData.localname+"</a>");
                    }else if($(".getpos_page").length){
                        $.location.createTips("当前定位城市："+ipCityData.localname);
                        setTimeout(function(){
                            $("#tipsDiv").hide();
                        },3000);
                        window.location.href="http://"+_rootDomainNoProtocol+"/"+ipCityData.listname+"/pinche/?from=qq_pinche&channel=qq";
                    }
                }else{
                    $.location.getCityIpError();
                }
				googleAnalytices("/location/success/iplocation/" ,document.referrer);
            },timeout:10000,error:function(){
                $.location.getCityIpError();
            }});
        },
        getCityIpError:function(){
            //ga统计
            var oldcity = ____json4fe.locallist[0].listname;
            googleAnalytices("/location/"+ oldcity +"/locate/"+ oldcity+"/eq/fail/iperror/" ,document.referrer);
            if($(".index_page").length){
                $.location.createTips("定位失败，正在前往城市选择页面...");
                window.location.href="http://"+_rootDomainNoProtocol+"/city.html?from=iperror";
            }else if($(".city_page").length){
                $(".curr_city").html("<span class='ico'></span>哎呀！定位不成功，请 <a href='javascript:;' onclick='$.location.getCurrPos()'>重新定位</a>");
            }else if($(".getpos_page").length){
                $.location.createTips("定位失败，为您跳转至北京拼车页面...");
                setTimeout(function(){
                    $("#tipsDiv").hide();
                },3000);
                window.location.href="http://"+_rootDomainNoProtocol+"/bj/pinche/?from=qq_pinche&channel=qq";
            }
        },
        //初始化并执行定位操作
        posInit:function(){
			//console.log('posInit');
            if(typeof localStorage.locationDate=="undefined"){
                this.getCurrPos();
            }else{
                var nowDate = new Date();
                if(nowDate.getDate()==localStorage.locationDate && localStorage.myCity.length){
                    //alert("一天内只定位一次,您所在的城市是："+localStorage.myCityName);
                    if(window.location.href.indexOf("from")>0){
                        var isfrom = GetURLString("from");
                        var gotoUrl = "http://"+_rootDomainNoProtocol+"/"+localStorage.myCity+"/?from="+isfrom;
					} else{
                        var gotoUrl = "http://"+_rootDomainNoProtocol+"/"+localStorage.myCity + '/' + window.location.search;
                    }
                    //var gotoUrl = "http://"+_rootDomainNoProtocol+"/"+localStorage.myCity;
                    if($(".index_page").length){
                        window.location.href=gotoUrl;
                    }else if($(".city_page").length){
                        $(".curr_city").html("当前定位城市: "+"<a href="+gotoUrl+">"+localStorage.myCityName+"</a>");
                    }else if($(".getpos_page").length){
                        $.location.createTips("正在前往"+localStorage.myCityName+"拼车页面...");
                        setTimeout(function(){
                            $("#tipsDiv").hide();
                        },3000);
                        window.location.href="http://"+_rootDomainNoProtocol+"/"+localStorage.myCity+"/pinche/?from=qq_pinche&channel=qq";
                    }
                }else{
                    this.getCurrPos();
                }
            }
        },
        //创建弹出信息层
        createTips:function(txt){
            if(!$("#tipsDiv").length){
                var tipsDiv = "<div id='tipsDiv'>"+txt+"</div>";
                $("body").append(tipsDiv);
            }else{
                $("#tipsDiv").text(txt);
            }
            $("#tipsDiv").show();
        }
    };
})(jq);

//获取URL参数
function GetURLString(name) {
    var regex = new RegExp("[?&]" + encodeURIComponent(name) + "\\=([^&#]+)");
    var value = (location.search.match(regex)||["",""])[1];
    return decodeURIComponent(value);
}
