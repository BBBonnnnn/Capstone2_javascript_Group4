let register = {
    email: "",
  password: "",
  name: "",
  gender: null,
  phone: "",
  passwordConfirm:"",
};

document.querySelector('#btnSubmit').onclick = function(event) {
    event.preventDefault();
    register.email = document.querySelector('#email').value;
    register.password =document.querySelector('#password').value;
    register.passwordConfirm = document.querySelector('#password-confirm').value;
    register.name = document.querySelector('#username').value;
    let checkbox = document.getElementsByName("gender");
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            register.gender = checkbox[i].value;
        }
    }
    if(register.gender==='true'){
        register.gender = true;
    } else if(register.gender==='false'){
        register.gender = false;
    }
    register.phone = document.querySelector('#phone').value;
       
    
    console.log('register', register);
    console.log(register.gender)

    //----------------- check Validation-------------

valid = true;
var errorMessge = '';

valid = checkEmail(register.email,'validation-email','Email')&checkPhone(register.phone,'validation-phone','Phone')
        &checkUsername(register.name,'validation-username','User Name')&checkPassWord(register.password,'validation-password','Password')
        &checkPassWordConFirm(register.password,register.passwordConfirm,'validation-pw-confirm','Password confirm')
        &checkGender(register.gender,'validation-gender','Gender')
if (!valid) {
    return;
}

 
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method:'POST',
        data:register,
    })

    promise.then(function (result){
        console.log('result', result.data.content)
        document.querySelector('#register-form').reset();
        alert('Đăng ký tài khoản thành công');
    })
    promise.catch(function (err) {
        console.log(err);
        alert('Email đã được sử dụng');
    })

}


