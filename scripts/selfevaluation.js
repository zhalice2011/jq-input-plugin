    function HideSelfevaluation()
    {
     $("#selfevaluation").hide() ;
    }
    
    
        function InitSelfEvalutionCoor(dockElement,offsetLeft)
    {
        var dock =  master(dockElement)
        var pos=getPosition(dock[0]) ;
        var divPos = document.getElementById('selfevaluation') ;
        divPos.style.left=pos.x  + offsetLeft ;
        divPos.style.top=pos.y+dock[0].offsetHeight + 2;
    }

    function ShowSelfevaluation()
     {
        InitSelfEvalutionCoor('TextBoxSelfevaluation',-100) ;
        
         var divBlock =   $("#selfevaluation") ;
         if(divBlock.is(":hidden"))
         {
         document.getElementById('selfevaluation').style.top = "100px" ;
         //alert(divBlock.style) ;
         divBlock.top = "100px";
         divBlock.left = "10px";
            divBlock.show() ;
         }
         else{
           divBlock.hide() ;
           //alert(GetId()) ;
         }
     }

function selectSelfevaluation()
  {
    var evt=getEvent();
    var element=evt.srcElement || evt.target
    
    var result = $(element).parent().text() ;
    var oldText = master('TextBoxSelfevaluation').text() ;
    master('TextBoxSelfevaluation').val(result.trimcomma() + '\n\r' + oldText) ;
    HideSelfevaluation() ;
  }
  
  
