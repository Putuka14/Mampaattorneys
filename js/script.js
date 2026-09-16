
const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');

if (menu) {
  menu.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
  });
});


// WhatsApp Contact Form
const form = document.querySelector('#contactForm');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    // Mampa Attorneys WhatsApp number
    const whatsappNumber = '27695849718';

    const whatsappMessage ='27695849718';
      `Hello Mampa Attorneys,%0A%0A` +
      `I would like to make an enquiry.%0A%0A` +
      `*Name:* ${encodeURIComponent(name)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Email:* ${encodeURIComponent(email)}%0A` +
      `*Enquiry:* ${encodeURIComponent(message)}`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');

    form.reset();
  });
}


// Current year
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}
