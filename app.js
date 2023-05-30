const mobileNav = document.querySelector('.mobile-nav');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.remove-nav');
const navUl = document.querySelectorAll('.navbar-links ul li');
console.log(navUl);
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const product = document.querySelector('.product');
const locations = document.querySelector('.locations');
const contacts = document.querySelector('.contacts');
const arr = [];
arr.push(about, services, product, locations, contacts);
console.log(arr);
const mobileLinks = document.querySelectorAll('.mobile-nav-links ul li');
console.log(mobileLinks);
const hiddenElements = document.querySelectorAll('.hidden');
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  console.log(formData);
  const url = 'https://formspree.io/f/mjvddgzv';
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  });

  if (response.ok) {
    alert("Thanks for Contacting me! I'll get back to you soon");
    contactForm.reset();
  } else {
    const errorMessage = await response.text();
    alert(`Something went wrong ${errorMessage}`);
  }
});

navUl.forEach((Ul, idx) => {
  Ul.addEventListener('click', () => {
    console.log('hllo');
    arr.forEach((div, idx2) => {
      if (idx == idx2) {
        div.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      }
    });
  });
});

mobileLinks.forEach((ul, idxx) => {
  ul.addEventListener('click', () => {
    console.log('hi');
    arr.forEach((nav, idx3) => {
      if (idxx == idx3) {
        nav.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      }
    });
  });
});

hamburgerMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('show');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

hiddenElements.forEach((item) => {
  observer.observe(item);
});

const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.left-arrow-png');
const rightArrow = document.querySelector('.right-arrow-png');

const sectionHead = document.querySelectorAll('.section-head.services');

const run = () => {
  idx++;
  changeImage();
};

let idx = 0;
const changeImage = () => {
  if (idx > sectionHead.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = sectionHead.length - 1;
  }

  carousel.style.transform = `translateX(${-idx * 100}vw)`;
};

let interval = setInterval(run, 4000);

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 4000);
};

rightArrow.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

leftArrow.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});

window.addEventListener('DOMContentLoaded', () => {
  let lazyBgElement = document.querySelector('.section-head');
  let lazyElement = document.querySelectorAll('.section-head.services');
  console.log(lazyBgElement);
  lazyBgElement.classList.remove('lazy-loaded');

  lazyElement.forEach((element) => {
    console.log(element);
    element.classList.remove('lazy-loaded');
  });
});
