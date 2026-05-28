// =========================================
// PREMIUM PORTFOLIO JAVASCRIPT 2026
// PINK FUTURISTIC VERSION
// =========================================

// =========================================
// LOADER
// =========================================

window.addEventListener('load', () => {

  const loader =
  document.querySelector('.loader');

  document.body.style.overflow = 'hidden';

  setTimeout(() => {

    loader.style.opacity = '0';

    loader.style.visibility = 'hidden';

    loader.style.transition =
    '1s ease';

    document.body.style.overflow =
    'visible';

  }, 1800);

});

// =========================================
// PAGE FADE IN
// =========================================

document.body.style.opacity = 0;

window.addEventListener('load', ()=>{

  document.body.style.transition =
  '1s ease';

  document.body.style.opacity = 1;

});

// =========================================
// TYPING EFFECT
// =========================================

const typingTexts = [

  'UI/UX Designer',
  'Frontend Developer',
  'Creative Technologist',
  'Creative Designer',
  'Multimedia Creative',
  'Branding Designer'

];

let textIndex = 0;
let charIndex = 0;

const typingElement =
document.querySelector('.typing-text');

function typeText(){

  if(charIndex <
  typingTexts[textIndex].length){

    typingElement.textContent +=
    typingTexts[textIndex]
    .charAt(charIndex);

    charIndex++;

    setTimeout(typeText, 90);

  }else{

    setTimeout(eraseText, 1500);

  }

}

function eraseText(){

  if(charIndex > 0){

    typingElement.textContent =
    typingTexts[textIndex]
    .substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseText, 50);

  }else{

    textIndex++;

    if(textIndex >= typingTexts.length){

      textIndex = 0;

    }

    setTimeout(typeText, 300);

  }

}

document.addEventListener(
'DOMContentLoaded',
()=>{

  if(typingTexts.length){

    setTimeout(typeText, 1200);

  }

});

// =========================================
// CUSTOM CURSOR
// =========================================

const cursor =
document.querySelector(
'.custom-cursor'
);

const mouseTrail =
document.querySelector(
'.mouse-trail'
);

document.addEventListener(
'mousemove',
(e)=>{

  cursor.style.left =
  e.clientX + 'px';

  cursor.style.top =
  e.clientY + 'px';

  mouseTrail.style.left =
  e.clientX + 'px';

  mouseTrail.style.top =
  e.clientY + 'px';

});

// =========================================
// CURSOR HOVER EFFECT
// =========================================

const hoverElements =
document.querySelectorAll(
'a, button, .project-card'
);

hoverElements.forEach((element)=>{

  element.addEventListener(
  'mouseenter',
  ()=>{

    cursor.style.transform =
    'translate(-50%, -50%) scale(2)';

    cursor.style.opacity = '0.6';

  });

  element.addEventListener(
  'mouseleave',
  ()=>{

    cursor.style.transform =
    'translate(-50%, -50%) scale(1)';

    cursor.style.opacity = '1';

  });

});

// =========================================
// REVEAL ANIMATION
// =========================================

const revealElements =
document.querySelectorAll('.reveal');

function revealOnScroll(){

  revealElements.forEach((element)=>{

    const windowHeight =
    window.innerHeight;

    const elementTop =
    element.getBoundingClientRect().top;

    const revealPoint = 120;

    if(
      elementTop <
      windowHeight - revealPoint
    ){

      element.classList.add('active');

    }

  });

}

window.addEventListener(
'scroll',
revealOnScroll
);

revealOnScroll();

// =========================================
// COUNTER
// =========================================

const counters =
document.querySelectorAll('.counter');

const speed = 120;

counters.forEach(counter=>{

  const updateCount = ()=>{

    const target =
    +counter.getAttribute(
      'data-target'
    );

    const count =
    +counter.innerText;

    const increment =
    target / speed;

    if(count < target){

      counter.innerText =
      Math.ceil(count + increment);

      setTimeout(updateCount, 20);

    }else{

      counter.innerText = target;

    }

  };

  updateCount();

});

// =========================================
// SCROLL PROGRESS BAR
// =========================================

const progressBar =
document.querySelector('.progress-bar');

