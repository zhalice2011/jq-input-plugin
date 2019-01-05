    var fastblockArray=new Array();
    var fastblocks;
    function Location(district, fastblock) 
    {
        this.district = district;
        this.fastblock = fastblock;
    }
    
    
    function HideFastBlocks()
    {
     //$("#fastblock").hide() ;
        $(".block-list").hide();
        $("#fastblock_menu").hide() ;
    }

    function ShowFastBlocks(ctrl) {
        showMenu({ 'ctrlid': ctrl.id, 'menuid': 'fastblock_menu','mtype':'win','fade':0, 'pos': '12', 'ctrlclass': 'a', 'duration': 2, 'timeout': 250, 'layer': 1 });
    }

    function showMenuOnDistrict(ctrl) {
        showMenu({ 'ctrlid': ctrl.id, 'pos': '12', 'ctrlclass': 'a', 'fade': 0,'drag':0,'duration': 2, 'timeout': 250, 'layer': 2 });
    }
     
         function InitFastBlockCoor(dockElement,offsetLeft)
    {

        var dock =  master(dockElement)
        var pos=getPosition(dock[0]) ;
        var divPos = document.getElementById('fastblock') ;

        divPos.style.left=pos.x  + offsetLeft ;
        divPos.style.top=pos.y+dock[0].offsetHeight + 2;
    }
    
    
function ParseFastBlockId() {
    //alert(fastblocks.length);
      for(var i=0;i<fastblocks.length;i++)
      {
       var input = fastblocks[i] ;
       
        var name = $(input).text() ;
        var pos = name.indexOf('_') ;
        var left = name.substring(0,pos) ;
        var right = name.substring(pos+1) ;
        var district ;
        var fastblock ;
        pos =left.indexOf(' ') ;
        district =  left.substring(0,pos) ;
        fastblock =  left.substring(pos+1) ;
        
        var location = new Location() ;
        location.district = district ;
        location.fastblock = fastblock ;
        fastblockArray[i] = location ;
        
        $(input).text((right));
        
      }
 }
 
 
function blockSelected(name,selected)
 {
    var ret ;
    var parent ;
    var child ;
    ret = false ;
    
    parent = "," + selected + ","
    child = "," + name + ","
    if(parent.indexOf(child)>=0)
    {
        return true ;
    }
    else{
    return false ;
    }
 }
 
 
 
function initSelectedFastBlock()
 {
    var selected = master('TextBoxServiceFastBlock').val() ;
    for(var i=0;i<fastblocks.length;i++)    
    {
        var input = fastblocks[i] ;
        var name = $(input).next().text() ;
        
        if(blockSelected(name,selected))
        {
            $(input).attr("checked",true) ;
            $(input).next().addClass("itemselected") ;
        }  
   }
 }
 
