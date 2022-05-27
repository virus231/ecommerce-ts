import axios from 'axios';

const { API_URL } = process.env;

axios.defaults.baseURL = API_URL;

export const api = Object.freeze({
  async fetchProducts() {
    const response = await axios.get(
      `https://628d3b393df57e983ede2ee2.mockapi.io/api/v1/products`
    );
    console.log(response);
    return response.data;
  },
});
