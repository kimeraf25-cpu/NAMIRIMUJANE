
const menuButton=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',nav.classList.contains('open'));});}
document.querySelectorAll('nav a').forEach(link=>{if(link.href===location.href)link.classList.add('active');});
const contactForm=document.querySelector('#contact-form');
if(contactForm){contactForm.addEventListener('submit',e=>{e.preventDefault();alert('Thank you for contacting Green Valley Farm. Your message has been prepared. Please connect this form to an email service to receive submissions.');contactForm.reset();});}
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
