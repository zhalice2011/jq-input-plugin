function appendToAppender2(self) {
    var parent = document.getElementById('append_parent');
    parent.appendChild(self);
}


//subject
function onClickSingleitem(self) {
    var resultId = $(self).attr("id");
    var resultName = $(self).find("span").text();
    var v = { 'itemId': resultId, 'itemName': resultName };
    var callbackfunname = "callbackSingleSubject(v)";
    eval(callbackfunname);
    hideSubjectDiv();
}


//block
function onClickSingleBlockitem(self) {
    var resultId = $(self).attr("data-id");
    var resultName = $(self).find("span").text();
    var districtId = $(self).attr("districtId");
    var districtName = $(self).attr("districtName");

    var fromMap = $(self).attr("fromMap");
    if ("undefined" == typeof (fromMap))//no href
    {
        fromMap = 0;
    }

    var v = { 'districtId': districtId, 'districtName': districtName, 'itemId': resultId, 'itemName': resultName, 'fromMap': fromMap };
    var callbackfunname = "callbackSingleBlock(v)";
    eval(callbackfunname);
    hideBlockDiv();
}


function onCityIncorrectOk(tip) {

    var cityName = $('#Block1_TextBoxCityName').val();
    if ("" == cityName) {
        alert(tip);
        return;
    }
    var resultId = "0";
    var resultName = cityName;
    var districtId = "0";
    var districtName = "";
    var v = { 'districtId': districtId, 'districtName': districtName, 'itemId': resultId, 'itemName': resultName };
    var callbackfunname = "callbackSingleBlock(v)";
    eval(callbackfunname);
    hideBlockDiv();
}




function onClickSingleDistrictitem(self) {
    var resultId = '0';
    var resultName = '';

    var districtId = $(self).attr("id");
    var districtName = $(self).attr("districtName");

    var v = { 'districtId': districtId, 'districtName': districtName, 'itemId': resultId, 'itemName': resultName };
    var callbackfunname = "callbackSingleBlock(v)";
    eval(callbackfunname);
    hideBlockDiv();
}



function changeDistrictCss(ctrl) {
    var districts = $(".districttitle");
    for (var i = 0; i < districts.length; i++) {
        //alert('2');
        if ($(districts[i]).attr("districtId") != $(ctrl).attr("districtId")) {
            $(districts[i]).removeClass("currDistrict");
        }
        else {
            $(districts[i]).addClass("currDistrict");
        }
    }
}

function changeDistrict(ctrl, districtId, districtName) {
    //alert(districtId);
    var children = $(ctrl).children("span");
    var canSelectDistrict = $(children[0]).attr("canSelectDistrict");
    var hasBlocks = $(children[0]).attr("hasBlocks");
    var can = false;
    if ("1" == canSelectDistrict) {
        can = true;
    }
    else if ("0" == hasBlocks) {
        can = true;
    }
    if (can) {
        onClickSingleDistrictitem(ctrl);
    }
    else {
        changeDistrictCss(ctrl);
        var url;
        url = "/ajax/common?districtId=" + districtId;

        var canSelectDistrictEvenHasBlocks = "1" == $(children[0]).attr("canSelectDistrictEvenHasBlocks");
        if (canSelectDistrictEvenHasBlocks)
        {
            url = url + "&canSelectDistrictEvenHasBlocks=1";
        }

        var loadingHtml = getLoadingHtml();
        var widthOfCurrent = $('#ulblocks').width();
        //$('#ulblocks').width(widthOfCurrent);
        $('#ulblocks').prepend(loadingHtml);
        
        $.post(url,
                function (data) {
                    //$('#ulblocks').width('unset');
                    fillBlocks(data, districtId, districtName);
                }
        );
    }
}

function getLoadingHtml()
{
    var html;
    html = "<div class='loadingInBlock'></div>"
    return html;
}

function fillBlocks(data, districtId, districtName) {
    var json = eval('(' + data + ')');
    //alert(data);
    //return;
    $('#ulblocks').empty();
    for (var i = 0; i < json.List.length; i++) {
        var optionValue = json.List[i].blockId;
        var optionText = json.List[i].blockName;
        var liItem = $("<li onclick='onClickSingleBlockitem(this)'></li>");
        liItem.attr("data-id", optionValue);        
        liItem.css("cursor", "pointer");
        liItem.attr("districtId", districtId);
        liItem.attr("districtName", districtName);
        liItem.html("<a style=padding:8px;><span>" + optionText + "</span></a>");
        //liItem.addClass(optionText);
        $('#ulblocks').append(liItem);

        liItem.hover(function () {
            $(this).addClass('itemHighLight');
        }, function () {
            $(this).removeClass('itemHighLight');
        });

        var queryLink = liItem.children("a")
        queryLink.bind("touchstart", function () {
            $(this).addClass("hover");
        });

        queryLink.bind("touchmove", function () {
            $(this).removeClass("hover");
        });
        queryLink.bind("touchend", function () {
            $(this).removeClass("hover");
        });
        queryLink.bind("touchcancel", function () {
            $(this).removeClass("hover");
        });
    }
}


