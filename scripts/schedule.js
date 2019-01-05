 var scheduleArray=new Array();
    
function clickSchedule(td)
{
    if(false == $(td).hasClass("idle"))
    {
        $(td).addClass("idle") ;
    }
    else
    {
           $(td).removeClass("idle") ;
    }
    
    
    var ret = "" ;
    var table = document.getElementById("scheduleTable") ;
    for(var i = 1 ;i<4 ;i++)
    {
        for(var j= 1 ;j<8;j++)
        {
            if($(table.rows[i].cells[j]).hasClass("idle"))
            {
                ret += String(i+(j-1)*3) + ",1;" ;
            }
            else{
            ret += String(i+(j-1)*3) + ",0;" ;
            }
        }
    }
    
    master('TextBoxScheduleList').val(ret) ;
}


function initScheduleNew(id) {
    var list = $('#'+id).val();
    buildArray(list);
    var table = document.getElementById("scheduleTable");
    for (var i = 1; i < 4; i++) {
        for (var j = 1; j < 8; j++) {
            if (ifIdle(i, j)) {
                $(table.rows[i].cells[j]).addClass("idle");
            }
        }
    }
}

function initSchedule(id)
 {
    var list = master(id).val() ;
    buildArray(list) ;
     var table = document.getElementById("scheduleTable") ;
    for(var i = 1 ;i<4 ;i++)
    {
        for(var j= 1 ;j<8;j++)
        {
            if(ifIdle(i,j))
            {
                $(table.rows[i].cells[j]).addClass("idle") ;
            }
        }
    } 
 }
 
 function buildArray(list)
 {
    var arrSpan = list.split(';') ;
    for(var i=0;i<arrSpan.length;i++) 
    {
        var keyValue = arrSpan[i].split(',') ;
        scheduleArray[keyValue[0]] = keyValue[1] ;
    }
    
    
 }
 
 function ifIdle(i,j)
 {
    var index ;
    index = (j-1)*3+i ;
    return 1== scheduleArray[index]?true : false ;
 }