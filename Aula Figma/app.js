const email = document.getElementById('email');
const senha = document.getElementById('senha');
const form = document.getElementById('form');
const messageError = document.getElementById('erro');

form.addEventListener('submit',(Event) => {
let messages = [];
let reagex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}`\[\]|\\:;""<>,.?/#].{10,16}$/;

if(email.ariaValueMax.length)
});