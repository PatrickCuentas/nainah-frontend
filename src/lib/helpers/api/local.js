import Axios from "axios";

const LOCAL_URL = process.env.NEXT_PUBLIC_LOCAL_URL;

let api;

if (process.env.NODE_ENV === "production" && !LOCAL_URL) {
  api = null;
} else {
  api = Axios.create({
    baseURL: LOCAL_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

export default api;
