const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const photoPreview = document.querySelector('.img-upload__preview img');
const fileChooser = document.querySelector('.img-upload__input');
const effectsPreviews = Array.from(document.querySelectorAll('.effects__preview'));

const uploadFiles = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const fileUrl = URL.createObjectURL(file);
    photoPreview.src = fileUrl;

    effectsPreviews.forEach((element) => {
      element.style.backgroundImage = `url("${fileUrl}")`;
    });
  }
};

export { uploadFiles };
