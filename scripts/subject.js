    var itemArray=new Array();
    var items;
    var maxsubjects=0;//0表示无限制 

    function hideSubjectDiv() {
          $("#divsubject").hide() ;
    }
    
    
    function InitCoor(dockElement,offsetLeft) {
        var dock =  master(dockElement)
        var pos=getPosition(dock[0]) ;
        var divPos = document.getElementById('divsubject') ;
        divPos.style.left=pos.x  + offsetLeft ;
        divPos.style.top=pos.y+dock[0].offsetHeight + 2;
    }


    function showSubjectList(ctrl) {
        showMenu({ 'ctrlid': ctrl.id, 'menuid': 'divsubject', 'pos': '00', 'ctrlclass': 'a', 'duration': 2 });
    }


    function Show(id)
     {
         var div =   $("#" + id) ;
         div.show() ;
     }

  
function ParseItem()
 {
      for(var i=0;i<items.length;i++)
      {
        var item = items[i] ;
        var name = $(item).next().text() ;
        var pos = name.indexOf('_') ;
        var left = name.substring(0,pos) ;
        var right = name.substring(pos+1) ;
        itemArray[i] = left ;
        $(item).next().text(right)
      }
 }

 function blockSelectedBySubjectId(name, selected)
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
 
 
 
function initSelected(id)
 {
    var selected = master(id).val() ;
    for(var i=0;i<items.length;i++)    
    {
        var item = items[i] ;
        var name = $(item).next().text();
        var subjectId = itemArray[i];
        if (blockSelectedBySubjectId(subjectId, selected))
        {
            $(item).attr("checked",true) ;
            $(item).next().addClass("itemselected") ;
        }  
   }
 }

 function getselectedcount() {
     var count = 0;
     for (var i = 0; i < items.length; i++)
      {
         var item = items[i];
         var checked = $(item).prop("checked");
         if (true == checked) {
             count++;
         }
     }
     return count;
 }

    
function onitemclick(ctrlName,ctrlId) {

    
    var evt=getEvent();
    //alert('dd');
    var element=evt.srcElement || evt.target

    if (0 != maxsubjects) {
        var count = getselectedcount();
        if (count > maxsubjects) {

            var alert = "您选择的科目已经超过" + maxsubjects;

            showPrompt($(element).attr("id"), null, "<img src=/images/warn.png style=display:inline;>"+alert, 1500);    


            $(element).attr("checked", false);

            return;
        }
    }

    if(true == $(element).prop("checked"))
    {
            $(element).next().addClass("itemselected") ;
    }
    else{
           $(element).next().removeClass("itemselected") ;
    }

       var countOfSelectedItem = 0;

    var names ;    
    var ids;
    names = '' ;
    ids = '' ;
    for(var i=0;i<items.length;i++)
    {
        var item = items[i] ;
        var checked = $(item).prop("checked") ;
        var name = $(item).next().text() ;
        
        if(true == checked)
        {
            names += name + ',' ;
            ids += itemArray[i] + ',';

            countOfSelectedItem++;
        }       
    }
    
    //alert(names) ;
    //alert(ids) ;
    //alert(ids.timcomma()) ;
    master(ctrlName).val(names.trimcomma()) ;
    master(ctrlId).val(ids.trimcomma());



  
  }