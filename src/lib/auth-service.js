import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:4000",
      withCredentials: true,
    });

    this.service = axios.create({
      baseURL: "http://localhost:4000/api",
      // withCredentials: true
    });
  }

  newCanvas({ author, gridSize, canvasData, name }) {
    return this.auth
      .post("/auth/new", { author, gridSize, canvasData, name })
      .then(({ data }) => data);
  }


  signup({ username, password }) {
    return this.auth
      .post("/auth/signup", { username, password })
      .then(({ data }) => data);
  }

  login({ username, password }) {
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
  }

  // handleUpload = async (theFile) => {
  //   console.log("file in service: ", theFile);

  //   try {
  //     const res = await this.service.post("/upload", theFile);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
