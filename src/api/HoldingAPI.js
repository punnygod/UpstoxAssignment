import {API_URL} from './rootUrl';

export const getHoldings = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
