import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SecondaryButton } from "../SecondaryButton";
import "./User.css";


interface _LoginProps {
  onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
  toggleAccount: () => void;
  updateStorage: any;
}


export const Login: React.FC<_LoginProps> = ({onChange,toggleAccount, updateStorage}) => {

  const [form, setForm] = useState({
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
    setForm({...form, [key]: value})
  }

  const usersRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/login"

  const handleUserSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setForm(form)

    axios.post(usersRoute, form)
    .then((response) => {
      const data = response.data;
  
      updateStorage(data[0]);
      setForm(data[0]);
      toggleAccount();
      console.log('login-user', data[0])
      setForm(data[0]);

      setTimeout(() => {
          // closeSide();
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
            value={form.email}
            placeholder="Enter your email"
            onChange={e => setValue("email", e.target.value)}
            required>
            </input>

        <label className="form-label">Password</label>
        <input className="input-text"
            type="password"
            name="password"
            value={form.password}
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