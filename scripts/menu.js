
var lang = new Array();
var userAgent = navigator.userAgent.toLowerCase();
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko') && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);
var is_mac = userAgent.indexOf('mac') != -1;
var ajaxdebug = 0;
var codecount = '-1';
var codehtml = new Array();
var charset='utf-8';

var InFloat = '';

function menu$(id) {
	return document.getElementById(id);
}

function doane(event) {
	e = event ? event : window.event;
	if(is_ie) {
		e.returnValue = false;
		e.cancelBubble = true;
	} else if(e) {
		e.stopPropagation();
		e.preventDefault();
	}
}

var jsmenu = new Array();
var ctrlobjclassName;
jsmenu['active'] = new Array();
jsmenu['timer'] = new Array();
jsmenu['iframe'] = new Array();

function isUndefined(variable) {
	return typeof variable == 'undefined' ? true : false;
}

function initCtrl(ctrlobj, click, duration, timeout, layer) {
	if(ctrlobj && !ctrlobj.initialized) {
		ctrlobj.initialized = true;
		ctrlobj.unselectable = true;

		ctrlobj.outfunc = typeof ctrlobj.onmouseout == 'function' ? ctrlobj.onmouseout : null;
		ctrlobj.onmouseout = function() {
			if(this.outfunc) this.outfunc();
			if(duration < 3 && !jsmenu['timer'][ctrlobj.id]) jsmenu['timer'][ctrlobj.id] = setTimeout('hideMenu(' + layer + ')', timeout);
		}

		ctrlobj.overfunc = typeof ctrlobj.onmouseover == 'function' ? ctrlobj.onmouseover : null;
		ctrlobj.onmouseover = function(e) {
			doane(e);
			if(this.overfunc) this.overfunc();
			if(click) {
				clearTimeout(jsmenu['timer'][this.id]);
				jsmenu['timer'][this.id] = null;
			} else {
				for(var id in jsmenu['timer']) {
					if(jsmenu['timer'][id]) {
						clearTimeout(jsmenu['timer'][id]);
						jsmenu['timer'][id] = null;
					}
				}
			}
		}
	}
}

function initMenu(ctrlid, menuobj, duration, timeout, layer, drag) {
	if(menuobj && !menuobj.initialized) {
		menuobj.initialized = true;
		menuobj.ctrlkey = ctrlid;
		menuobj.onclick = ebygum;
		menuobj.style.position = 'absolute';
		if(duration < 3) {
			if(duration > 1) {
				menuobj.onmouseover = function() {
					clearTimeout(jsmenu['timer'][ctrlid]);
					jsmenu['timer'][ctrlid] = null;
				}
			}
			if(duration != 1) {
				menuobj.onmouseout = function() {
					jsmenu['timer'][ctrlid] = setTimeout('hideMenu(' + layer + ')', timeout);
				}
			}
		}
		menuobj.style.zIndex = 999 + layer;
		if (ctrlid.indexOf("calendarexp") != -1)
		    menuobj.style.zIndex = 10003;
		if(drag) {
			menuobj.onmousedown = function(event) {try{menudrag(menuobj, event, 1);}catch(e){}};
			menuobj.onmousemove = function(event) {try{menudrag(menuobj, event, 2);}catch(e){}};
			menuobj.onmouseup = function(event) {try{menudrag(menuobj, event, 3);}catch(e){}};
		}
	}
}

var menudragstart = new Array();
function menudrag(menuobj, e, op) {
	if(op == 1) {
		if(in_array(is_ie ? event.srcElement.tagName : e.target.tagName, ['TEXTAREA', 'INPUT', 'BUTTON', 'SELECT'])) {
			return;
		}
		menudragstart = is_ie ? [event.clientX, event.clientY] : [e.clientX, e.clientY];
		menudragstart[2] = parseInt(menuobj.style.left);
		menudragstart[3] = parseInt(menuobj.style.top);
		doane(e);
	} else if(op == 2 && menudragstart[0]) {
		var menudragnow = is_ie ? [event.clientX, event.clientY] : [e.clientX, e.clientY];
		menuobj.style.left = (menudragstart[2] + menudragnow[0] - menudragstart[0]) + 'px';
		menuobj.style.top = (menudragstart[3] + menudragnow[1] - menudragstart[1]) + 'px';
		doane(e);
	} else if(op == 3) {
		menudragstart = [];
		doane(e);
	}
}

