    var positionArray=new Array();
    var positionItems;
    var maxPositions=10;//0表示无限制 

    function hidePositionDiv() {
          $("#divposition").hide() ;
    }
    
    

    function showPositionList() {
        //var divBlock = $("#divposition");
        var menuId = "divposition";
        showMenu({ 'menuid': menuId, 'pos': '00', 'duration': 2, 'fade': 1, 'cover': 0, 'layer': 'noexist' });

    }

    function Show(id)
     {
         var div =   $("#" + id) ;
         div.show() ;
     }

  
function parsePositionItem()
 {
      for(var i=0;i<positionItems.length;i++)
      {
        var item = positionItems[i] ;
        var name = $(item).get(0).nextSibling.innerHTML;
        var pos = name.indexOf('_') ;
        var left = name.substring(0,pos) ;
        var right = name.substring(pos+1) ;
        positionArray[i] = left;
        $(item).get(0).nextSibling.innerHTML = right;
      }
 }


 function positionSelected(name, selected)
 {
     var ret;
     var parent;
     var child;
     ret = false;

     parent = "," + selected + ","
     child = "," + name + ","
     if (parent.indexOf(child) >= 0)
     {
         return true;
     }
     else
     {
         return false;
     }
 }


function positionSelected(name,selected)
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
 
 
 
function initPositionSelected(id)
 {
    var selected = $('#'+id).val() ;
    for(var i=0;i<positionItems.length;i++)    
    {
        var item = positionItems[i] ;
        var name = $(item).siblings().text();

        var subjectId = positionArray[i];
        if (blockSelectedBySubjectId(subjectId, selected))
        {
            //$(item).attr("checked",true) ;
            //$(item).next().addClass("itemselected") ;

            $(item).get(0).checked = true;
            $(item).siblings().addClass("itemselected");
        }  
   }
 }

 function ifChecked(ctrl)
 {
     var checked = ctrl.checked;
     return checked;
 }

 function getselectedpositioncount() {
     var count = 0;
     for (var i = 0; i < positionItems.length; i++)
      {
         var item = positionItems[i];
         var checked = ifChecked($(item).get(0));
         if (true == checked) {
             count++;
         }
     }
     return count;
 }


 function getEvent()
 {
     if (document.all) return window.event;
     func = getEvent.caller;
     while (func != null)
     {
         var arg0 = func.arguments[0];
         if (arg0)
         {
             if ((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof (arg0) == "object" && arg0.preventDefault && arg0.stopPropagation))
             {
                 return arg0;
             }
         }
         func = func.caller;
     }
     return null;
 }

 function onPositionItemClick(ctrlName, ctrlId)
 {
    var evt=getEvent();
    //alert('dd');
    var element=evt.srcElement || evt.target

    if (0 != maxPositions) {
        var count = getselectedpositioncount();
        if (count > maxPositions) {

            var warningTip = "您选择的科目已经超过" + maxPositions + "。不能再选";
            alert(warningTip);            
            $(element).get(0).checked = false;
            return;
        }
    }

    if(ifChecked($(element).get(0)))
    {
        $(element).siblings().addClass("itemselected");
    }
    else{
        $(element).siblings().removeClass("itemselected");
    }

    var countOfSelectedItem = 0;

    var names ;    
    var ids;
    names = '' ;
    ids = '' ;
    for(var i=0;i<positionItems.length;i++)
    {
        var item = positionItems[i] ;
        var checked = $(item).get(0).checked;
        var name = $(item).get(0).nextSibling.innerHTML;
        if(true == checked)
        {
            names += name + ',' ;
            ids += positionArray[i] + ',';
            countOfSelectedItem++;
        }       
    }
    $('#'+ctrlName).val(names) ;
    $('#'+ctrlId).val(ids);
}