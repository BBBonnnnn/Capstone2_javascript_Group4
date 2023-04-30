// -------------------validation----------------------------

//----------------validation-email-------------------------
function checkEmail(value,id,placeholder) {
    var regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regexEmail.test(value)) {
       document.querySelector(`#${id}`).innerHTML = ''
       return true;
    }else {
       document.querySelector(`#${id}`).className = "block text-danger";
       document.querySelector(`#${id}`).innerHTML = `${placeholder} không đúng format`
       return false;
    }
   }

//    ---------------validation-phone-------------------
function checkPhone(value,id,placeholder){
    var regexPhoneNumber = /(84[3|5|7|8|9])+([0-9]{8})\b/g;
    if(regexPhoneNumber.test(value)) {
        document.querySelector(`#${id}`).innerHTML = ''
        return true;
     }else {
        document.querySelector(`#${id}`).className = "block text-danger";
        document.querySelector(`#${id}`).innerHTML = `${placeholder} không hợp lệ`
        return false;
     }
}
//    ---------------validation-username-------------------
function checkUsername(value,id,placeholder){
    var regexUserName = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    if(regexUserName.test(value)) {
        document.querySelector(`#${id}`).innerHTML = ''
        return true;
     }else {
        document.querySelector(`#${id}`).className = "block text-danger";
        document.querySelector(`#${id}`).innerHTML = `${placeholder} không hợp lệ`
        return false;
     }
}
//    ---------------validation-PassWord-------------------
function checkPassWord(value,id,placeholder){
    var regexPassWord =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(regexPassWord.test(value)) {
        document.querySelector(`#${id}`).innerHTML = ''
        return true;
     }else {
        document.querySelector(`#${id}`).className = "block text-danger";
        document.querySelector(`#${id}`).innerHTML = `${placeholder} không hợp lệ`
        return false;
     }
}
//    ---------------validation-PassWord-Confirm-------------------
function checkPassWordConFirm(value,valueConFirm,id,placeholder){
    if(value === valueConFirm) {
        document.querySelector(`#${id}`).innerHTML = ''
        return true;
     }else {
        document.querySelector(`#${id}`).className = "block text-danger";
        document.querySelector(`#${id}`).innerHTML = `${placeholder} không trùng khớp`
        return false;
     }
}
//    ---------------validation-gender-------------------
function checkGender(value,id,placeholder){
    if(value ===null) {
        document.querySelector(`#${id}`).className = "block text-danger";
        document.querySelector(`#${id}`).innerHTML = `Vui Lòng chọn ${placeholder} `
        return false;       
     }else {
        document.querySelector(`#${id}`).innerHTML = ''
        return true;
     }
}