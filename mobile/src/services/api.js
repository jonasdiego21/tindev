import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ip:port',
});

export default api;
