import { showAlert } from './util.js';

const GETTING_DATA_ERROR = 'Ошибка загрузки данных с сервера';
const SENDING_DATA_ERROR = 'Ошибка отправки данных на сервер';

const API_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert(GETTING_DATA_ERROR);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(SENDING_DATA_ERROR);
      }
    })
    .catch(() => {
      onFail(SENDING_DATA_ERROR);
    });
};

export { getData, sendData };
