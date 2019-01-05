
var leftPaddingCol = 1;
var topPaddingRow = 1;

var scheduleArrayMorning = new Array();
var scheduleArrayAfternoon = new Array();
var scheduleArrayNight = new Array();

function initClick() 
{
    var table = document.getElementById("scheduleTable");
    for(var i=0;i<24;i++)
    {
        for (var j = 0; j < 7; j++) 
        {
            table.rows[i + topPaddingRow].cells[j + topPaddingRow].onclick = function () {
                clickSchedule(this);
            };

            $(table.rows[i + topPaddingRow].cells[j + topPaddingRow]).css("text-align", "center");
            $(table.rows[i + topPaddingRow].cells[j + topPaddingRow]).css("cursor", "pointer");
        }
    }
}


function clickSchedule(td) {

    var rowIndex = $(td).parent().parent().find("tr").index($(td).parent());
    var colIndex = $(td).parent().find("td").index($(td));

    if(false == $(td).hasClass("idle"))
    {
       $(td).addClass("idle") ;
    }
    else
    {
       $(td).removeClass("idle") ;
    }

   checkRow(rowIndex - topPaddingRow);
   checkCol(colIndex - leftPaddingCol);

}


function checkRow(rowIndex) {
    var table = document.getElementById("scheduleTable");
    var allChecked = true ;
    for (var j = 0; j < 7; j++) {
        if (false == $(table.rows[rowIndex+topPaddingRow].cells[j + leftPaddingCol]).hasClass("idle")) 
        {
            allChecked = false;
            break;
        }
    }
    var checkTd = $(table.rows[rowIndex+topPaddingRow].cells[0]);
    if (allChecked) {        
        checkTd.children('input').prop("checked",true);
    }
    else {
        checkTd.children('input').prop("checked", false);
    }
}


function checkCol(colIndex) {
    var table = document.getElementById("scheduleTable");
    var allChecked = true;
    for (var i = 0; i < 24; i++) {
        var tr = $(table.rows[i + topPaddingRow]);
        if(tr.hasClass("hide"))
        {
            continue ;
        }
        var td = $(table.rows[i+topPaddingRow].cells[colIndex+leftPaddingCol]) ;
        if (false == td.hasClass("idle")) 
        {
            allChecked = false;
            break;
        }
    }
    var checkTd = $(table.rows[0].cells[colIndex+leftPaddingCol]);
    if (allChecked) {
        checkTd.children('input').prop("checked", true);
    }
    else {
        checkTd.children('input').prop("checked", false);
    }
}

function onCancel() {
    hideWindow('schedule');
}
function onOk() {
    var table = document.getElementById("scheduleTable");

    var retMorning = "";
    var retAfternoon = "";
    var retNight = "";

    
    var i;
    var rowMax = 8;
    var colMax = 7;
    var colMaxIndex = colMax + 1;    
    
    var valueString = "";
    var startRow = 0;
    var stepRow = 8;
    startRow = topPaddingRow;
    for (i = 0 ; i < stepRow; i++) {
        for (var j = 0; j < colMax; j++) {
            if ($(table.rows[i + startRow].cells[j + leftPaddingCol]).hasClass("idle")) 
            {                
                valueString = ",1;";
            }
            else 
            {
                valueString = ",0;";
            }
            retMorning += String(i*colMax + j) + valueString;
        }
    }

    startRow = topPaddingRow + stepRow;
    for (i = 0; i <  stepRow; i++) {
        for (var j = 0; j < colMax; j++) {
            if ($(table.rows[i + startRow].cells[j + leftPaddingCol]).hasClass("idle")) {
                valueString = ",1;";
            }
            else {
                valueString = ",0;";
            }
            retAfternoon += String(i * colMax + j) + valueString;
        }
    }

    startRow = topPaddingRow + stepRow+stepRow;
    for (i = 0; i <  stepRow; i++) {
        for (var j = 0; j < colMax; j++) {
            if ($(table.rows[i + startRow].cells[j + leftPaddingCol]).hasClass("idle")) {
                valueString = ",1;";
            }
            else {
                valueString = ",0;";
            }
            retNight += String(i * colMax + j) + valueString;
        }
    }

    var v = { 'morning': retMorning, 'afternoon': retAfternoon, 'night': retNight };
    var callbackfunname = "callbacksetSchedule(v)";
    eval(callbackfunname)

    hideWindow('schedule');
}


function initSchedule() {    

    var table = document.getElementById("scheduleTable");
    var morning = $('#TextBoxTempScheduleMorning').val();    
    var afternoon = $('#TextBoxTempScheduleAfternoon').val();
    var night = $('#TextBoxTempScheduleNight').val();

    buildArrayMorning(morning);
    buildArrayAfternoon(afternoon);
    buildArrayNight(night);

    var i;
    var j;    
    var stepRow = 8 ;
    var colMax = 7;
    var maxRow = 8 ;
    
    var startRow ;
    startRow = topPaddingRow ;
    for (i = 0 ; i < maxRow ; i++) 
    {
        for(j=0;j<colMax;j++)
        {
            if (ifIdleMorning(i, j))
            {
                $(table.rows[i+startRow].cells[j+leftPaddingCol]).addClass("idle") ;
            }
        }
    }


    startRow = topPaddingRow+stepRow ;
    for (i = 0 ; i < maxRow ; i++) 
    {
        for(j=0;j<colMax;j++)
        {
            if (ifIdleAfternoon(i, j))
            {
                $(table.rows[i+startRow].cells[j+leftPaddingCol]).addClass("idle") ;
            }
        }
    }

   startRow = topPaddingRow+stepRow+stepRow ;
    for (i = 0 ; i < maxRow ; i++) 
    {
        for(j=0;j<colMax;j++)
        {
            if (ifIdleNight(i, j))
            {
                $(table.rows[i + startRow].cells[j + leftPaddingCol]).addClass("idle");
            }
        }
    }

    checkAllRows();
    checkAllCols();
    initSelectHourHeader() ;
}

function checkAllRowsCols() {
    checkAllRows();
    checkAllCols();
}

function initSelectHourHeader() {
    var table = document.getElementById("scheduleTable");
    var i;
    for(i=0;i<24;i++)
    {
         var td = $(table.rows[i + topPaddingRow].cells[0]) ;
         var check = td.children("input");
         check.attr("colindex", i);
         check.bind("change", { index: i },tempSelectHour);         
    }

}

function tempSelectHour(event)
{
    selectHour(event.data.index) ;
}

 function checkAllRows() {
     for (i = 0; i < 24; i++) {
         checkRow(i);
     }
 }

 function checkAllCols()
 {
  for (j = 0; j < 7; j++) {
        checkCol(j);
    }
 }

 function buildArrayMorning(list)
 {
    var arrSpan = list.split(';') ;
    for(var i=0;i<arrSpan.length;i++) 
    {
        var keyValue = arrSpan[i].split(',') ;
        scheduleArrayMorning[keyValue[0]] = keyValue[1] ;
    }
}

function buildArrayAfternoon(list) {
    var arrSpan = list.split(';');
    for (var i = 0; i < arrSpan.length; i++) {
        var keyValue = arrSpan[i].split(',');
        scheduleArrayAfternoon[keyValue[0]] = keyValue[1];
    }
}

function buildArrayNight(list) {
    var arrSpan = list.split(';');
    for (var i = 0; i < arrSpan.length; i++) {
        var keyValue = arrSpan[i].split(',');
        scheduleArrayNight[keyValue[0]] = keyValue[1];
    }
}

 
 function ifIdleMorning(i,j)
 {
    var index ;
    index = i*7 + j;
    return 1==scheduleArrayMorning[index]?true : false ;
}

function ifIdleAfternoon(i, j) {
    var index ;
    index = i*7 + j;
    return 1==scheduleArrayAfternoon[index]?true : false ;
    }

