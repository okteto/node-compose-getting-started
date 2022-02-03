import axios from "axios";

const http = axios.create({
  baseURL: "/api",
  headers: {
    "Content-type": "application/json"
  }
});

class Service {
  getAll() {
    return http.get("/");
  }

  add(data) {
    return http.post("/", data);
  }
}

export default new Service();
