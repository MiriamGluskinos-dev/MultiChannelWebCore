import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: "https://apig2g-t.meches.gov.il:13443", //https://apig2g-t.meches.gov.il:13443/test/consume/meches/dealfile/rest/webdeclaration/v1
    withCredentials: true,
});
axiosInstance.interceptors.request.use(config => {
    return config;
});
// Response Interceptor (optional for error handling)
axiosInstance.interceptors.response.use(response => response, error => Promise.reject(error));
export default axiosInstance;
