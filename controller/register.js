let register = {
    email: "",
  password: "",
  name: "",
  gender: null,
  phone: "",
//   passwordConfirm:"",
};

document.querySelector('#btnSubmit').onclick = function(event) {
    event.preventDefault();
    register.email = document.querySelector('#email').value;
    register.password =document.querySelector('#password').value;
    // register.passwordConfirm = document.querySelector('#password-confirm').value;
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
        &checkUsername(register.name,'validation-username','User Name')
        // &checkPassWordConFirm(register.password,register.passwordConfirm,'validation-pw-confirm','Password confirm')
        &checkGender(register.gender,'validation-gender','Gender')
if (!valid) {
    return;
}

//  document.querySelector('#register-form').reset();
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        Method:'POST',
        data:register,
    })

    promise.then(function (result){
        console.log('result', result.data.content)
    })
    promise.catch(function (err) {
        console.log(err)
    })

}


