import axios from 'axios';

const apiGateway = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com',
  timeout: 5000,
});

export default apiGateway;

