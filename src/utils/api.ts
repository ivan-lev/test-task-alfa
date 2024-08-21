import { BASE_URL, FIELDS, OPTIONS } from '../variables/apiVariables';

const getBooks = () => {
  return fetch(`${BASE_URL}&fields=${FIELDS}`, OPTIONS).then((response: any) =>
    checkResponseStatus(response)
  );
};

const checkResponseStatus = (res: any) => {
  if (!res.ok) {
    console.log(`Ошибка: ${res.status}`);
    return Promise.reject(res);
  }
  return res.json();
};

export const api = { getBooks };
