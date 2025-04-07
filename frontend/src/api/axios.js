import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://4789-2401-4900-65c1-61ef-ed72-c3f1-9639-3bab.ngrok-free.app',  
  headers: {
    'Content-Type': 'application/json',
  }, // only if using cookies/auth
});

export default instance;

