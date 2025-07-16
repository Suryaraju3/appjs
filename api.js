import axios from 'axios';

const api = axios.create({
    URL:'http://127.0.0.1:8000/',
    withCredentials:true

})
export default api;