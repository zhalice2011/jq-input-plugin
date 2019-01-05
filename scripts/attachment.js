function initUpload() {
        var globalTip = "<%=MyGetGlobalResourceObject("UploadPhoto")%>" ;
        var globalTipSelectFile = "<%=MyGetGlobalResourceObject("PleaseSelectFile")%>" ;
        var globalTipFailedToUpload = "<%=MyGetGlobalResourceObject("FailedToUpload")%>" ;
        var globalTipPleaseUploadAgain = "<%=MyGetGlobalResourceObject("PleaseUploadAgain")%>" ;
        var globalTipGreaterThan = "<%=MyGetGlobalResourceObject("GreaterThan")%>" ;
        
        
        $('#file_upload').Huploadify({
            'uploader': '/http/teacher?command=uploadphoto&FromUploadifyPlugin=1&code='+ teacherCode + '&random=' + Math.random(),
            'fileTypeExts': fileTypeExts,
            'fileSizeLimit': fileSizeLimit,
            'showUploadedSize':true,
            'buttonText': globalTip,
            'width': 300,
            'auto':true,
            'fileDesc': globalTipSelectFile,
            'rollover': true,
            'fileObjName': 'Filedata',
            'formData': { 'ASPSESSID': $('#HiddenSessionId').val(), 'AUTHID': $('#HiddenAuthId').val() },
            'onUploadError': function (file, errorCode, errorMsg, errorString) {
                alert(file.name + ' ' + globalTipFailedToUpload + ' ' + errorString);
            },
            'overrideEvents': ['onSelectError', 'onDialogClose'],
            'onSelectError': function (file, errorCode, errorMsg) {
                if (errorCode == -110) {
                    alert(file.name + globalTipGreaterThan + $('#file_upload').uploadify("settings", 'fileSizeLimit') + globalTipPleaseUploadAgain);
                    return false;
                }
            },
            'onUploadSuccess': function (file, data, response) {
                if ("" != data) {
                    var json = eval('(' + data + ')');
                    
                    if (0 == json.resultId) {
                        reloadPhoto() ;
                        alert(json.resultDesc);
                    }
                    else {
                        alert(json.resultDesc);
                    }
                }
                else {
                }
            }
        });

    }