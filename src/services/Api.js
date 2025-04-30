import axios from "axios";

export const urlApi = 'http://localhost:3001';

const Api = axios.create({
    baseURL: 'http://localhost:3001', 
    // headers: {
    //     'Content-Type': 'application/json'
    // }
});

export default Api;