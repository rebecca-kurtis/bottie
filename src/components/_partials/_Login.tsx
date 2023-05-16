import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SecondaryButton } from "../SecondaryButton";
import "./User.css";


interface _LoginProps {
  onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
  closeSide: () => void;
  updateStorage: any;
}


export const Login: React.FC<_LoginProps> = ({onChange, closeSide, updateStorage}) => {

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "", 
    city: "", 
    state: "",
    country: "",
    postal_code: ""
  });

  // Set the value of a single element of the object
  const setValue = (key: any, value: any) => {
    setUser({...user, [key]: value})
  }


  // const canva = useLoginToggle()

  // let navigate = useNavigate();

  // const routeChange = () => {
  // let path = `/profile`;
  // navigate(path);
  // window.scrollTo(0, 0);
  // };

  // function getCurrentUser() {
  //   const userStr = localStorage.getItem("user");
  //   if (userStr) return JSON.parse(userStr)
  //   return null;
  // }

  const usersRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/login"

  const handleUserSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setUser(user)

    axios.post(usersRoute, user)
    .then((response) => {
      const data = response.data;
  
      updateStorage(data[0]);
      setUser(data[0]);

      setTimeout(() => {
          closeSide();
          // navigate('/');
      }, 500);

      return response.data
    })
    .catch((error) => {
      if (error.response) {
        alert(`Error! ${error.message}`);
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    });
  };

  return (
    <div className="user">
        <form onSubmit={handleUserSubmit} className="canva-body">
        <h2>Login</h2>
        <br></br>
        <br></br>
        <label className="form-label">Email</label>
        <input className="input-text"
            type="text"
            name="email"
            value={user.email}
            placeholder="Enter your email"
            onChange={e => setValue("email", e.target.value)}
            required>
            </input>

        <label className="form-label">Password</label>
        <input className="input-text"
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={e => setValue("password", e.target.value)}
            required>
            </input>

        <button type="submit" className="main_button">Login</button>
      </form>

      <div className="register-container">
        <p className="white-text">Don't have an account?</p>
        <SecondaryButton class="secondary-button white-text" onChange={onChange} name="Register"/>
      </div>
  </div>
  );
};