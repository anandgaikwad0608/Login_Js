let Signupbtn = document.querySelector('.Signupbtn');
let SignInbtn = document.querySelector('.SignInbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text')

SignInbtn.addEventListener('click',()=>{
  namefield.style.maxHeight = '0';
  title.innerHTML = 'Sign In';
  text.innerHTML = 'Lost Password';
  Signupbtn.classList.add('disable');
  SignInbtn.classList.remove('disable');
  underline.style.transform = 'translateX(35px)';
});

Signupbtn.addEventListener('click',()=>{
  namefield.style.maxHeight = '60px';
  title.innerHTML = 'Sign Up';
  text.innerHTML = 'Password Suggestions';
  Signupbtn.classList.remove('disable');
  SignInbtn.classList.add('disable');
  underline.style.transform = 'translateX(0px)';
});