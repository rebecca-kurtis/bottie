import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MainButton } from "../MainButton";
import { SecondaryButton } from "../SecondaryButton";
import "./User.css";
import PropTypes from 'prop-types'



// import hooks
import useVisualMode from "../../hooks/useVisualMode";
import useLoginToggle from "../../hooks/useLoginToggle";


interface _LoginProps {
  // name: string;
  // onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
  // setToken: PropTypes.func.isRequired
  // setToken: typeof PropTypes.func.isRequired;

}



export const Login: React.FC<_LoginProps> = () => {

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

  const [token, setToken] = useState({
    email: "",
    password: "",
  })


  // Set the value of a single element of the object
  const setValue = (key: any, value: any) => {
    setUser({...user, [key]: value})
  }


  const canva = useLoginToggle()

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
      const token = "patate";
      console.log("Data ici:", data);
      console.log("Token ici:", token);
      // if (!token) {
      //     alert('Unable to login. Please try after some time.');
      //     return;
      // }
      localStorage.clear();
      localStorage.setItem('user-token', token);
      console.log("local storage: ",localStorage)

      setUser(response.data[0]);
      console.log(user.first_name)

      setTimeout(() => {
          navigate('/');
      }, 500);

      // if (response.data.accessToken) {
      //    localStorage.setItem("user", JSON.stringify(response.data));
      // }

      routeChange();
      canva.closeCanva();
      console.log("user final", user.first_name)
      return user;
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
        <form onSubmit={handleUserSubmit} className="login-form">
        <h2>Login</h2>
        <br></br>
        <br></br>
        <label className="form-label">Email</label>
        <input className="input-text"
            type="text"
            name="email"
            value={user.email}
            placeholder="Enter your email"
            onChange={e => setValue("email", e.target.value)}>
            </input>

        <label className="form-label">Password</label>
        <input className="input-text"
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={e => setValue("password", e.target.value)}>
            </input>

        <button type="submit" className="main_button">Login</button>
        {/* <MainButton type="submit" name="Login"/> */}
      </form>

      <div className="register-container">
        <h4 className="white-text">Don't have an account?</h4>
        {/* <SecondaryButton class="secondary-button white-text" onChange={onChange} name="Register"/> */}
      </div>
  </div>
  );
};

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }