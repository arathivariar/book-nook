import axios from "axios";

axios.defaults.baseURL = "https://book-nook-api-899ce4385a72.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;