function ifIdleNight(i, j) {
    var index ;
    index = i*7 + j;
    return 1==scheduleArrayNight[index]?true : false ;
}


function selectWeekday(weekday) 
{
    var i;
    var startRow;
    startRow = topPaddingRow;
    var col = weekday + leftPaddingCol;
    var table = document.getElementById("scheduleTable");

    var checkTd = $(table.rows[0].cells[weekday+leftPaddingCol]);
    var checked = checkTd.children('input').prop("checked");
    for (i = 0; i < 24; i++) {
        if (checked) {
            $(table.rows[i + startRow].cells[col]).addClass("idle");
        }
        else {
            $(table.rows[i + startRow].cells[col]).removeClass("idle");
        }
    }

    checkAllRows();
}

function selectHour(hour) {
    var j;
    var table = document.getElementById("scheduleTable");
    var checkTd = $(table.rows[hour+topPaddingRow].cells[0]);
    var checked = checkTd.children('input').prop("checked");

    for (j = 0; j < 7; j++) 
    {
        if (checked)
        {
            $(table.rows[hour + topPaddingRow].cells[j+leftPaddingCol]).addClass("idle");
        }
        else
        {
            $(table.rows[hour + topPaddingRow].cells[j+leftPaddingCol]).removeClass("idle");
        }
    }

    checkAllCols();
}

function checkAll(enable) {
    var i;
    var j;
    var startRow;
    startRow = topPaddingRow;
    var table = document.getElementById("scheduleTable");

    //header
    for (j = 0; j < 7; j++) {
        checkWeekdayHeader(j, enable);
    }

    for (i = 0; i < 24; i++) {
        checkHourHeader(i, enable);
    }
    //body
    for (i = 0; i < 24; i++) 
    {
        for (j = 0; j < 7; j++) {
            if (1 == enable) {
                $(table.rows[i + startRow].cells[j + leftPaddingCol]).addClass("idle");
            }
            else {
                $(table.rows[i + startRow].cells[j + leftPaddingCol]).removeClass("idle");
            }
        }
    }


}


function checkWeekend() {
    checkAll(false);

    checkWeekdayHeader(5,true);
    selectWeekday(5);

    checkWeekdayHeader(6,true);
    selectWeekday(6);
}

function checkWeekendAndWorkdayNight() {
    checkAll(false);

    checkWeekdayHeader(5, true);
    selectWeekday(5);

    checkWeekdayHeader(6, true);
    selectWeekday(6);

    var table = document.getElementById("scheduleTable");
    for(var i=19;i<24;i++)
    {
        for (var j = 0; j < 7; j++) {
            $(table.rows[i + topPaddingRow].cells[j + leftPaddingCol]).addClass("idle");
        }
    }

    checkAllRowsCols();
}


function checkAllNight() {
    checkAll(false);

    var table = document.getElementById("scheduleTable");
    for (var i = 19; i < 24; i++) {
        for (var j = 0; j < 7; j++) {
            $(table.rows[i + topPaddingRow].cells[j + leftPaddingCol]).addClass("idle");
        }
    }

    checkAllRowsCols();
}


function checkWeekdayHeader(weekday,enable) {
    var table = document.getElementById("scheduleTable");
    var checkTd = $(table.rows[0].cells[weekday + leftPaddingCol]);
    checkTd.children('input').prop("checked",enable);    
}

function checkHourHeader(hour, enable) {
    var table = document.getElementById("scheduleTable");
    var checkTd = $(table.rows[hour+topPaddingRow].cells[0]);
    checkTd.children('input').prop("checked", enable);
}

function checkWorkday() {
    checkAll(false);

    checkWeekdayHeader(0,true);
    selectWeekday(0);

    checkWeekdayHeader(1,true);
    selectWeekday(1);

    checkWeekdayHeader(2,true);
    selectWeekday(2);

    checkWeekdayHeader(3,true);
    selectWeekday(3);

    checkWeekdayHeader(4,true);
    selectWeekday(4);
}

function resetTimespan() 
{
    document.formTimespan.reset();
}