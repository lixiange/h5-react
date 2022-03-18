import axios from "axios";
import requestConfig from "../config/REQUEST_CONFIG";

const baseURL = requestConfig.apiBase;
axios.defaults.timeout = requestConfig.timeout;
// axios.interceptors.request.use(
//   config => {
//     //请求头带上token
//     config.headers[""] = localStorage.getItem("");
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;
    if (response) {
      return Promise.reject(response.data);
    } else {
      switch (true) {
        case error.message.includes("timeout"):
          return Promise.reject({ message: requestConfig.errorMsg.timeout });
        case error.message.includes("Network"):
          return Promise.reject({ message: requestConfig.errorMsg.network });
        default:
          return Promise.reject(error);
      }
    }
  }
);
const post = (url, params, body) => {
  return new Promise((resolve, reject) => {
    let d = function() {
      if (body) {
        return { data: params };
      } else {
        return { params: params };
      }
    };
    axios({
      baseURL: baseURL,
      url: url,
      method: "post",
      ...d()
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios({
      baseURL: baseURL,
      url: url,
      method: "get",
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export { post, get };