function ifContain(parent,child)
{
    if(parent.indexOf(child)>=0)
    {
        return true ;
    }
    else{
    return false ;
    }
}    
    function gethtmlelement(id) {
	return document.getElementById(id);
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


 function onfastdistrictmouseout(districtitem)
 {
   var districtid = districtitem.id ;
    
    var blockmenuid=   ''+districtid+"_menu";
   $('#'+blockmenuid).hide();
 }
 
    function onfastdistrictmouseover(districtitem)
    {
        var evt=getEvent();
    var element=evt.srcElement || evt.target
    
    var districtid = districtitem.id ;
    
    var blockmenuid=   districtid +"_menu" ;
    //$('#blockmenu73').addClass("display");
    //$('#'+blockmenuid).addClass("display") ;
    
//      var  theblocks = $(".block-list");
//   for(var i=0;i<theblocks.length;i++)
//    {
//    if($(theblocks[i]).attr('id')!=blockmenuid)
//    {
//         $(theblocks[i]).hide();
//    }
//    else
//    {
//      $(theblocks[i]).show();
//    }
//    }
    
    //alert('districtid=' + districtid) ;
    master('TextBoxQq').val('districtid=' + districtid) ;
    var showobj = gethtmlelement(districtid);
	var menuobj = gethtmlelement(blockmenuid);
	
	
	
    showobj.pos = fetchOffset(showobj);
		showobj.X = showobj.pos['left'];
		showobj.Y = showobj.pos['top'];
		
		showobj.w = showobj.offsetWidth;
		showobj.h = showobj.offsetHeight;
		menuobj.w = menuobj.offsetWidth;
		menuobj.h = menuobj.offsetHeight;
   
   var offset=0;
   menuobj.style.position='absolute' ;
   master('TextBoxFastLocation').val('menuobj.style.left=' + menuobj.style.left) ;
       master('TextBoxFastDistrictId').val('showobj.X=' + showobj.X) ;
        master('TextBoxFastBlockId').val('menuobj.w =' + menuobj.w ) ;
        
        master('TextBoxHouse').val('document.body.clientWidth =' + document.body.clientWidth ) ;
        var b1 = showobj.X + menuobj.w >= document.body.clientWidth ;
        var b2 = true;//showobj.X + showobj.w - menuobj.w >= 0;
        if(b1&&b2)
        {
        menuobj.style.left =0-menuobj.w+showobj.w + 'px' ;
        //master('TextBoxHouse').val('result:b1='+b1 + '   ' + 'b2='+b2) ;
        }
        else
        {
        //menuobj.style.left = showobj.X + 'px';
                //master('TextBoxHouse').val('b1='+b1 + '   ' + 'b2='+b2) ;
        }
   //menuobj.style.left = (showobj.X + menuobj.w > document.body.clientWidth) 
   //&& (showobj.X + showobj.w - menuobj.w >= 0) ? showobj.X + showobj.w - menuobj.w + 'px' : showobj.X + 'px';
   //menuobj.style.top = offset == 1 ? showobj.Y + 'px' : (offset == 2 || ((showobj.Y + showobj.h + menuobj.h > document.documentElement.scrollTop + document.documentElement.clientHeight) && (showobj.Y - menuobj.h >= 0)) ? (showobj.Y - menuobj.h) + 'px' : showobj.Y + showobj.h + 'px');
	//	menuobj.style.left =10;
		
		master('TextBoxLocation').val('after menuobj.style.left=' + menuobj.style.left) ;
    }
    
    
function onfastblockclick(blockitem)
  {
  
    var names ;    
    var districts ;
    var ids;
    names = '' ;
    districts = "" ;
    ids = '' ;
    
    var evt=getEvent();
    var element=evt.srcElement || evt.target
     
        var blockitemid = blockitem.id ;
        
        var code =  $(element).attr('id');        

        var location = $(element).text().trim();
        var pos =code.indexOf(' ') ;
        var district =  code.substring(0,pos) ;
        var block =  code.substring(pos+1) ;
//alert(location+"abc");
location = toDBC(location) ;
master('TextBoxFastLocation').val(location.trim()) ;
master('TextBoxFastDistrictId').val(district) ;
master('TextBoxFastBlockId').val(block);

master('TextBoxFastLocation').change();
//    master('TextBoxServiceDistrictId').val(districts.trimcomma()) ;

    var blockmenuid=   district+"_menu";


  var  theblocks = $(".block-list");
    
    //alert(theblocks.length);
    for(var i=0;i<theblocks.length;i++)
    {
         $(theblocks[i]).hide();
    }
    
    HideFastBlocks();
 }
 
 
 
 
 function onfastdistrictclick(item)
  {
    var names ;    
    var districts ;
    var ids;
    names = '' ;
    districts = "" ;
    ids = '' ;
    
    var evt=getEvent();
    var element=evt.srcElement || evt.target
     
        var districtitemid = item.id ;
        
        var code =  $(element).attr('id');        

        var location = $(element).text().trim();
        //var pos =code.indexOf(' ') ;
        var district =  code;
        //var block =  code.substring(pos+1) ;
//alert(location+"abc");
location = toDBC(location) ;
master('TextBoxFastLocation').val(location.trim()) ;
master('TextBoxFastDistrictId').val(code) ;
    master('TextBoxFastBlockId').val('') ;
//    master('TextBoxServiceDistrictId').val(districts.trimcomma()) ;

    //var blockmenuid=   district+"_menu";


 
    
    HideFastBlocks();
 }