function showMenu(ctrlid, click, offset, duration, timeout, layer, showid, maxh, drag) {
	var ctrlobj = menu$(ctrlid);
	if(!ctrlobj) return;
	if(isUndefined(click)) click = false;
	if(isUndefined(offset)) offset = 0;
	if(isUndefined(duration)) duration = 2;
	if(isUndefined(timeout)) timeout = 250;
	if(isUndefined(layer)) layer = 0;
	if(isUndefined(showid)) showid = ctrlid;
	var showobj = menu$(showid);
	var menuobj = menu$(showid + '_menu');
	if(!showobj|| !menuobj) return;
	if(isUndefined(maxh)) maxh = 400;
	if(isUndefined(drag)) drag = false;

	if(click && jsmenu['active'][layer] == menuobj) {
		hideMenu(layer);
		return;
	} else {
		hideMenu(layer);
	}


	var len = jsmenu['timer'].length;
	if(len > 0) {
		for(var i=0; i<len; i++) {
			if(jsmenu['timer'][i]) clearTimeout(jsmenu['timer'][i]);
		}
	}



	initCtrl(ctrlobj, click, duration, timeout, layer);
	ctrlobjclassName = ctrlobj.className;
	ctrlobj.className += ' hover';
	initMenu(ctrlid, menuobj, duration, timeout, layer, drag);

	menuobj.style.display = 'block';
	if(!is_opera) {
		menuobj.style.clip = 'rect(auto, auto, auto, auto)';
	}


	setMenuPosition(showid, offset);

	if(maxh && menuobj.scrollHeight > maxh) {
		menuobj.style.height = maxh + 'px';
		if(is_opera) {
			menuobj.style.overflow = 'auto';
		} else {
			menuobj.style.overflowY = 'auto';
		}
	}

	if(!duration) {
		setTimeout('hideMenu(' + layer + ')', timeout);
	}

	jsmenu['active'][layer] = menuobj;
	
	
}

function setMenuPosition(showid, offset) {
	var showobj = menu$(showid);
	var menuobj = menu$(showid + '_menu');
	if(isUndefined(offset)) offset = 0;
	if(showobj) {
		showobj.pos = fetchOffset(showobj);
		showobj.X = showobj.pos['left'];
		showobj.Y = showobj.pos['top'];
		if(menu$(InFloat) != null) {
			var InFloate = InFloat.split('_');
			if(!floatwinhandle[InFloate[1] + '_1']) {
				floatwinnojspos = fetchOffset(menu$('floatwinnojs'));
				floatwinhandle[InFloate[1] + '_1'] = floatwinnojspos['left'];
				floatwinhandle[InFloate[1] + '_2'] = floatwinnojspos['top'];
			}
			showobj.X = showobj.X - menu$(InFloat).scrollLeft - parseInt(floatwinhandle[InFloate[1] + '_1']);
			showobj.Y = showobj.Y - menu$(InFloat).scrollTop - parseInt(floatwinhandle[InFloate[1] + '_2']);
			InFloat = '';
		}
		showobj.w = showobj.offsetWidth;
		showobj.h = showobj.offsetHeight;
		menuobj.w = menuobj.offsetWidth;
		menuobj.h = menuobj.offsetHeight;
		if(offset < 3) {
		//master('TextBoxFastLocation').val('menuobj.style.left=' + menuobj.style.left) ;
       //master('TextBoxFastDistrictId').val('showobj.X=' + showobj.X) ;
        //master('TextBoxFastBlockId').val('menuobj.w =' + menuobj.w ) ;
         //;fetchMyOffset(showobj).left;
        //master('TextBoxMobilePhone').val('showobj.style.left=' + fetchMyOffset(showobj).left) ;
        //master('TextBoxHouse').val('document.body.clientWidth =' + document.body.clientWidth ) ;
			//menuobj.style.left = (showobj.X + menuobj.w > document.body.clientWidth) && (showobj.X + showobj.w - menuobj.w >= 0) ? showobj.X + showobj.w - menuobj.w + 'px' : showobj.X + 'px';
			//menuobj.style.top = 20;//offset == 1 ? showobj.Y + 'px' : (offset == 2 || ((showobj.Y + showobj.h + menuobj.h > document.documentElement.scrollTop + document.documentElement.clientHeight) && (showobj.Y - menuobj.h >= 0)) ? (showobj.Y - menuobj.h) + 'px' : showobj.Y + showobj.h + 'px');
			//menuobj.style.left = 0px;
			////menuobj.style.left =0-menuobj.w+showobj.X+ 'px' ;
			var showobjrelativeleft = fetchMyOffset(showobj).left;
			 var b1 = showobj.X + menuobj.w >= document.body.clientWidth ;
        if(b1)
        {
        
            var diff= showobj.X + menuobj.w - document.body.clientWidth ;
            var result = 0 - diff -20 ;
            //master('TextBoxHouse').val('result =' + result) ;
            menuobj.style.left =result +'px';
        }
			
		} else if(offset == 3) {
			menuobj.style.left = (document.body.clientWidth - menuobj.clientWidth) / 2 + document.body.scrollLeft + 'px';
			menuobj.style.top = (document.body.clientHeight - menuobj.clientHeight) / 2 + document.body.scrollTop + 'px';
		}

//master('TextBoxFastLocation').val('menuobj.style.left=' + menuobj.style.left) ;
		if(menuobj.style.clip && !is_opera) {
			menuobj.style.clip = 'rect(auto, auto, auto, auto)';
		}
	}
}

