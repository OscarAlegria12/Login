const btnSignIn = document.getElementById("sign-in"),
btnSignUp = document.getElementById("sign-up"),
FormRegister = document.querySelector(".register"),
FormLogin = document.querySelector(".login");


btnSignIn.addEventListener("click", e =>{
    FormRegister.classList.add("hide");
    FormLogin.classList.remove("hide");
})

btnSignUp.addEventListener("click", e =>{
    FormLogin.classList.add("hide");
    FormRegister.classList.remove("hide");
})