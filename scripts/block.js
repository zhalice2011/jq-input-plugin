    var blockArray=new Array();
    var inputs;
    function Location(district, block) 
    {
        this.district = district;
        this.block = block;
    }
    
    
    function HideBlocks()
    {
     $("#block").hide() ;
    }

    function ShowBlocks()
     {
      
             var divBlock =   $("#block") ;
             divBlock.show() ;

         }
function getPosition(e) {
    var left = 0;
    var top = 0;

    while (e.offsetParent) {
        left += e.offsetLeft;
        top += e.offsetTop;
        e = e.offsetParent;
    }

    left += e.offsetLeft;
    top += e.offsetTop;
    return { x: left, y: top };
} 
     
         function InitBlockCoor(dockElement,offsetLeft)
    {
        var dock =  master(dockElement)
        var pos=getPosition(dock[0]) ;
        var divPos = document.getElementById('block') ;
        divPos.style.left=pos.x  + offsetLeft ;
        divPos.style.top=pos.y+dock[0].offsetHeight + 2;
    }
    
    
function ParseId()
 {
      for(var i=0;i<inputs.length;i++)
      {
       var input = inputs[i] ;
        var name = $(input).next().text() ;
        var pos = name.indexOf('_') ;
        var left = name.substring(0,pos) ;
        var right = name.substring(pos+1) ;
        var district ;
        var block ;
        pos =left.indexOf(' ') ;
        district =  left.substring(0,pos) ;
        block =  left.substring(pos+1) ;
        
        var location = new Location() ;
        location.district = district ;
        location.block = block ;
        blockArray[i] = location ;
        
        $(input).next().text(right)
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

 function onblockkeyup(ctrlName) {
     //alert(master(ctrlName).val());

     for (var i = 0; i < inputs.length; i++) {
         var input = inputs[i];
         $(input).show();
         $(input).next().show();
     }


     var address = master(ctrlName).val();
     for (var i = 0; i < inputs.length; i++) {
         var input = inputs[i];
         var name = $(input).next().text();

         if (address != '') {
             if (false == ifContain(name, address)) {
                 //alert('aa');
                 $(input).hide();
                 $(input).next().hide();
                 //$(input).next().addClass("itemselected");
             }
         }
         else {
             $(input).show();
             $(input).next().show();
         }
     }
 }


 function onblockchange(ctrlName) {
     //alert(master(ctrlName).val());

     var address = master(ctrlName).val();
     for (var i = 0; i < inputs.length; i++) {
         var input = inputs[i];
         var name = $(input).next().text();

         if (address != '') {
             if (false == ifContain(name, address)) {
                 //alert('aa');
                 $(input).hide();
                 $(input).next().hide();
                 //$(input).next().addClass("itemselected");
             }
         }
         else {
             $(input).show();
             $(input).next().show();
         }
     }
 }


function initSelectedBlock()
 {
    var selected = master('TextBoxServiceBlock').val() ;
    for(var i=0;i<inputs.length;i++)    
    {
        var input = inputs[i] ;
        var name = $(input).next().text() ;
        
        if(blockSelected(name,selected))
        {
            $(input).attr("checked",true) ;
            $(input).next().addClass("itemselected") ;
        }  
   }
 }
 
function onblockclick()
  {
  
    var names ;    
    var districts ;
    var ids;
    names = '' ;
    districts = "" ;
    ids = '' ;
    
    var evt=getEvent();
    var element=evt.srcElement || evt.target
     
    if(true == $(element).prop("checked"))
    {
    //alert('click') ;
            $(element).next().addClass("itemselected") ;
    }
    else{
           $(element).next().removeClass("itemselected") ;
    }
    
    
    for(var i=0;i<inputs.length;i++)
    {
        var input = inputs[i] ;
        var checked = $(input).prop("checked") ;
        var name = $(input).next().text() ;
        
        if(true == checked)
        {
            names += name + ',' ;
            var location ;
            location = blockArray[i] ;
            ids += location.block +  ',' ;
            
            if(false == ifContain(','+districts +',', ',' + location.district + ','))
            {
                districts += location.district + ',' ;
            }
        }       
    }

    master('TextBoxServiceBlock').val(names.trimcomma()) ;
    master('TextBoxServiceBlockId').val(ids.trimcomma()) ;
    master('TextBoxServiceDistrictId').val(districts.trimcomma()) ;
  }