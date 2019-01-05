/**
 * name: m5.list.js
 * intro: 列表页专用js和引入列表页需要的js模块
 * Date: 14-3-17
 */
$(function () {
    //更多按钮
    if ($("#selist_more").length) {
        $("#selist_more").bind("click", function () {
            var div_height = Math.ceil($("#selist_div a").length / 2) * 43 + "px";
            var selist_div_height = $("#selist_div").css("height");
            if (selist_div_height == div_height) {
                $("#selist_div").css("height", "129px");
                $("#moretxt").html("更多&nbsp;");
                $(".arrow_more").css("-webkit-transform", "rotate(0deg)");
            } else {
                $("#selist_div").css("height", div_height);
                $("#moretxt").html("收起&nbsp;");
                $(".arrow_more").css("-webkit-transform", "rotate(180deg)");
            }
        })

    }

    //列表页栏目字数控制
    if ($(".selist_half a span font div")) {
        selist_half_num = $(".selist_half a span font div").length - 1;
        $(".selist_half a span font div").each(function (i) {
            var str_width = parseInt($(this).css("width"));
            var str_nums = parseInt(str_width / 14);  //一共显示多少文字
            var old_str = $(this).text();
            var ghr = old_str.lastIndexOf(")");
            var ghl = old_str.lastIndexOf("(");
            var num_str = old_str.substr(ghl, ghr); //取当前的数字
            var num_strs = Math.ceil((ghr - ghl + 1) / 2);    // 折算成文字
            var show_num = str_nums - num_strs;   //前面文字字数限制
            var old_show = old_str.substr(0, ghl);   //当前的文字
            var old_show_le = old_show.length;      //当前文字个数
            if (old_show_le > show_num) {
                var wzi = old_show.substr(0, show_num - 1) + "…";
                $(this).text(wzi + num_str);
            }
            if (selist_half_num == i) {
                $(".selist_div").css("height", "auto");
            }
        });
    }

    //屏幕旋转时重置列表页适配 and android不支持orientationchange 的处理
    
   
   


});

//end of part


//新的filter
$(function(){
    if(window.BLightApp){//判断如果是百度app还用旧的filter

    } 
    else
    {
			
		//获取其他刷选项，为统计做准备
		window.keyword_other = '';
		$('.filter .selected').each(function(){
			var type = $(this).parent().parent().attr('type');
			if( type != 'area' && type != 'subarea'){
				if(this !== this.parentNode.children[0]){
					keyword_other += this.innerHTML.match(/\S+/)[0]+' ';
					
				}
			}
		});
		//隐藏多余选项
		var cmc_len = $(".cmcdata").length;
			cmcs_len=$(".cmcsdata").length;
			
		
			
		//已选项位置处理
		$(".filter_item .selected").each(function(){
			$(this).insertBefore($(this).siblings());
		});
		//遍历所有筛选项 dl
		$(".filter_item").each(function(){
			var len=$(this).find("dd a").length;
			//如果a标签的长度大于4，并且数据类型是cmc或者cmcs
			if(len>3 && $(this).attr("type")=="cmc_cmcs"){
				$(this).find("dd").append("<div class='ico_more'></div>");
				$(this).find("dd").css("padding-right","30px");
			}
			//如果a标签的长度大于4，并且数据类型是商圈数据
			if(len>4 && $(this).attr("type")=="subarea"){
				$(this).find("dd").append("<div class='ico_more'></div>");
				$(this).find("dd").css("padding-right","30px");
			}
			//如果a标签的长度大于或等于5，并且数据类型是区域，设置ico位置和dd高度
			if(len>=5 && $(this).attr("type")=="area"){
				$(this).find("dd").append("<div class='ico_more'></div>");
				//$(".ico_more").css("top","24px");
				$(this).find("dd").css({"padding-right":"30px","height":"28px"});
			}
			//筛选项大于三行添加”更多“按钮
			if($(".filter_item").length>=3 && $(this).hasClass("hide") && !$(".filter_more").length && $(this).attr("type")=="cmc_cmcs"){
			    $('.filter').append("<div class='filter_more'><a href='javascript:;'><span>"+moreFilterConditions+"</span><b class='arrow'></b></a></div>");
			}
		});
		//过渡显示筛选
			var h_total=0;
			$('.filter').children().each(function(){
				h_total+= $(this).get().offsetHeight;
			});
			setTimeout(function(){
				$('.filter').css("height",h_total+"px");
			},500);
		//显示或隐藏更多子筛选项
			//isclick 记录是否触摸到a标签，解决同时触发两个事件的bug
			var isclick = false;
			$(".ico_more").bind("touchstart",function(){isside=false});
			$(".ico_more").bind("touchmove",function(){isside=true});
			$(".ico_more").bind("touchend", function () {
			    //alert('e');
				if(isside){return;}
				$('.filter').css({"height":"auto","-webkit-transition-duration":"0ms"});
				isclick=true;
				if($(this).hasClass("up")){
					if($(this).parent().parent().attr("type")=="area"){
						$(this).parent().css("height","28px");
					}else{
						$(this).parent().css("height","28px");
					}
					$(this).removeClass("up");
				}else{
					$(this).parent().css("height","auto");
					$(this).addClass("up");
				}
				setTimeout(function(){
					isclick=false;
				},500);
			});


			$(".ico_more").bind("click", function () {
			    if (isclick)
			    {
			        return;
			    }

			    $('.filter').css({ "height": "auto", "-webkit-transition-duration": "0ms" });
			    isclick = true;
			    if ($(this).hasClass("up")) {
			        if ($(this).parent().parent().attr("type") == "area") {
			            $(this).parent().css("height", "28px");
			        } else {
			            $(this).parent().css("height", "28px");
			        }
			        $(this).removeClass("up");
			    } else {
			        $(this).parent().css("height", "auto");
			        $(this).addClass("up");
			    }
			    setTimeout(function () {
			        isclick = false;
			    }, 500);
			});


			$(".filter_item a").bind("click",function(){
				var _a=$(this);
				var urls = _a.attr("href");
				if(isclick){
					isclick=false;
					_a.attr("href","javascript:;");
					setTimeout(function(){
						_a.attr("href",urls);
					},500);
				}
			});
		//显示或隐藏更多筛选项

        $(".filter_more").bind("click", function ()
        {
			var btn_more = $(this);
			$('.filter').css({"height":"auto","-webkit-transition-duration":"0ms"});
			$(".last_item").each(function ()
            {
                if ($(this).hasClass("hide"))
                {
                    btn_more.find("span").text(lessFilterConditions);
					btn_more.addClass("less");
					$(this).removeClass("hide");
            	} else
                {
                    btn_more.find("span").text(moreFilterConditions);
					btn_more.removeClass("less");
					$(this).addClass("hide");
				}
			});
		});	
	}
	
});
