import axios from "axios";

/*
  Central API service layer

  Responsibilities:
  - Connect frontend to Django backend
  - Automatically attach JWT token
  - Handle authentication errors
*/

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});


// Attach JWT token automatically
API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});


// Handle expired token / auth errors
API.interceptors.response.use(
  (response) => response,
  (error) => {

    if (error.response && error.response.status === 401) {

      // Token invalid → logout user
      localStorage.removeItem("token");
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default API;
