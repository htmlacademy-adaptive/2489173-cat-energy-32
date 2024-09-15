/* в этот файл добавляет скрипты*/
const navElement = document.querySelector('.main-header__nav');
const buttonElement = document.querySelector('.main-header__toggler');

navElement.classList.add('main-header__nav--closed');

buttonElement.addEventListener('click', () => {
  if (navElement.classList.contains('main-header__nav--closed')) {
    navElement.classList.remove('main-header__nav--closed');
    navElement.classList.add('main-header__nav--opened');
  } else {
    navElement.classList.remove('main-header__nav--opened');
    navElement.classList.add('main-header__nav--closed');
  }
});
