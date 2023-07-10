import axios from "axios";
export function requestGetUser() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/blogPost/getAll",
  });
}