function hideMenu(layer) {
	if(isUndefined(layer)) layer = 0;
	if(jsmenu['active'][layer]) {
		try {
			menu$(jsmenu['active'][layer].ctrlkey).className = ctrlobjclassName;
		} catch(e) {}
		clearTimeout(jsmenu['timer'][jsmenu['active'][layer].ctrlkey]);
		jsmenu['active'][layer].style.display = 'none';
		if(is_ie && is_ie < 7 && jsmenu['iframe'][layer]) {
			jsmenu['iframe'][layer].style.display = 'none';
		}
		jsmenu['active'][layer] = null;
	}
}

function fetchMyOffset(obj) {
	var left_offset = obj.offsetLeft;
	var top_offset = obj.offsetTop;
	obj = obj.offsetParent;
var id = "" ;
	while(obj != null&&obj.id!='fastblock') {
	//id = obj.id ;
    
		left_offset += obj.offsetLeft;
		top_offset += obj.offsetTop;
			obj = obj.offsetParent;
		
	}
	return { 'left' : left_offset, 'top' : top_offset };
}


function fetchOffset(obj) {
	var left_offset = obj.offsetLeft;
	var top_offset = obj.offsetTop;
	while((obj = obj.offsetParent) != null) {
		left_offset += obj.offsetLeft;
		top_offset += obj.offsetTop;
	}
	return { 'left' : left_offset, 'top' : top_offset };
}

function ebygum(eventobj) {
	if(!eventobj || is_ie) {
		window.event.cancelBubble = true;
		return window.event;
	} else {
		if(eventobj.target.type == 'submit') {
			eventobj.target.form.submit();
		}
		eventobj.stopPropagation();
		return eventobj;
	}
}

function menuoption_onclick_function(e) {
	this.clickfunc();
	hideMenu();
}

function menuoption_onclick_link(e) {
	choose(e, this);
}

function menuoption_onmouseover(e) {
	this.className = 'popupmenu_highlight';
}

function menuoption_onmouseout(e) {
	this.className = 'popupmenu_option';
}

function choose(e, obj) {
	var links = obj.getElementsByTagName('a');
	if(links[0]) {
		if(is_ie) {
			links[0].click();
			window.event.cancelBubble = true;
		} else {
			if(e.shiftKey) {
				window.open(links[0].href);
				e.stopPropagation();
				e.preventDefault();
			} else {
				window.location = links[0].href;
				e.stopPropagation();
				e.preventDefault();
			}
		}
		hideMenu();
	}
}