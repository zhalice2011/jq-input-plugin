

function check()
 {
   convert('') ;
    
    var object;
    
    objectUserName1 = document.getElementById('ctl00$P$TextBoxUserName');
    //check email 
    if (objectUserName1.value == "") {
        alert("对不起，请填写您的注册用户名！");
        return false;
    }

    if (objectUserName1.value.length < 2) 
    {
        alert("对不起，注册用户名至少包含两个字符！");
        return false;
    }


    //check password
    var objectPassword1 = document.getElementById('ctl00$P$TextBoxPassword');
    if (objectPassword1.value == "") {
        alert("对不起，请您输入密码！");
        return false;
    }

    if (objectPassword1.value.length < 4) {
        alert("对不起，密码至少包含四个字符！");
        return false;
    }
    
    
    //check password2
    objectPassword2 = document.getElementById('ctl00$P$TextBoxPassword2');
    if (objectPassword2.value == "") {
        alert("对不起，请再输入一遍您上面输入的密码，并确保两次输入一致！");
        return false;
    }

    //user name must identical
    if (objectPassword1.value != objectPassword2.value) {
        alert("对不起，请确保您两次输入的密码一致！");
        return false;
    }

    //\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*
    //check email validation
    objectEmail = document.getElementById('ctl00$P$TextBoxEmail');
    var regmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
    if (false == regmail.test(objectEmail.value)) {
        alert("对不起，您的邮件地址格式不正确！");
        return false;
    }

}
