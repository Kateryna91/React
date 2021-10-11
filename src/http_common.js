import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:44351/",
  //baseURL: "/",
  headers: {
    "Content-type": "application/json"
  }
});