window.addEventListener(
'scroll',
()=>{

  const totalHeight =
  document.body.scrollHeight -
  window.innerHeight;

  const progress =
  (window.pageYOffset /
  totalHeight) * 100;

  progressBar.style.width =
  progress + '%';

});

// =========================================
// NAVBAR EFFECT
// =========================================

const navbar =
document.querySelector('header');

window.addEventListener(
'scroll',
()=>{

  if(window.scrollY > 50){

    navbar.style.background =
    'rgba(7,8,22,0.75)';

    navbar.style.backdropFilter =
    'blur(24px)';

    navbar.style.borderBottom =
    '1px solid rgba(255,255,255,0.08)';

  }else{

    navbar.style.background =
    'rgba(7,8,22,0.45)';

  }

});

// =========================================
// ACTIVE NAV LINK
// =========================================

const sections =
document.querySelectorAll('section');

const navLinks =
document.querySelectorAll(
'.nav-links a'
);

window.addEventListener(
'scroll',
()=>{

  let current = '';

  sections.forEach(section=>{

    const sectionTop =
    section.offsetTop;

    if(
      pageYOffset >=
      sectionTop - 200
    ){

      current =
      section.getAttribute('id');

    }

  });

  navLinks.forEach(link=>{

    link.classList.remove(
      'active'
    );

    if(
      link.getAttribute('href')
      === `#${current}`
    ){

      link.classList.add(
        'active'
      );

    }

  });

});

// =========================================
// SMOOTH SCROLL
// =========================================

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{

  anchor.addEventListener(
  'click',
  function(e){

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute('href')
    );

    if(target){

      window.scrollTo({

        top:
        target.offsetTop - 80,

        behavior:'smooth'

      });

    }

  });

});

// =========================================
// HERO IMAGE PARALLAX
// =========================================

const heroImage =
document.querySelector(
'.hero-image'
);

document.addEventListener(
'mousemove',
(e)=>{

  const x =
  (window.innerWidth / 2
  - e.pageX) / 40;

  const y =
  (window.innerHeight / 2
  - e.pageY) / 40;

  heroImage.style.transform =
  `
  translateX(-50%)
  translate(${x}px, ${y}px)
  `;

});

// =========================================
// HERO CARD 3D
// =========================================

const heroBox =
document.querySelector(
'.hero-image-box'
);

heroBox.addEventListener(
'mousemove',
(e)=>{

  const rect =
  heroBox.getBoundingClientRect();

  const x =
  e.clientX - rect.left;

  const y =
  e.clientY - rect.top;

  const rotateY =
  (x - rect.width / 2) / 18;

  const rotateX =
  -(y - rect.height / 2) / 18;

  heroBox.style.transform =
  `
  perspective(1000px)
  rotateY(${rotateY}deg)
  rotateX(${rotateX}deg)
  `;

});

heroBox.addEventListener(
'mouseleave',
()=>{

  heroBox.style.transform =
  `
  perspective(1000px)
  rotateY(0)
  rotateX(0)
  `;

});

// =========================================
// MAGNETIC BUTTON
// =========================================

const magneticButtons =
document.querySelectorAll('.btn');

magneticButtons.forEach(btn=>{

  btn.addEventListener(
  'mousemove',
  (e)=>{

    const rect =
    btn.getBoundingClientRect();

    const x =
    e.clientX -
    rect.left -
    rect.width / 2;

    const y =
    e.clientY -
    rect.top -
    rect.height / 2;

    btn.style.transform =
    `
    translate(
    ${x * 0.15}px,
    ${y * 0.15}px
    )
    `;

  });

  btn.addEventListener(
  'mouseleave',
  ()=>{

    btn.style.transform =
    'translate(0,0)';

  });

});

// =========================================
// PROJECT CARD 3D
// =========================================

const projectCards =
document.querySelectorAll(
'.project-card'
);

projectCards.forEach(card=>{

  card.addEventListener(
  'mousemove',
  (e)=>{

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    card.style.transform =
    `
    perspective(1000px)
    rotateX(${-(y - rect.height / 2) / 25}deg)
    rotateY(${(x - rect.width / 2) / 25}deg)
    scale(1.03)
    `;

  });

  card.addEventListener(
  'mouseleave',
  ()=>{

    card.style.transform =
    `
    perspective(1000px)
    rotateX(0)
    rotateY(0)
    scale(1)
    `;

  });

});

