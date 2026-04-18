  // PROJECT SLIDER
  const slider = document.getElementById('projectSlider')
  const slides = Array.from(document.querySelectorAll('.slider'))
  const prevBtn = document.getElementById('prevProject');
  const nextBtn = document.getElementById('nextProject');
  const dotsDiv = document.getElementById('projectDots');
  let currentIdx = 0;
  const total = slides.length;


  function updateSliderPosition() {
    const width = slides[0]?.clientWidth || 0;
    slider.style.transform = `translateX(-${currentIdx * width}px)`
    updateDotsActive();
  }
  function updateDotsActive() {
    document.querySelectorAll('.dot').forEach((dot, i) =>{
      if(i === currentIdx) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }
  function createDots() {
    dotsDiv.innerHTML = '';
    for(let i=0; i<total; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if(i === currentIdx) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIdx = i;
        updateSliderPosition();
      });
      dotsDiv.appendChild(dot);
    }
  }
  nextBtn.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % total;
    updateSliderPosition();
  });
  prevBtn.addEventListener('click', () => {
    currentIdx = (currentIdx - 1 + total) % total;
    updateSliderPosition();
  });
  window.addEventListener('resize', () => updateSliderPosition())
  createDots();
  updateSliderPosition();


  // ACCORDION
  document.querySelectorAll('.accordion-item').forEach(item=>{
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });


  // FEEDBACK with star ratinglet ratingSelected = 0;
const starsPersonal = document.querySelectorAll('#starRatingpersonal i');
starsPersonal.forEach(star => {
star.addEventListener('click', function() {
ratingSelected = parseInt(this.getAttribute('data-value'));
starsPersonal.forEach((s, idx) => {
if(idx < ratingSelected) {
s.classList.remove('far');
s.classList.add('fas');
} else {
s.classList.remove('fas');
s.classList.add('far');
}
});
});
});
const feedbackForm = document.getElementById('feedbackFormpersonal');
const fbStatus = document.getElementById('fbStatus');
feedbackForm.addEventListener('submit', (e) => {
e.preventDefault();
const name = document.getElementById('fbName').value.trim();
const msg = document.getElementById('fbMsg').value.trim();
if(!name || !msg) {
fbStatus.innerText = 'Please fill name and feedback.';
fbStatus.style.color = '#dc2626';
return;
}
fbStatus.innerHTML = `Thanks ${name}! 
Your ${ratingSelected>0?ratingSelected +'&':''}feedback mean a lot .`;
fbStatus.style.color = '#166534';
feedbackForm.reset();
ratingSelected = 0;
starsPersonal.forEach(s => { s.classList.remove('fas');s.classList.add('far');});
});
  // Lead Freebie
const freebieForm = document.getElementById('leadFreebie');
const freebieMsg = document.getElementById('freebieMsg');
freebieForm.addEventListener('submit', (e) => {
e.preventDefault();
const name = document.getElementById('freeName').valu.trim();
const email = document.getElementById('freeEmail').value.trim();
if(!name || !email || !email.includes('@')) {
freebieMsg.innerText = 'Valid name & email required
freebieMsg.style.color = '#dc2626';
return;
}
freebieMsg.innerHTML = '✨ Guide sent! Check your inboxe(demo).welcome!';
freebieMsg.style.color = '#2563eb';
freebieForm.reset();
});


  // Direct Contact
const contactForm = document.getElementById('directContactform');
const contactStatus = document.getElementById('contactStatus');
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
const cName = document.getElementById('contactName').value.trim();
const cEmail = document.getElementById('contactEmail').value.trim();
if(!cName || !cEmail) {
contactStatus.innerText = 'Please fill name and email.';
return;
}
contactStatus.innerHTML = '💬 Message received! I’ll  reply within 24h.';
contactStatus.style.color = '#166534';
contactForm.reset();
});
  // Smooth anchor
document.querySelectorAll('.nav-links a, .btn[href="#contact"]').forEach(link=>{
link.addEventListener('click', function(e) {
const hash = this.getAttribute('href');
if(hash && hash !== '#') {
e.preventDefault();
const target = document.querySelector(hash);
if(target) target.scrollIntoView({ behavior: 'smooth'});
}
});
});