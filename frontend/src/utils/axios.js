import axios from 'axios'

axios.defaults.baseURL = `http://localhost:4000`
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.timeout = 4000 //

export const api = axios.create()

// [Client] ----- [ Interceptor ] -----> [Server]
// multiform
api.interceptors.request.use(
  (req) => {
    if (req.data && req.data instanceof FormData) {
      req.headers['Content-Type'] = 'multipart/form-data'
    }
    return req
  },
  (err) => err,
)

// [Client] <----- [Interceptor] ----- [Server]
api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err)
  },
)
