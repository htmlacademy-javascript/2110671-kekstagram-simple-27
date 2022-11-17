import { renderPictures } from './picture.js';
import { setPhotoListeners } from './form.js';
import { setScaleButtonsListeners } from'./photo-scale.js';
import { setImageEffectsListeners } from './photo-effects.js';
import { getData } from './api.js';


getData(renderPictures);
setPhotoListeners();
setScaleButtonsListeners();
setImageEffectsListeners();

