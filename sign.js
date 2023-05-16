const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

var users =[{
    username : 'abirzen' ,
    password : '123456789'},
{   username : 'loubnatan' ,
    password : '987654321'}
]

function add(){
    var userfirst=document.getElementById('first').value;
    const chars = userfirst.split('');
    console.log(chars[2]);
    var username=document.getElementById('name').value;
    const char = username.split('');
    console.log(char[2]);
    const concatuser = chars.concat(char);
    console.log(concat);
    var password = document.getElementById('password').value;
    
    var user ={};
    user.username = concatuser;
    user.password =password;
    users.push(user);
    console.log(users);
}

function showpass(){
    var passvalue  = document.getElementById('password');
    if(passvalue.type=='text'){
        passvalue.type='password';
    }else if(passvalue.type=='password'){
        passvalue.type='text';
    }
} 
 /*function signup(){
    var userfirst=document.getElementById('first').value;
    var username=document.getElementById('name').value;
    var useremail=document.getElementById('email').value;
    var userpass=document.getElementById('password').value;
    if(userfirst==""){
        document.getElementById('s1').innerHTML ="first name must be filled out "; return false
    }else if(userfirst){

    }else if(username==""){
        document.getElementById('s2').innerHTML ="name must be filled out"; return false
    }else if(useremail==""){
        document.getElementById('s3').innerHTML ="email must be filled out"; return false
    }
 }*/


 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const password2 = document.getElementById('password2');
 
 form.addEventListener('submit', e => {
     e.preventDefault();
 
     validateInputs();
 });
 
 const setError = (element, message) => {
     const inputControl = element.parentElement;
     const errorDisplay = inputControl.querySelector('.error');
 
     errorDisplay.innerText = message;
     inputControl.classList.add('error');
     inputControl.classList.remove('success')
 }
 
 const setSuccess = element => {
     const inputControl = element.parentElement;
     const errorDisplay = inputControl.querySelector('.error');
 
     errorDisplay.innerText = '';
     inputControl.classList.add('success');
     inputControl.classList.remove('error');
 };
 
 const isValidEmail = email => {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
 }
 
 const validateInputs = () => {
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();
     const password2Value = password2.value.trim();
 
     if(usernameValue === '') {
         setError(username, 'Username is required');
     } else {
         setSuccess(username);
     }
 
     if(emailValue === '') {
         setError(email, 'Email is required');
     } else if (!isValidEmail(emailValue)) {
         setError(email, 'Provide a valid email address');
     } else {
         setSuccess(email);
     }
 
     if(passwordValue === '') {
         setError(password, 'Password is required');
     } else if (passwordValue.length < 8 ) {
         setError(password, 'Password must be at least 8 character.')
     } else {
         setSuccess(password);
     }
 
     if(password2Value === '') {
         setError(password2, 'Please confirm your password');
     } else if (password2Value !== passwordValue) {
         setError(password2, "Passwords doesn't match");
     } else {
         setSuccess(password2);
     }
 
 };
 