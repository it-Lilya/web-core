const array = [
  {'description': 'Диагностика', 'price': 'Бесплатно', 'time': '30 мин'},
  {'description': 'Замена дисплея', 'price': '1000', 'time': '30-120 мин'},
  {'description': 'Замена полифонического динамика', 'price': '1000', 'time': '30-120 мин'},
  {'description': 'Тестирование с выдачей технического заключения', 'price': '1000', 'time': '30-120 мин'},
  {'description': 'Замена программного обеспечения', 'price': '1000', 'time': '30-120 мин'},
]
const childWrapper = document.querySelector('.slider-third .swiper-wrapper').children;
function createElement(description, price, time, index) {
  const newElement = document.querySelector('#text-template').content.cloneNode(true);
  newElement.querySelector('.swiper-slide__decription').textContent = description;
  if (price !== 'Бесплатно') {
    newElement.querySelector('.swiper-slide__price').textContent = `${price} \u20bd`;
  } else {
    newElement.querySelector('.swiper-slide__price').textContent = price;
  }
  newElement.querySelector('.swiper-slide__time').textContent = time;
  const currentSlide = document.querySelector(`.slider-third .swiper-slide:nth-child(${index + 1})`);
  currentSlide.append(newElement);
}

array.forEach((el) => {
  createElement(el.description, el.price, el.time, array.indexOf(el));
})

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 768) {
    if (!document.querySelector('.swiper-slide__table-head')) {
      let newElem = document.createElement('div');
      newElem.classList.add('swiper-slide__table-head');
      newElem.innerHTML = `<p class="swiper-slide__names">Ремонтные услуги</p>
      <p class="swiper-slide__names">Цена</p>
      <p class="swiper-slide__names">Срок</p>`;
      document.querySelector('.slider-third').prepend(newElem);
    }
  } else {
    if (document.querySelector('.swiper-slide__table-head')) {
      document.querySelector('.swiper-slide__table-head').remove();
    }
  }
})
if (document.body.clientWidth > 768) {
  if (!document.querySelector('.swiper-slide__table-head')) {
    let newElem = document.createElement('div');
    newElem.classList.add('swiper-slide__table-head');
    newElem.innerHTML = `  <p class="swiper-slide__names">Ремонтные услуги</p>
    <p class="swiper-slide__names">Цена</p>
    <p class="swiper-slide__names">Срок</p>`;
    document.querySelector('.slider-third').prepend(newElem);
  }
} 