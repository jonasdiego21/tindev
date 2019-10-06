import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://138.94.25.30:3333',
    baseURL: 'http://192.168.88.194:3333',
});

export default api;