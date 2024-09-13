function formAjax(formID, actionUrl,actionType) {
    var formObj = document.getElementById(formID);
    var data = new FormData(formObj);
    var ajaxRet = {"msg": jsUnknowError, "error": true};
    $.ajax({
        type: actionType,
        crossDomain: true,
        contentType: false,
        cache: false,
        processData: false,
        url: actionUrl,
        data: data,
        async: false,
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            var msg = "";
            if(textStatus == "error"){
                msg = jsServerError;
            }
            if(textStatus == "timeout") {
                msg = jsTimeOut;
            }
            if(textStatus == "parseerror"){
                msg = jsParseError;
            }
            ajaxRet.msg =msg;
            ajaxRet.error = true;
        },
        success: function(result) {
            if (result.errorCode == 0) {
                ajaxRet.msg = jsSuccessful;
                ajaxRet.error = false;
            }

            if (result.errorCode == 1) {
                ajaxRet.msg = jsInvalidVcode;
            }
        }
    });

    return ajaxRet;
}

function generateSessionId() {
    var sessionId = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 30; i++) { // 生成一个长度为30的字符串
        sessionId += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return sessionId;
}
