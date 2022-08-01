import axios from "axios";

axios.defaults.baseURL = 'https://aa8f-119-153-144-209.ap.ngrok.io/api/v1';
axios.defaults.headers.common['Accept'] = 'application/json';

export default axios;