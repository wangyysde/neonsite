function submitOnlineMessage() {
    var customerNameObj = document.getElementById("customerName");
    if(customerNameObj.value.length < 2 ){
        alert(noNameError);
        customerNameObj.focus();
        return;
    }

    var contactwayObj = document.getElementById("contactway");
    if(contactwayObj.value.length < 2){
        alert(noContactWay);
        contactwayObj.focus();
        return;
    }

    var onlinemessagecontentObj = document.getElementById("onlinemessagecontent");
    if(onlinemessagecontentObj.value.length < 5){
        alert(noOnLineMessageContent);
        onlinemessagecontentObj.focus()
        return;
    }

    var vcodeObj = document.getElementById("vcode");
    if(vcode.value.length != 4){
        alert(noVcode);
        vcodeObj.focus()
        return;
    }

    var formObj = document.getElementById("formneononlinemessage");
    var formactionurl = formObj.getAttribute("action") + "?PHPSESSID=" + id;
    var actionType = formObj.getAttribute("method");
    var respValue = formAjax("formneononlinemessage",formactionurl,actionType);

    alert(respValue["msg"]);
    if(respValue["error"]){
        formObj.focus();
        return;
    }
    window.location.replace("/" + langcode);
    return;
}

function submitAgent() {
    var customerNameObj = document.getElementById("customerName");
    if(customerNameObj.value.length < 2 ){
        alert(noNameError);
        customerNameObj.focus();
        return;
    }

    var mobileObj = document.getElementById("mobile");
    var emailObj = document.getElementById("email");
    if(mobileObj.value.length < 2 && emailObj.value.length < 2){
        alert(noContactWay);
        mobileObj.focus();
        return;
    }

    var onlinemessagecontentObj = document.getElementById("questions");
    if(onlinemessagecontentObj.value.length < 5){
        alert(noOnLineMessageContent);
        onlinemessagecontentObj.focus()
        return;
    }

    var vcodeObj = document.getElementById("vcode");
    if(vcode.value.length != 4){
        alert(noVcode);
        vcodeObj.focus()
        return;
    }

    var formObj = document.getElementById("formagent");
    var formactionurl = formObj.getAttribute("action") + "?PHPSESSID=" + id;
    var actionType = formObj.getAttribute("method");
    var respValue = formAjax("formagent",formactionurl,actionType);

    alert(respValue["msg"]);
    if(respValue["error"]){
        formObj.focus();
        return;
    }
    window.location.replace("/" + langcode);
    return;
}

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

function callbackFunction(data) {
    console.log(data);
}

// 将经过base64编码的utf-8字符串解码为普通字符串，支持中文
function formDatab64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
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
