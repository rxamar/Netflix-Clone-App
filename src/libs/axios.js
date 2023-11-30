import client from "axios";
import requests from "./request";
const axios = client.create({ baseURL: process.env.REACT_APP_BASE_URL });

export default axios;