//city begins
function onClickSingleCityItem(self) {
    var resultId = $(self).attr("id");
    var resultName = $(self).find("span").text();
    var provinceId = $(self).attr("provinceId");
    var provinceName = $(self).attr("provinceName");

    var v = { 'provinceId': provinceId, 'provinceName': provinceName, 'itemId': resultId, 'itemName': resultName };
    var callbackfunname = "callbackSingleCity(v)";
    eval(callbackfunname);

    hideCityDiv();
}

function onClickSingleProvinceItem(self) {
    var resultId = '0';
    var resultName = '';
    var provinceId = $(self).attr("id");
    var provinceName = $(self).attr("provinceName");

    var v = { 'provinceId': provinceId, 'provinceName': provinceName, 'itemId': resultId, 'itemName': resultName };
    var callbackfunname = "callbackSingleCity(v)";
    eval(callbackfunname);

    hideCityDiv();
}

function changeProvinceCss(ctrl) {
    var provinces = $(".provinceTitle");
    for (var i = 0; i < provinces.length; i++) {
        if ($(provinces[i]).attr("id") != $(ctrl).attr("id")) {
            $(provinces[i]).removeClass("currProvince");
        }
        else {
            $(provinces[i]).addClass("currProvince");
        }
    }
}

function changeProvince(ctrl, provinceId, provinceName) {
    var children = $(ctrl).children("span");
    var canSelectProvince = $(ctrl).attr("canSelectProvince");
    var can = false;
    if ("1" == canSelectProvince) {
        can = true;
    }

    changeProvinceCss(ctrl);

    provinceId = provinceId.replace("province", "");

    var url = "/ajax/common?provinceId={0}&InsertNoPreference={1}";
    url = url.format(provinceId, can);
    //alert(url);
    var loadingHtml = getLoadingHtml();

    var widthOfCurrent = $('#ulCities').width();
    //$('#ulCities').width(widthOfCurrent);

    $('#ulCities').prepend(loadingHtml);

    $.post(url,
            function (data) {
                //$('#ulCities').width('unset');
                fillCities(data, provinceId, provinceName);
            }
    );
    
}

function fillCities(data, provinceId, provinceName) {
    var json = eval('(' + data + ')');
    
    //return;
    $('#ulCities').empty();
    for (var i = 0; i < json.List.length; i++) {
        var optionValue = json.List[i].cityId;
        var optionText = json.List[i].cityName;
        var liItem = $("<li onclick='onClickSingleCityItem(this)'></li>");
        liItem.attr("id", optionValue);
        liItem.css("cursor", "pointer");
        liItem.attr("provinceId", provinceId);
        liItem.attr("provinceName", provinceName);
        liItem.html("<a><span>" + optionText + "</span></a>");
        //liItem.addClass(optionText);
        $('#ulCities').append(liItem);

        liItem.hover(function () {
            $(this).addClass('itemHighLight');
        }, function () {
            $(this).removeClass('itemHighLight');
        });

        var queryLink = liItem.children("a")
        queryLink.bind("touchstart", function () {
            $(this).addClass("hover");
        });

        queryLink.bind("touchmove", function () {
            $(this).removeClass("hover");
        });
        queryLink.bind("touchend", function () {
            $(this).removeClass("hover");
        });
        queryLink.bind("touchcancel", function () {
            $(this).removeClass("hover");
        });
    }
}

//city ends


//position
function onClickSinglePositionItem(self) {
    var resultId = $(self).attr("id");
    var resultName = $(self).find("span").text();
    var typeId = $(self).attr("typeId");
    var typeName = $(self).attr("typeName");
    var v = { 'typeId': typeId, 'typeName': typeName, 'itemId': resultId, 'itemName': resultName };
    var callbackfunname = "callbackSinglePosition(v)";
    eval(callbackfunname);

    hideWindow('position');
}

function changePositionTypeCss(ctrl) {
    var districts = $(".positionCategoryTitle");
    for (var i = 0; i < districts.length; i++) {
        if ($(districts[i]).attr("id") != $(ctrl).attr("id")) {
            $(districts[i]).removeClass("currPositionCategory");
        }
        else {
            $(districts[i]).addClass("currPositionCategory");
        }
    }
}

function changePositionType(ctrl, typeId, typeName) {

    var loadingHtml = getLoadingHtml();

    var widthOfCurrent = $('#ulPositions').width();
    //$('#ulPositions').width(widthOfCurrent);

    $('#ulPositions').prepend(loadingHtml);

    changePositionTypeCss(ctrl);
    var positionCollExcluded = $(ctrl).attr("positioncollexcluded");
    $.post("/ajax/common?random="+ Math.random() +  "&positionCategoryId=" + typeId + "&PositionCollExcluded=" + positionCollExcluded,
                function (data) {
                    //$('#ulPositions').width('unset');

                    fillPositions(data, typeId, typeName);
                }
        );
}

