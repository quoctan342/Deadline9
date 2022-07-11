import axios from "./axios";
const api = {
  get(url, params = {}, cancel_token = null) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
          cancelToken: cancel_token ? cancel_token.token : null,
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          if (axios.isCancel(err)) {
            return reject("canceled");
          }
          reject(err);
        });
    });
  },

  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  put(url, data = {}) { },

  delete(url, data = {}) { },
};

export default {
  getUser(payload) {
    let { id } = payload
    return api.get(`/use/${id}`, { id })
  },
  checkAuth() {
    return api.get('https://sohead-api-dev.socialhead.dev/api/app/user');
  },
  registerUser(payload) {
    let { email, password, timezone, name } = payload;
    return api.post('https://sohead-api-dev.socialhead.dev/api/app/sign-up', { email, password, timezone, name });
  },
  loginUser(payload) {
    let { email, password, timezone } = payload;
    return api.post('https://sohead-api-dev.socialhead.dev/api/app/sign-in', { email, password, timezone });
  }
};