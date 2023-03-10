import axios from 'axios';

// const API_ROOT = 'http://127.0.0.1:8000/api';
const API_ROOT = ' https://1632-113-176-99-140.ap.ngrok.io/api';

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  response => response,
  error => handleError(error),
);

const handleError = error => {
  if (error.message === 'Network Error') {
    const netWorkError = {
      data: {
        message: 'netWorkErr',
      },
    };
    return Promise.reject(netWorkError);
  }
  if (error.response) {
    const {status} = error.response;
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