import axios from "axios";

const API_URL = "http://localhost:8080";

const signup = (username, password) => {
  return axios
    .post(API_URL + "management/api/v1/players/signup", {
      username,
      password,
     })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "/login", {
      username,
      password,
    })
    .then((response) => {
      console.log(response.data)
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
