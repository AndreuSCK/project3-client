import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:4000/api",
    //    withCredentials: true
    });
  }
  
  handleUpload = async (theFile) => {
    console.log("file in service: ", theFile);
    
    try {
      console.log('patatas')
      console.log(theFile)
      const res = await this.service.post("/upload", theFile);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  };

  saveNewMovie = async (newImage) => {
    console.log("new thing is: ", newImage);

    try {
      const res = await this.service.post("/image/create", newImage);
      console.log(res.data)
      return res.data;
    } catch (error) {
      
    }
  };

  getMovies = async () => {
    try {
      const res = await this.service.get("/image");
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  // saveImageToUser = async () => {
  //  try {
  //    return red.data
  //  } catch (error) {
  //    console.log(error)
  //  }
  // }
}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;
