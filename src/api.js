import axios from "axios";

const api = axios.create({
baseURL:'https://brasilapi.com.br/api/'
})


export default api