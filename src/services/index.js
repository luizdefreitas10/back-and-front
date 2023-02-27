import axios from "axios";

const PORT = 8000;

const api = axios.create({
  baseURL: `http://localhost:${PORT || "8000"}`,
  headers: {
    // 'Access-Control-Allow-Origin': `http://localhost:${PORT || "8000"}`,
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': '*',
    // 'Authorization': "JWT " + localStorage.getItem('access_token'),
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    'Content-Type': 'application/json',
    // 'accept': 'application/json'
}
});

export default api;