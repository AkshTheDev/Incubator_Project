import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://8d42-36-255-84-98.ngrok-free.app',  
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      console.log("➡️ Access token attached:", accessToken);
    } else {
      console.warn("❌ No access token found in localStorage");
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default instance;

