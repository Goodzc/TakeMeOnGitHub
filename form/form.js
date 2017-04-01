/**
 * Created by ASUS on 2017/3/28.
 */
var form = document.getElementById("formContainer");
form.onsubmit=function () {
    var pwdEle=
        document.getElementById("password");
    var confirmPwd=
        document.querySelector("#confirmPwd");
    var mobileNumber=
        document.querySelector("#mobileNumber");
    var password=pwdEle.value;
    var conPwd=confirmPwd.value;
    console.log(password);
    console.log(conPwd);
    if(password != conPwd){
        alert("验证密码错误!");
        return false;
    }
    function isMobileNumber(num){
        return /^1[34578]\d{9}$/.test(num);
    }
    var flag=isMobileNumber(mobileNumber.value);
    if(!flag){
        alert("手机号码不正确");
        return false;
    }
};
