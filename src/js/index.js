import '../js/images';
import '../js/swiper';
import '../js/prices';
import '../js/menu';

const pointsStatus = document.querySelectorAll('.basic_navigation_container__points-status');
pointsStatus.forEach((el) => {
  el.addEventListener('click', () => {
    pointsStatus.forEach((l) => l.classList.remove('basic_navigation_container__points-status--active'));
    el.classList.add('basic_navigation_container__points-status--active');
  })
});

const reading = document.querySelector('.basic_text__link-further');
reading.addEventListener('click', () => {
  reading.classList.toggle('active-reading');
  if (reading.classList.contains('active-reading')) {
    reading.querySelector('a').textContent = 'Скрыть';
    reading.querySelector('img').style.transform = 'rotate(180deg)';
    document.querySelector('.basic_contain').style.maxHeight = '100%';
  } else {
    if (document.body.clientWidth < 768) {
      document.querySelector('.basic_contain').style.maxHeight = '90px';
    }
    if (document.body.clientWidth > 768 && document.body.clientWidth <= 1365) {
      document.querySelector('.basic_contain').style.maxHeight = '160px';
    }
    if (document.body.clientWidth > 1365) {
      document.querySelector('.basic_contain').style.maxHeight = '160px';
    }
    reading.querySelector('a').textContent = 'Читать далее';
    reading.querySelector('img').style.transform = 'rotate(0deg)';
  }
})
