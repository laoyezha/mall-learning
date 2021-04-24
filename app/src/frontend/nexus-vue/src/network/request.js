import axios from 'axios';

const request = axios.create({
  // baseURL
  timeout: 5000,
});

request.interceptors.request.use(
  req => {
    // console.log('axios req', req);
    return req;
  },
  err => {
    // console.log('axios req error', JSON.stringify(err));
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  res => {
    // console.log('axios res', res.data);
    return res;
  },
  err => {
    // console.log('axios res error', JSON.stringify(err));
    return Promise.reject(err);
  }
);
// a = {
//     "message": "Request failed with status code 404",
//     "name": "Error",
//     "stack": "Error: Request failed with status code 404\n    at createError (http://localhost:3000/node_modules/.vite/axios.js?v=d0ccbfa9:320:17)\n    at settle (http://localhost:3000/node_modules/.vite/axios.js?v=d0ccbfa9:334:14)\n    at XMLHttpRequest.handleLoad (http://localhost:3000/node_modules/.vite/axios.js?v=d0ccbfa9:544:9)",
//     "config": {
//         "url": "/data1?dataId=123",
//         "method": "get",
//         "headers": {
//             "Accept": "application/json, text/plain, */*"
//         },
//         "transformRequest": [null],
//         "transformResponse": [null],
//         "timeout": 5000,
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN",
//         "maxContentLength": -1,
//         "maxBodyLength": -1
//     }
// }
export default request;
