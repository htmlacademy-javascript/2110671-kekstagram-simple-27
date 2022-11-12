import {isEscapeKey} from './util.js';
import {resetEffects} from './foto-effects.js';
import {resetScale} from './foto-scale.js';
import {sendData} from './api.js';
import {openSuccessPopup, openErrorPopup} from './popup.js';

const form = document.querySelector('#upload-select-image');
const formUploadFile = form.querySelector('#upload-file');
const formOverlay = form.querySelector('.img-upload__overlay');
const closeButton = formOverlay.querySelector('#upload-cancel');
const submitButton = formOverlay.querySelector('#upload-submit');

const onDocumentEscKeydown = (evt) => {
  const errorPopup = document.querySelector('.error');

  if (isEscapeKey(evt)) {
    if (!errorPopup) {
      closeModal();
    }
  }
};

const oncloseButtonClick = () => {
  closeModal();
};

const onOverlayClick = (evt) => {
  if (evt.target.classList.contains('img-upload__overlay')) {
    closeModal();
  }
};

const openModal = () => {
  formOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  closeButton.addEventListener('click', oncloseButtonClick);
  document.addEventListener('keydown', onDocumentEscKeydown);
  document.addEventListener('click', onOverlayClick);
};

function closeModal() {
  formOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formUploadFile.value = '';
  resetEffects();
  resetScale();
  form.reset();
  // document.querySelector('.img-upload__error-text').remove();

  document.removeEventListener('keydown', onDocumentEscKeydown);
  closeButton.removeEventListener('click', oncloseButtonClick);
}

const onFormUploadFileChange = () => {
  openModal();
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text',
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onSuccess = () => {
  unblockSubmitButton();
  form.reset();
  resetEffects();
  resetScale();
  closeModal();
  openSuccessPopup();
};

const onFail = () => {
  openErrorPopup();
  unblockSubmitButton();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    sendData(
      () => {
        onSuccess();
      },
      () => {
        onFail();
      },
      new FormData(evt.target)
    );
  }
};

const setFotoListeners = () => {
  formUploadFile.addEventListener('change', onFormUploadFileChange);
  form.addEventListener('submit', onFormSubmit);
};

export {setFotoListeners};
