    var itemArray=new Array();
    var itemsSubject;
    var maxsubjects=0;//0表示无限制 

    function hideSubjectDiv() {
          $("#divsubject").hide() ;
    }


    function initSubjects() {
        itemsSubject = $("#divsubject input[type='checkbox']");
        $('#divsubject').attr("autocloseonclickitem", 1);
        for (var i = 0; i < itemsSubject.length; i++) {
            $(itemsSubject[i]).click(function () { onSubjectItemClick(); });
        }

        parseSubjectItems();


    }



    function Show(id)
     {
         var div =   $("#" + id) ;
         div.show() ;
     }

  
function parseSubjectItems()
 {
      for(var i=0;i<itemsSubject.length;i++)
      {
        var item = itemsSubject[i] ;
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

 function onSubjectOk() {
     var names;
     var ids;
     names = '';
     ids = '';
     for (var i = 0; i < itemsSubject.length; i++) {
         var item = itemsSubject[i];
         var checked = $(item).prop("checked");
         var name = $(item).next().text();

         if (true == checked) {
             
             names += name + ',';
             ids += itemArray[i] + ',';
         }
     }

     //alert(names);
     //alert(ids);
     ids = ids.trimcomma();
     names = names.trimcomma()

     var v = { 'subjectid': ids, 'subjectname': names };
     var callbackfunname = "subjectcallbackfun(v)";
     eval(callbackfunname);


 }


 function initSelected(id) {

     var selected = id;
     for (var i = 0; i < itemsSubject.length; i++) {
         var item = itemsSubject[i];
         var name = $(item).next().text();
         var subjectId = itemArray[i];
         if (blockSelectedBySubjectId(subjectId, selected)) {
             $(item).prop("checked", true);
             $(item).next().addClass("itemselected");
         }
     }
 }

function initSelected0(id) {

    var selected = master(id).val() ;
    for(var i=0;i<itemsSubject.length;i++)    
    {
        var item = itemsSubject[i] ;
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
     for (var i = 0; i < itemsSubject.length; i++)
      {
         var item = itemsSubject[i];
         var checked = $(item).prop("checked");
         if (true == checked) {
             count++;
         }
     }
     return count;
 }

    
function onSubjectItemClick() {
    var evt=getEvent();
    var element=evt.srcElement || evt.target
    if (0 != maxsubjects) {
        var count = 0 ;
        count = getselectedcount();
        if (count > maxsubjects) 
        {
            var warning = "您选择的科目已经超过" + maxsubjects;
            showPrompt($(element).attr("id"), null, "<img src=/images/warn.png style=display:inline;>" + warning, 1500);    
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
    for(var i=0;i<itemsSubject.length;i++)
    {
        var item = itemsSubject[i] ;
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
    //master(ctrlName).val(names.trimcomma()) ;
    //master(ctrlId).val(ids.trimcomma());
  
  }