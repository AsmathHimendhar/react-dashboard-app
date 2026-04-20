import axios from "axios";
const apiClint = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 5000,
})
export default apiClint