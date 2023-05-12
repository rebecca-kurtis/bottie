import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT
;

class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + "/login", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(first_name: string, last_name: string, email: string, password: string, address: string, city: string, state: string, country: string, postal_code: string ) {
    return axios.post(API_URL + "/register", {
      first_name,
      last_name,
      email,
      password,
      address,
      city, 
      state,
      country,
      postal_code,
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();