
const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
if(menu){
  menu.addEventListener('click',()=>links.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>links.classList.remove('open'));
});
const form = document.querySelector('#contactForm');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const status = document.querySelector('#formStatus');
    status.textContent = 'Thank you. Your enquiry has been captured ';
    status.style.display='block';
    form.reset();
  });
}
const year = document.querySelector('#year');
if(year) year.textContent = new Date().getFullYear();
