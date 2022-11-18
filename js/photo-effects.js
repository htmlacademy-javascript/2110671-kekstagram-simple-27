const Effect = {
  none: {
    min: 0,
    max: 100,
    step: 1,
  },
  chrome:   {
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia:   {
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin:   {
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos:   {
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat:   {
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

const DEFAULT_EFFECT = Effect.none;

const effectList = document.querySelector('.effects__list');
const image = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementWrapper = document.querySelector('.img-upload__effect-level');
const effectLevelInput = document.querySelector('.effect-level__value');

let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElementWrapper.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step,
  });

  if (isDefault()) {
    sliderElementWrapper.classList.add('hidden');
  }
};

const onEffectsListClick = (evt) => {
  const currentTarget = evt.target;

  if (currentTarget.classList.contains('effects__radio')) {
    chosenEffect = Effect[currentTarget.value];
    updateSlider();
  }
};

const onSliderUpdate = () => {
  image.style.filter = 'none';
  image.removeAttribute('class');
  effectLevelInput.value = '';

  if (isDefault()) {
    return;
  }

  const sliderValue = sliderElement.noUiSlider.get();
  image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  image.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevelInput.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

const setImageEffectsListeners = () => {
  effectList.addEventListener('click', onEffectsListClick);
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  updateSlider();
};

export { setImageEffectsListeners, resetEffects };
