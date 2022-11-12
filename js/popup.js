import {isEscapeKey} from './util.js';

const successPopupTemplate = document.querySelector('#success').content.querySelector('.success');
const successPopup = successPopupTemplate.cloneNode(true);
const errorPopupTemplate = document.querySelector('#error').content.querySelector('.error');
const errorPopup = errorPopupTemplate.cloneNode(true);

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeSuccessPopup();
    closeErrorPopup();
  }
};

const onOverlayClick = (evt) => {
  if (evt.target.classList.contains('success')) {
    closeSuccessPopup();
  }
  if (evt.target.classList.contains('error')) {
    closeErrorPopup();
  }
};

const openSuccessPopup = () => {
  document.body.appendChild(successPopup);
  const closeButton = successPopup.querySelector('.success__button');

  closeButton.addEventListener('click', closeSuccessPopup);
  document.addEventListener('keydown', onDocumentEscKeydown);
  document.addEventListener('click', onOverlayClick);
};

const openErrorPopup = () => {
  document.body.appendChild(errorPopup);
  const closeButton = errorPopup.querySelector('.error__button');

  closeButton.addEventListener('click', closeErrorPopup);
  document.addEventListener('keydown', onDocumentEscKeydown);
  document.addEventListener('click', onOverlayClick);
};

function closeSuccessPopup() {
  successPopup.remove();

  document.removeEventListener('keydown', onDocumentEscKeydown);
  document.removeEventListener('click', onOverlayClick);
}

function closeErrorPopup() {
  errorPopup.remove();

  document.removeEventListener('keydown', onDocumentEscKeydown);
  document.removeEventListener('click', onOverlayClick);
}

export {openSuccessPopup, openErrorPopup};
