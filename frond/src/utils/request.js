import axios from "axios";

const request = axios.create({
    baseURL: "https://blog-me-kqs5.onrender.com"
});

export default request;