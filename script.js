
const menuButton=document.querySelector('.menu');
const navLinks=document.querySelector('.navlinks');
if(menuButton&&navLinks){menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
// IMPORTANT: Replace this with your real business inbox before publishing.
const CONTACT_EMAIL='pixcoretech@gmail.com';
const form=document.getElementById('contact-form');
if(form){const params=new URLSearchParams(location.search);const requested=params.get('service');if(requested){const select=document.getElementById('service');for(const option of select.options){if(option.text.toLowerCase().includes(requested.toLowerCase())){select.value=option.value;break;}}}
form.addEventListener('submit',event=>{event.preventDefault();if(CONTACT_EMAIL==='YOUR_BUSINESS_EMAIL_HERE'){document.getElementById('form-note').textContent='Before publishing, add your business email address in script.js (CONTACT_EMAIL).';return;}const data=new FormData(form);const subject=encodeURIComponent('PixCoreTech project inquiry — '+(data.get('service')||'General'));const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message')}`);location.href=`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;});}
