import axios from 'axios';

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

// The function of creating a query
export const getRequest = async (url = '/exercises', params = {}) => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

getRequest();

// The function of creating a post
export const postRequest = async (url = '', object = {}) => {
  try {
    if (url === '' || object === '') return;
    const response = await axios.post(url, object);
    return response;
  } catch (error) {
    throw error;
  }
};

postRequest();

// !Sample import of postRequest and its use
//
// import { postRequest } from './api-energy-flow';
//
// postRequest('/subscription', { email: 'test@gmail.com' }).then(data => {
//   console.log(data);
// });

// The function of creating a patch
export const patchRequest = async (url = '', object = {}) => {
  try {
    if (url === '' || object === '') return;
    const response = await axios.patch(url, object);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

patchRequest();
