import {isEscapeKey} from './util.js';
import {resetEffects} from './foto-effects.js';
import {resetScale} from './foto-scale.js';


const form = document.querySelector('#upload-select-image');
const formUploadFile = form.querySelector('#upload-file');
const formOverlay = form.querySelector('.img-upload__overlay');
const closeButton = formOverlay.querySelector('#upload-cancel');

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
};

const oncloseButtonClick = () => {
  closeModal();
};

const openModal = () => {
  formOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  closeButton.addEventListener('click', oncloseButtonClick);
  document.addEventListener('keydown', onDocumentEscKeydown);
};

function closeModal() {
  formOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formUploadFile.value = '';
  resetEffects();
  resetScale();

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

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    form.submit();
  }
};

const setFotoListeners = () => {
  formUploadFile.addEventListener('change', onFormUploadFileChange);
  form.addEventListener('submit', onFormSubmit);
};

export {setFotoListeners};
