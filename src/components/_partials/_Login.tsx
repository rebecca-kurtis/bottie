import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SecondaryButton } from "../SecondaryButton";
import "./User.css";

// import hooks
// import useLoginToggle from "../../hooks/useLoginToggle";


interface _LoginProps {
  onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
  closeSide: () => void;
}



export const Login: React.FC<_LoginProps> = ({onChange, closeSide}) => {

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

  // const [token, setToken] = useState({
  //   email: "",
  //   password: "",
  // })


  // Set the value of a single element of the object
  const setValue = (key: any, value: any) => {
    setUser({...user, [key]: value})
  }


  // const canva = useLoginToggle()

  let navigate = useNavigate();

  const routeChange = () => {
  let path = `/profile`;
  navigate(path);
  window.scrollTo(0, 0);
  };

  const usersRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/login"
  const headers = { 'Authorization': `Bearer ${localStorage.getItem('user-token')}`};




  const handleUserSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setUser(user)

  
    axios.post(usersRoute, user)
    .then((response) => {
      const data = response.data;
      // const token = "patate";
      // console.log("Data ici:", data);
      // console.log("Token ici:", token);
      // if (!token) {
      //     alert('Unable to login. Please try after some time.');
      //     return;
      // }
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(response.data));
      // localStorage.setItem('user-token', token);
      console.log("local storage: ",localStorage)

      setUser(data[0]);
      console.log(user.first_name)

      setTimeout(() => {
          closeSide();
          navigate('/');
      }, 500);

      // if (response.data.accessToken) {
      //    localStorage.setItem("user", JSON.stringify(response.data));
      // }

      // routeChange();
      // canva.closeCanva();
      // console.log("user final", user.first_name)
      // return user;
      return response.data
    })
    .catch((error) => {
      if (error.response) {
        alert(`Error! ${error.message}`);
        // console.log(error.response);
        // console.log("server responded");
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