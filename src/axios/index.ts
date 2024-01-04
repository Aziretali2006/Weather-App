import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

api.interceptors.request.use(config => {
  config.url = config.url + '&units=metric' + `&appid=` + "1386b98397f45912752c2a5c63d7dfec";
  return config
});

export default api;