
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData(props) {


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

  const usersRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/users"
  
  const handleUserChange = (e) => {
    setUser({
      first_name: e.target.first_name,
      last_name: e.target.last_name,
      email: e.target.email,
      password: e.target.password,
      address: e.target.address, 
      city: e.target.city,
      state: e.target.state,
      country: e.target.country,
      postal_code: e.target.postal_code,
    });
    console.log("user:", user);
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const userData = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      address: user.address,
      city: user.city,
      state: user.state,
      country: user.country,
      postal_code: user.postal_code
    };
    axios.post(usersRoute, userData).then((response) => {
      setUser(userData)
      console.log(response.status, response.data.token);
    });
  };

  return {
    handleUserChange,
    handleUserSubmit
  }
};