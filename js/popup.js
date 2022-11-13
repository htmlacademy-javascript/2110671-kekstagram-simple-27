import { isEscapeKey } from './util.js';

const successPopupTemplate = document.querySelector('#success').content.querySelector('.success');
const errorPopupTemplate = document.querySelector('#error').content.querySelector('.error');

const renderPopup = (node) => {
  document.body.appendChild(node);
  const button = node.querySelector('button');

  const closePopup = () => {
    node.remove();
    document.removeEventListener('keydown', onDocumentEscKeydown);
  };

  const onButtonClick = () => closePopup();

  const onOverlayClick = (evt) => {
    if (evt.target !== node) {
      return;
    }
    closePopup();
  };

  function onDocumentEscKeydown (evt) {
    if (isEscapeKey(evt)) {
      closePopup();
    }
  }

  button.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onDocumentEscKeydown);
  node.addEventListener('click', onOverlayClick);
};

const openSuccessPopup = () => {
  const successPopup = successPopupTemplate.cloneNode(true);
  renderPopup(successPopup);
};

const openErrorPopup = () => {
  const errorPopup = errorPopupTemplate.cloneNode(true);
  renderPopup(errorPopup);
};

export { openSuccessPopup, openErrorPopup };
