// функция взята с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0 && max <= min && max === min) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(5, 10);


function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('Hello world!', 15);
