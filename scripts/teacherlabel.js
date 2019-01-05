var labels;
 
function initSelectedLabel()
 {
    for(var i=0;i<labels.length;i++)    
    {
        var input = labels[i] ;
        var name = $(input).next().text() ;
        if(true== $(input).prop("checked"))
        {
            $(input).next().addClass("itemselected") ;
        }
   }
 }
 
    
function onLabelClick()
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

  }