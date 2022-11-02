const SCALE_STEP = 25;
const SCALE_MAX = 100;
const SCALE_MIN = 25;
const DEFAULT_SCALE = 100;

const scale = document.querySelector('.scale');
const scaleButtonMinus = scale.querySelector('.scale__control--smaller');
const scaleButtonPlus = scale.querySelector('.scale__control--bigger');
const scaleInput = scale.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');


const onScaleButtonMinusClick = () => {
  const currentScaleValue = Number(scaleInput.value.replace('%', ''));

  if (currentScaleValue > SCALE_MIN) {
    const newValue = currentScaleValue - SCALE_STEP;
    scaleInput.value = `${newValue}%`;
    image.style.transform = `scale(${newValue / 100})`;
  }
};

const onScaleButtonPlusClick = () => {
  const currentScaleValue = Number(scaleInput.value.replace('%', ''));

  if (currentScaleValue < SCALE_MAX) {
    const newValue = currentScaleValue + SCALE_STEP;
    scaleInput.value = `${newValue}%`;
    image.style.transform = `scale(${newValue / 100})`;
  }
};

const resetScale = () => {
  image.style.transform = `scale(${DEFAULT_SCALE / 100})`;
  scaleInput.value = `${DEFAULT_SCALE}%`;
};

const setScaleButtonsListeners = () => {
  scaleButtonMinus.addEventListener('click', onScaleButtonMinusClick);
  scaleButtonPlus.addEventListener('click', onScaleButtonPlusClick);
};

export {setScaleButtonsListeners, resetScale};
