const picturesSection = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictures = (pictures) => {
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    picturesFragment.appendChild(pictureElement);
  });

  picturesSection.appendChild(picturesFragment);
};

export { renderPictures };
