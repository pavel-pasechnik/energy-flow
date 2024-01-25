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
    return response.data.message;
  } catch (error) {
    if (error.response === undefined) return;
    console.error(error.response.data.message);
  }
};

postRequest();
