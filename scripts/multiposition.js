    var positionItemArray=new Array();
    var positionItems;
    
      var targetPosName ;
    var targetPosId ;
    
 function  getPosition(e)  
 {
   var  left  =   0 ;
   var  top   =   0 ;

   while  (e.offsetParent)  
   {
    left  +=  e.offsetLeft;
    top  +=  e.offsetTop;
    e  =  e.offsetParent;
  } 
 
  left  +=  e.offsetLeft;
  top  +=  e.offsetTop;
   return    {x:left, y:top} ;
} 


  function resetPosition()
    {
          for( i=0;i<positionItems.length;i++)
            {
                var item = positionItems[i] ;
                 if( true == $(item).prop("checked") )
                {
                    $(item).attr("checked",false) ;
                    $(item).next().removeClass("itemselected") ;
                    
                    
                    //break ;
                }
            }
            
              master(targetPosName).val('') ;
    master(targetPosId).val('') ;
    }
    
    
    function InitPositionCoor(dockElement,offsetLeft)
    {
        var dock =  master(dockElement)
        var pos=getPosition(dock[0]) ;
        var divPos = document.getElementById('divposition') ;
        divPos.style.left=pos.x  + offsetLeft ;
        divPos.style.top=pos.y+dock[0].offsetHeight + 2;
    }
    
    
    function Hide()
    {
          $("#divposition").hide() ;
    }
    
    function Show(id)
     {
      
         var div =   $("#" + id) ;
         if(div.is(":hidden"))
         {
            div.show() ;
         }
         else{
           div.hide() ;
         }
     }


     function ParsePositionItem()
 {
      for(var i=0;i<positionItems.length;i++)
      {
        var item = positionItems[i] ;
        var name = $(item).next().text() ;
        var pos = name.indexOf('_') ;
        var left = name.substring(0,pos) ;
        var right = name.substring(pos+1) ;
        positionItemArray[i] = left ;
        $(item).next().text(right)
      }
 }


 function initMultiPosSelected(id) {
     var selected = master(id).val();
     for (var i = 0; i < positionItems.length; i++) {
         var item = positionItems[i];
         var name = $(item).next().text();

         if (blockSelected(name, selected)) {
             $(item).attr("checked", true);
             $(item).next().addClass("itemselected");
         }
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
 
 
 

 
 

    
function onpositionitemclick(ctrlName,ctrlId)
  {
    targetPosName = ctrlName ;
  targetPosId = ctrlId ;
  
    var evt=getEvent();
    //alert('dd');
    var element=evt.srcElement || evt.target
    
    if(true == $(element).prop("checked"))
    {
            $(element).next().addClass("itemselected") ;
    }
    else{
           $(element).next().removeClass("itemselected") ;
    }
    
//    var i ;
//    for( i=0;i<positionItems.length;i++)
//    {
//        if(positionItems[i] != element)
//        {
//            $(positionItems[i]).attr("checked",false) ;
//             $(positionItems[i]).next().removeClass("itemselected") ;
//        }
//    }
    
    var names ;    
    var ids;
    names = '' ;
    ids = '' ;
    for(var i=0;i<positionItems.length;i++)
    {
        var item = positionItems[i] ;
        var checked = $(item).prop("checked") ;
        var name = $(item).next().text() ;
        
        if(true == checked) {
            if ("" != name) 
            {
                names += name + ',';
                ids += positionItemArray[i] + ',';
            }
        }       
    }
    
    
    master(ctrlName).val(names.trimcomma()) ;
    master(ctrlId).val(ids.trimcomma()) ;
  }