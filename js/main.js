// SEARCH CONTROL
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.removeAttribute('placeholder');
});

// SCROLL CONTROL
const badgeEl = document.querySelector('header .badges');
const topEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.8, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(topEl, 0.3, {
      x: 0
    });
  } else {
    gsap.to(badgeEl, 0.8, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(topEl, 0.3, {
      x: 100
    });
  }
}, 300));

topEl.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// FADE CONTROL
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.7
  });
});

// SWIPER CONTROL
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  centeredSlides: true,
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});

new Swiper('.awards .swiper', {
  spaceBetween: 30,
  slidesPerView: 5,
  loop: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});

// PROMOTION TOGGLE
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

// RANDOM Func
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// FLOATING ICONS
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

// SPY SCROLL
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  const sceneOptions = {
    triggerElement: spyEl,
    triggerHook: 0.8
  };

  new ScrollMagic
    .Scene(sceneOptions)
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// FOOTER YEAR
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();