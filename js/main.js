import { renderPictures } from './picture.js';
import { setPhotoListeners } from './form.js';
import { setScaleButtonsListeners } from'./foto-scale.js';
import { setImageEffectsListeners } from './foto-effects.js';
import { getData } from './api.js';


getData(renderPictures);
setPhotoListeners();
setScaleButtonsListeners();
setImageEffectsListeners();