// =========================================
// FLOATING PARTICLES
// =========================================

const body =
document.querySelector('body');

for(let i = 0; i < 30; i++){

  const particle =
  document.createElement('span');

  particle.classList.add(
    'particle'
  );

  particle.style.position =
  'fixed';

  particle.style.width =
  Math.random() * 5 + 2 + 'px';

  particle.style.height =
  particle.style.width;

  particle.style.background =
  'rgba(255,255,255,0.12)';

  particle.style.borderRadius =
  '50%';

  particle.style.left =
  Math.random() * 100 + 'vw';

  particle.style.top =
  Math.random() * 100 + 'vh';

  particle.style.zIndex = '-1';

  particle.style.pointerEvents =
  'none';

  particle.style.animation =
  `
  floating
  ${Math.random() * 10 + 8}s
  infinite ease-in-out
  `;

  body.appendChild(particle);

}

// =========================================
// FLOATING ICONS AUTO MOVE
// =========================================

const floatingIcons =
document.querySelectorAll(
'.floating-icon'
);

floatingIcons.forEach((icon,index)=>{

  setInterval(()=>{

    icon.style.transform =
    `
    translateY(
    ${Math.sin(Date.now()/800 + index)
    * 10}px)
    `;

  },30);

});

// =========================================
// RANDOM GLOW EFFECT
// =========================================

setInterval(()=>{

  document.body.style.boxShadow =
  `
  inset 0 0 120px
  rgba(
  ${Math.random() * 255},
  79,
  216,
  0.04)
  `;

},3000);

// =========================================
// SPOTLIGHT EFFECT
// =========================================

const spotlight =
document.querySelector(
'.spotlight'
);

document.addEventListener(
'mousemove',
(e)=>{

  if(spotlight){

    spotlight.style.left =
    e.clientX + 'px';

    spotlight.style.top =
    e.clientY + 'px';

  }

});

// =========================================
// LIGHT MODE
// =========================================

const themeToggle =
document.getElementById(
'theme-toggle'
);

const themeIcon =
themeToggle.querySelector('i');

// LOAD SAVED THEME

if(localStorage.getItem('theme')
=== 'light'){

  document.body.classList.add(
    'light-mode'
  );

  themeIcon.classList.remove(
    'fa-moon'
  );

  themeIcon.classList.add(
    'fa-sun'
  );

}

// TOGGLE THEME

themeToggle.addEventListener(
'click',
()=>{

  document.body.classList.toggle(
    'light-mode'
  );

  if(
  document.body.classList.contains(
    'light-mode'
  )){

    localStorage.setItem(
      'theme',
      'light'
    );

    themeIcon.classList.remove(
      'fa-moon'
    );

    themeIcon.classList.add(
      'fa-sun'
    );

  }

  else{

    localStorage.setItem(
      'theme',
      'dark'
    );

    themeIcon.classList.remove(
      'fa-sun'
    );

    themeIcon.classList.add(
      'fa-moon'
    );

  }

});

// =========================================
// CONTACT FORM
// =========================================

const contactForm =
document.querySelector(
'.contact-form'
);

if(contactForm){

  contactForm.addEventListener(
  'submit',
  (e)=>{

    e.preventDefault();

    alert(
      '✨ Thank you! Your message has been sent successfully.'
    );

    contactForm.reset();

  });

}

// =========================================
// VIDEO CARD HOVER
// =========================================

const videoCard =
document.querySelector(
'.video-card'
);

if(videoCard){

  videoCard.addEventListener(
  'mouseenter',
  ()=>{

    videoCard.style.transform =
    'translateY(-10px) scale(1.01)';

  });

  videoCard.addEventListener(
  'mouseleave',
  ()=>{

    videoCard.style.transform =
    'translateY(0) scale(1)';

  });

}

// =========================================
// MOBILE MENU
// =========================================

const hamburger =
document.querySelector(
'.hamburger'
);

const navMenu =
document.querySelector(
'.nav-links'
);

