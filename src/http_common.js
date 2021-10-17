import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:15247/",
  //baseURL: "/",
  headers: {
    "Content-type": "application/json"
  }
});