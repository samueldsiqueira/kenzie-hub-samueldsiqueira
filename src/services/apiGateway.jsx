import axios from 'axios';

const apiGateway = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  timeout: 5000,
});

export default apiGateway;