function fillPositions(data, typeId, typeName) {
    var json = eval('(' + data + ')');
    $('#ulPositions').empty();
    for (var i = 0; i < json.List.length; i++) {
        var optionValue = json.List[i].positionId;
        var optionText = json.List[i].positionName;
        var liItem = $("<li onclick='onClickSinglePositionItem(this)'></li>");
        liItem.attr("id", optionValue);
        liItem.css("cursor", "pointer");
        liItem.attr("typeId", typeId);
        liItem.attr("typeName", typeName);
        liItem.html("<a style=padding:8px;><span>" + optionText + "</span></a>");
        $('#ulPositions').append(liItem);

        liItem.hover(function () {
            $(this).addClass('itemHighLight');
        }, function () {
            $(this).removeClass('itemHighLight');
        });

        var queryLink = liItem.children("a")
        queryLink.bind("touchstart", function () {
            $(this).addClass("hover");
        });

        queryLink.bind("touchmove", function () {
            $(this).removeClass("hover");
        });
        queryLink.bind("touchend", function () {
            $(this).removeClass("hover");
        });
        queryLink.bind("touchcancel", function () {
            $(this).removeClass("hover");
        });
    }
}


//subject
function onClickSingleSubjectItem(self) {
    var resultId = $(self).attr("data-id");
    var resultName = $(self).find("span").text();
    var subjectCategoryId = $(self).attr("subjectCategoryId");
    var subjectCategoryName = $(self).attr("subjectCategoryName");
    var v = { 'subjectCategoryId': subjectCategoryId, 'subjectCategoryName': subjectCategoryName, 'itemId': resultId, 'itemName': resultName };
    var callbackfunname = "callbackSingleSubject(v)";
    eval(callbackfunname);
    hideSubjectDiv();
}

function changeSujectCategoryTypeCss(ctrl) {
    var districts = $(".subjectCategoryTitle");
    for (var i = 0; i < districts.length; i++) {
        if ($(districts[i]).attr("typeId") != $(ctrl).attr("typeId")) {
            $(districts[i]).removeClass("currSubjectCategory");
        }
        else {
            $(districts[i]).addClass("currSubjectCategory");
        }
    }
}

function changeSubjectCategory(ctrl, typeId, typeName) {
    changeSujectCategoryTypeCss(ctrl);

    var loadingHtml = getLoadingHtml();

    var widthOfCurrent = $('#ulSubjects').width();
    //$('#ulSubjects').width(widthOfCurrent);

    $('#ulSubjects').prepend(loadingHtml);


    $.post("/ajax/common?subjectCategoryId=" + typeId,
                function (data) {
                    //$('#ulSubjects').width('unset');
                    fillSubjects(data, typeId, typeName);
                }
        );
}

function fillSubjects(data, typeId, typeName) {
    var json = eval('(' + data + ')');
    $('#ulSubjects').empty();
    for (var i = 0; i < json.List.length; i++) {
        var optionValue = json.List[i].subjectId;
        var subjectName;
        var urlSubject;
        var optionText;
        subjectName = json.List[i].subjectName;
        urlSubject = json.List[i].urlSubject;

        if ('' != urlSubject)
        {
            optionText = "<img src='{0}' width=16 height=16 class='imageTextAlign'><span class='imageTextAlign'>{1}</span>";
            optionText = optionText.format(urlSubject, subjectName);
        }
        else
        {
            optionText = "<span class='imageTextAlign'>{0}</span>";
            optionText = optionText.format(subjectName);
        }
        
        var liItem = $("<li onclick='onClickSingleSubjectItem(this)' style='padding:8px;'></li>");
        liItem.attr("data-id", optionValue);
        liItem.css("cursor", "pointer");
        liItem.attr("typeId", typeId);
        liItem.attr("typeName", typeName);
        liItem.html(optionText);
        $('#ulSubjects').append(liItem);

        liItem.hover(function () {
            $(this).addClass('itemHighLight');
        }, function () {
            $(this).removeClass('itemHighLight');
        });

        var queryLink = liItem.children("a")
        queryLink.bind("touchstart", function () {
            $(this).addClass("hover");
        });

        queryLink.bind("touchmove", function () {
            $(this).removeClass("hover");
        });
        queryLink.bind("touchend", function () {
            $(this).removeClass("hover");
        });
        queryLink.bind("touchcancel", function () {
            $(this).removeClass("hover");
        });
    }
}

//referrer
function matchReferrer(rawreferrer) 
{
    rawreferrer = rawreferrer.trim();
    $.post("/ajax/referrer",
                { command: 'getreferrer', prawreferrer: rawreferrer },
                function (data) {
                    callbackChooseReferrer(data);
                }
                //,'application/json'
            );
}
//referrer ends
