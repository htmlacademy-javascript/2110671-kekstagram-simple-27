import {renderPictures} from './picture.js';
import {setFotoListeners} from './form.js';
import {setScaleButtonsListeners} from'./foto-scale.js';
import {setImageEffectsListeners} from './foto-effects.js';
import {getData} from './api.js';


getData((data) => renderPictures(data));
setFotoListeners();
setScaleButtonsListeners();
setImageEffectsListeners();

