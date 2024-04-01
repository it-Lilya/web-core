const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.nav-main_menu button');

function opacityElements() {
  document.querySelector('body').children[0].classList.add('opacity');
  document.querySelector('body').children[1].classList.add('opacity');
  document.querySelector('body').children[2].classList.add('opacity');
}

function opacityNone() {
  document.querySelector('body').children[0].classList.remove('opacity');
  document.querySelector('body').children[1].classList.remove('opacity');
  document.querySelector('body').children[2].classList.remove('opacity');
}

function openModalConnect(el) {
  el.addEventListener('click', () => {
    document.querySelector('.modal-call').classList.remove('modal-call__active');
    document.querySelector('.modal-connection').classList.add('modal-connection__active');
    if (document.body.clientWidth <= 1365) {
      modal.classList.remove('open-window');
    } else {
      modal.classList.add('opacity');
    }
    opacityElements();

    const modalConnect = document.querySelector('.modal-connection');
    document.querySelector('.modal-connection button').addEventListener('click', () => {
      modalConnect.classList.remove('modal-connection__active');
      if (document.body.clientWidth > 1365) {
        modal.classList.remove('opacity');
      }
      opacityNone();
    })
  })
}

function openModalCall(el) {
  el.addEventListener('click', () => {
    document.querySelector('.modal-connection').classList.remove('modal-connection__active');
    document.querySelector('.modal-call').classList.add('modal-call__active');
    if (document.body.clientWidth <= 1365) {
      modal.classList.remove('open-window');
    } else {
      modal.classList.add('opacity');
    }
    opacityElements();

    const modalConnect = document.querySelector('.modal-call');
    document.querySelector('.modal-call button').addEventListener('click', () => {
      modalConnect.classList.remove('modal-call__active');
      if (document.body.clientWidth > 1365) {
        modal.classList.remove('opacity');
      }
      opacityNone();
    })
  })
}

btnOpen.addEventListener('click', (e) => {
  if (!document.querySelector('.modal-connection').classList.contains('modal-connection__active') && !document.querySelector('.modal-call').classList.contains('modal-call__active')) {
    modal.classList.add('open-window');
    opacityElements();

    const btnClose = document.querySelector('.open-window button');
    btnClose.addEventListener('click', () => {
      modal.classList.remove('open-window');
      opacityNone();
    })
  }

});

document.addEventListener('click', (e) => {
  if (document.body.clientWidth > 768 && document.body.clientWidth < 1366) {
    if (!e.target.classList.contains('icon-gamb') && !e.target.classList.contains('button .element')) {
      if (!e.composedPath().includes(modal)) {
        modal.classList.remove('open-window');
        if (!document.querySelector('.modal-connection').classList.contains('modal-connection__active') && !document.querySelector('.modal-call').classList.contains('modal-call__active')) {
          opacityNone();
        }
      }
    }
  }
})

const elementsModal = document.querySelectorAll('.container-services__element');
elementsModal.forEach((el) => {
  el.addEventListener('click', () => {
    elementsModal.forEach((l) => l.classList.remove('container-services__element-active--active'));
    el.classList.add('container-services__element-active--active');
  })
})

let gorizont = document.body.clientWidth;
let vertical = document.body.clientHeight;
window.addEventListener('resize', () => {
  let newGorizont;
  let newVertical;
  if (document.body.clientWidth > 1365) {
    modal.classList.add('open-window');
    newGorizont = document.body.clientWidth;
    newVertical = document.body.clientHeight;
    // opacityNone();
  } else {
    newGorizont = document.body.clientWidth;
    newVertical = document.body.clientHeight;
    if (gorizont !== newGorizont) {
      modal.classList.remove('open-window');
      document.querySelector('.modal-connection').classList.remove('modal-connection__active');
      document.querySelector('.modal-call').classList.remove('modal-call__active');
      opacityNone();
    }
  }
  if (modal.classList.contains('open-window')) {
    openModalConnect(document.querySelector('.modal .basement__container-buttons').children[1]);
    openModalCall(document.querySelector('.modal .basement__container-buttons').children[0])
  }
  if (document.body.clientWidth > 768 && document.body.clientWidth <= 1365) {
    openModalConnect(document.querySelector('.nav-main_additional-info').children[1])
    openModalCall(document.querySelector('.nav-main_additional-info').children[0])
  }
  gorizont = document.body.clientWidth;
  vertical = document.body.clientHeight;
})

if (document.body.clientWidth > 1365) {
  modal.classList.add('open-window');
  openModalConnect(document.querySelector('.modal .basement__container-buttons').children[1]);
  openModalCall(document.querySelector('.modal .basement__container-buttons').children[0])
}
if (document.body.clientWidth > 768 && document.body.clientWidth <= 1365) {
  openModalConnect(document.querySelector('.modal .basement__container-buttons').children[1]);
  openModalConnect(document.querySelector('.nav-main_additional-info').children[1])
  openModalCall(document.querySelector('.modal .basement__container-buttons').children[0]);
  openModalCall(document.querySelector('.nav-main_additional-info').children[0]);
}
if (document.body.clientWidth <= 768) {
  openModalConnect(document.querySelector('.modal .basement__container-buttons').children[1]);
  openModalCall(document.querySelector('.modal .basement__container-buttons').children[1]);
}

