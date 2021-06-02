import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/full-stack-91e38/us-central1/api", // The API (cloud function) URL
});

export default instance;
