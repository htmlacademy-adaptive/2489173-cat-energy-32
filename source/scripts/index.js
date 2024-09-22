const navElement = document.querySelector('.main-header__nav');
const buttonElement = document.querySelector('.main-header__toggler');

navElement.classList.remove('main-header__nav--nojs');
navElement.classList.add('main-header__nav--closed');

buttonElement.addEventListener('click', () => {
  if (navElement.classList.contains('main-header__nav--opened')) {
    navElement.classList.remove('main-header__nav--opened');
    navElement.classList.add('main-header__nav--closed');
  } else {
    navElement.classList.remove('main-header__nav--closed');
    navElement.classList.add('main-header__nav--opened');
  }
});

/* в этот файл добавляет скрипт про интерактивную карту*/
const contactsElement = document.querySelector('.contacts-map-script-wrap');

contactsElement.classList.remove('contacts-map-script-wrap--nojs');
