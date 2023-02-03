let usernameRef =document.getElementById('username')
let passwordRef =document.getElementById('password')
let submitBtn =document.getElementById('submit')
let messageRef =document.getElementById('message-ref')

let isUsernameValid=()=>{
    /*Username should containmore than 3 charecters. Should begin with alphabetic charecter.  can contain numbers */

    const usernameRegex =/^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(usernameRef.value)
}

let isPasswordValid=()=>{
    /* password should be atleat 8 charecters
    should contain atleat 1 number , 1 special symbol, 1 lowercase, 1 uppercase*/
    const passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
    return passwordRegex.test(passwordRef.value)
}
usernameRef.addEventListener("input",()=>{
    if(!isUsernameValid()){
        messageRef.style.visibility="hidden"
        usernameRef.style.cssText="border-color: #fe2e2e; background-color:#ffc2c2"
    }
    else{
        usernameRef.style.cssText="border-color: #34bd34; background-color:#c2ffc2"
    
    }

})
passwordRef.addEventListener("input",()=>{
    if(!isPasswordValid()){
        messageRef.style.visibility="hidden"
        passwordRef.style.cssText="border-color: #fe2e2e; background-color:#ffc2c2"
    
    }
    else{
        passwordRef.style.cssText="border-color: #34bd34; background-color:#c2ffc2"
    
    }
})