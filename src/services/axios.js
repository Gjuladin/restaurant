import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("clientAccessToken");
  if (token) {
    req.headers["x-access-token"] = token;
  } else {
    delete req.headers["x-access-token"];
  }
  return req;
}, undefined);

api.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (
      err.response.status === 401 &&
      !err.response.config.url.includes("auth/signin")
    ) {
      localStorage.removeItem("clientAccessToken");
      localStorage.removeItem("client");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default api;
