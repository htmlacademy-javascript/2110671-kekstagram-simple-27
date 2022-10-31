const effectList = document.querySelector('.effects__list');
const image = document.querySelector('.img-upload__preview img');
const effectClass = 'effects__preview--';

const onEffectsListClick = (evt) => {
  const currentTarget = evt.target;

  if (currentTarget.classList.contains('effects__radio')) {
    const effect = currentTarget.value;
    image.removeAttribute('class');

    if (effect !== 'none') {
      image.classList.add(`${effectClass}${effect}`);
    }
  }
};

const setImageEffectsListeners = () => {
  effectList.addEventListener('click', onEffectsListClick);
};

export {setImageEffectsListeners};
