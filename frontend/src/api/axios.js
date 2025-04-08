import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',  
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

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // Prevent infinite loops
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = localStorage.getItem("refreshToken");
//         if (!refreshToken) {
//           console.error("❌ No refresh token found!");
//           return Promise.reject(error);
//         }

//         // Request new access token
//         const res = await axios.post(
//           'http://127.0.0.1:8000/api/token/refresh/',
//           { refresh: refreshToken },
//           { headers: { 'Content-Type': 'application/json' } }
//         );

//         const newAccessToken = res.data.access;
//         localStorage.setItem("accessToken", newAccessToken);
//         console.log("🔄 New access token obtained:", newAccessToken);

//         // Update the original request with new token
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return instance(originalRequest);
//       } catch (refreshError) {
//         console.error("🔁 Refresh token request failed", refreshError);
//         // Optional: logout the user or redirect to login
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        console.error("❌ No refresh token found!");
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const res = await axios.post(
          'http://127.0.0.1:8000/token/refresh/',
          { refresh: refreshToken },
          { headers: { 'Content-Type': 'application/json' } }
        );

        const newAccessToken = res.data.access;
        localStorage.setItem("accessToken", newAccessToken);
        console.log("🔄 New access token obtained:", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        console.error("🔁 Refresh token failed:", refreshError);

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        window.location.href = "/login"; 
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);


export default instance;

