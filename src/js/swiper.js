import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 11,
  modules: [ Navigation, Pagination ],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    769: {
      allowTouchMove: false,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


function openSlides() {
  let btn = document.querySelectorAll('.swiper__button');
  btn.forEach((button) => {
    button.addEventListener('click', () => {
    if (!button.parentElement.classList.contains('swiper-second')) {
      button.classList.toggle('open');
      if (button.classList.contains('open')) {
        button.parentElement.querySelector('.swiper-wrapper').style.maxHeight = '100%';
        button.querySelector('span').textContent = 'Скрыть';
      } else {
        button.parentElement.querySelector('.swiper-wrapper').style.maxHeight = '160px';
        button.querySelector('span').textContent = 'Показать все';
      }
    } else {
      button.classList.toggle('open');
      if (button.classList.contains('open')) {
        button.parentElement.querySelector('.swiper-wrapper').style.maxHeight = '100%';
        button.querySelector('span').textContent = 'Скрыть';
      } else {
        button.parentElement.querySelector('.swiper-wrapper').style.maxHeight = '160px';
        button.querySelector('span').textContent = 'Показать все';
      }
    }

  })
  })
 
}
window.addEventListener('load', () => {
  openSlides();
});

