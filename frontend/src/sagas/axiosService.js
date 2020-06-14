import axios from "axios";

let instance = null;

export default class AxiosService {
  constructor() {
    if (!instance) {
      this.axiosService = axios.create({
        headers: {
          Authorization: "Bearer undefined",
        },
      });
      instance = this;
    }
    return instance;
  }
  refresh(token) {
    this.axiosService = axios.create({
      headers: {
        Authorization: `Bearer ${token || "undefined"} `,
      },
    });
  }
}
