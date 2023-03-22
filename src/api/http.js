import axios from "axios";

const API_ROOT =
  "http://127.0.0.1:8000/api";

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 30000;

// axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => handleError(error)
);

const handleError = (error) => {
  if (error.message === "Network Error") {
    const netWorkError = {
      data: {
        message: "netWorkErr",
      },
    };
    return Promise.reject(netWorkError);
  }
  if (error.response) {
    const { status } = error.response;
    if (status === 401) {
      // return handleRefreshToken();
    }
  }

  return Promise.reject(error.response || error.request || error.message);
};

const http = {
  setAuthorizationHeader(accessToken) {
    axios.defaults.headers.Authorization = `bearer ${accessToken}`;
  },
  request(config = {}) {
    return axios.request(config);
  },
  get(url, config = {}) {
    return axios.get(url, config);
  },
  post(url, data = {}, config = {}) {
    return axios.post(url, data, config);
  },
  put(url, data = {}, config = {}) {
    return axios.put(url, data, config);
  },
  patch(url, data = {}, config = {}) {
    return axios.patch(url, data, config);
  },
  delete(url, config = {}) {
    return axios.delete(url, config);
  },
};

export default http;
