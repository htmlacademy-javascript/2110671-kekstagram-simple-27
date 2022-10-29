// функция взята с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// eslint-disable-next-line no-unused-vars
const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomIntInclusive, isEscapeKey};
