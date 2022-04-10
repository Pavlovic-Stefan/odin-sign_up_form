const password = document.querySelector("#password")
const confirm_password = document.querySelector("#confirm_password")
const match = document.querySelector("#no_match");

password.addEventListener('input', () =>{
    if(check()){
        password.classList.add('valid')
        confirm_password.classList.add('valid')
        password.classList.remove('invalid')
        confirm_password.classList.remove('invalid')
        match.setAttribute('style', 'visibility: hidden');
    } else {
        password.classList.remove('valid')
        confirm_password.classList.remove('valid')
        password.classList.add('invalid')
        confirm_password.classList.add('invalid')
        match.setAttribute('style', 'visibility: visible');
    }

}, false);
confirm_password.addEventListener('input', () =>{
    if(check()){
        password.classList.add('valid')
        confirm_password.classList.add('valid')
        password.classList.remove('invalid')
        confirm_password.classList.remove('invalid')
        match.setAttribute('style', 'visibility: hidden');
    } else {
        password.classList.remove('valid')
        confirm_password.classList.remove('valid')
        password.classList.add('invalid')
        confirm_password.classList.add('invalid')
        match.setAttribute('style', 'visibility: visible');
    }
}, false);
password.addEventListener('click', ()=>{
    password.setAttribute('required', '')
    confirm_password.setAttribute('required', '')
});
confirm_password.addEventListener('click', ()=>{
    password.setAttribute('required', '')
    confirm_password.setAttribute('required', '')
});

function check(){
    return password.value==confirm_password.value;
}