if(hamburger){

  hamburger.addEventListener(
  'click',
  ()=>{

    navMenu.classList.toggle(
      'active'
    );

    hamburger.classList.toggle(
      'active'
    );

  });

}

// =========================================
// DISABLE CURSOR ON MOBILE
// =========================================

if(window.innerWidth < 768){

  if(cursor){

    cursor.style.display = 'none';

  }

  if(mouseTrail){

    mouseTrail.style.display = 'none';

  }

}

// =========================================
// PREMIUM CONSOLE MESSAGE
// =========================================

console.log(

'%c✨ Premium Portfolio 2026 ✨',

`
font-size:22px;
font-weight:bold;
color:#ff4fd8;
`

);

console.log(

'%cDesigned with futuristic pink aesthetic.',

`
font-size:14px;
color:#8b5cf6;
`

);
// =========================================
// PROJECT MOCKUP PREMIUM EFFECT
// =========================================

const projectMockups =
document.querySelectorAll(
'.project-mockup'
);

projectMockups.forEach(card=>{

  card.addEventListener(
  'mousemove',
  (e)=>{

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const rotateY =
    (x - rect.width / 2) / 25;

    const rotateX =
    -(y - rect.height / 2) / 25;

    card.style.transform =
    `
    perspective(1200px)
    rotateY(${rotateY}deg)
    rotateX(${rotateX}deg)
    translateY(-8px)
    `;

  });

  card.addEventListener(
  'mouseleave',
  ()=>{

    card.style.transform =
    `
    perspective(1200px)
    rotateY(0)
    rotateX(0)
    translateY(0)
    `;

  });

});
// =========================================
// METEOR EFFECT PREMIUM
// =========================================

const meteorContainer =
document.querySelector(
'.meteor-container'
);

function createMeteor(){

  if(!meteorContainer) return;

  const meteor =
  document.createElement('div');

  meteor.classList.add('meteor');

  meteor.style.left =
  Math.random() * window.innerWidth + 'px';

  meteor.style.top =
  Math.random() * 250 + 'px';

  meteor.style.animationDuration =
  (Math.random() * 2 + 2) + 's';

  meteorContainer.appendChild(meteor);

  setTimeout(()=>{

    meteor.remove();

  },4000);

}

setInterval(createMeteor,1800);

// =========================================
// TWINKLE STARS RANDOM
// =========================================

function createStar(){

  const star =
  document.createElement('span');

  star.classList.add('star');

  star.style.left =
  Math.random() * window.innerWidth + 'px';

  star.style.top =
  Math.random() * window.innerHeight + 'px';

  star.style.animationDuration =
  Math.random() * 3 + 2 + 's';

  document.body.appendChild(star);

  setTimeout(()=>{

    star.remove();

  },5000);

}

setInterval(createStar,600);

// =========================================
// LIGHT MODE NAVBAR FIX
// =========================================

window.addEventListener(
'scroll',
()=>{

  if(window.scrollY > 50){

    if(document.body.classList.contains(
      'light-mode'
    )){

      navbar.style.background =
      'rgba(255,255,255,0.75)';

      navbar.style.borderBottom =
      '1px solid rgba(0,0,0,0.05)';

    }

    else{

      navbar.style.background =
      'rgba(7,8,22,0.75)';

      navbar.style.borderBottom =
      '1px solid rgba(255,255,255,0.08)';
    }

  }

});

// =========================================
// HERO FLOAT SMOOTH
// =========================================

let floatTime = 0;

function animateHero(){

  if(heroBox){

    const floatY =
    Math.sin(floatTime) * 8;

    heroBox.style.transform =
    `
    perspective(1000px)
    translateY(${floatY}px)
    `;
  }

  floatTime += 0.03;

  requestAnimationFrame(
    animateHero
  );
}

animateHero();

// =========================================
// BUTTON GLOW EFFECT
// =========================================

const buttons =
document.querySelectorAll(
'.btn'
);

buttons.forEach(btn=>{

  btn.addEventListener(
  'mouseenter',
  ()=>{

    btn.style.boxShadow =
    `
    0 0 25px
    rgba(255,79,216,0.45)
    `;

  });

  btn.addEventListener(
  'mouseleave',
  ()=>{

    btn.style.boxShadow = 'none';

  });

});