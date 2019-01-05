    var itemSubjectArray=new Array();
    var itemsSubject;
    
    var targetName ;
    var targetId ;
    
    function resetSubject()
    {
          for( i=0;i<itemsSubject.length;i++)
            {
                var item = itemsSubject[i] ;
                 if( true == $(item).prop("checked") )
                {
                    $(item).attr("checked",false) ;
                    $(item).next().removeClass("itemselected") ;
                    
                      master(targetName).val('') ;
    master(targetId).val('') ;
                    break ;
                }
            }
    }
    
    
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

    
        function InitCoor(dockElement,offsetLeft)
    {
        var dock = $("#" + dockElement);
        var pos=getPosition(dock[0]) ;
        var divPos = document.getElementById('divsinglesubject') ;
        divPos.style.left=pos.x  + offsetLeft ;
        divPos.style.top=pos.y+dock[0].offsetHeight + 2;
    }
    
    
    function hideSingleSubject()
    {
          $("#divsinglesubject").hide() ;
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

function initSelected(id,text)
 {
    var selected = master(id).val() ;
    
     for(var i=0;i<itemSubjectArray.length;i++)    
     {
        if(itemSubjectArray[i]==selected)
        {
            var item = itemsSubject[i] ;
            $(item).attr("checked",true) ;
            $(item).next().addClass("itemselected") ;
            
            var name = $(item).next().text() ;
            master(text).val(name.trimcomma()) ;
            break ;
        }
     }
 }
 
  
function ParseSubjectItem()
 {
      for(var i=0;i<itemsSubject.length;i++)
      {
        var item = itemsSubject[i] ;
        var name = $(item).next().text();
        var pos = name.indexOf('_') ;
        var left = name.substring(0,pos) ;
        var right = name.substring(pos+1) ;
        itemSubjectArray[i] = left ;
        $(item).next().text(right)
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
 
 
 
function initSelectedold(id)
 {
    var selected = master(id).val() ;
    for(var i=0;i<itemsSubject.length;i++)    
    {
        var item = itemsSubject[i] ;
        var name = $(item).next().text() ;
        
        if(blockSelected(name,selected))
        {
            $(item).attr("checked",true) ;
            $(item).next().addClass("itemselected") ;
        }  
   }
 }
 
 
function onitemclick(ctrlName,ctrlId)
  {
  targetName = ctrlName ;
  targetId = ctrlId ;
  
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
      
    var i ;
    for( i=0;i<itemsSubject.length;i++)
    {
        if(itemsSubject[i] != element)
        {
            $(itemsSubject[i]).attr("checked",false) ;
             $(itemsSubject[i]).next().removeClass("itemselected") ;
        }
    }
    
    var name ;    
    var id;
    name = '' ;
    id = '' ;
    
    for( i=0;i<itemsSubject.length;i++)
    {
        var item = itemsSubject[i] ;
        var checked = $(item).prop("checked") ;
        var text = $(item).next().text() ;
        
        if(true == checked)
        {
            name = text ;
            id = itemSubjectArray[i] ;
        }       
    }
    
    $('#'+ctrlName).val(name.trimcomma()) ;
    $('#' + ctrlId).val(id.trimcomma());

    hideSingleSubject();
  }