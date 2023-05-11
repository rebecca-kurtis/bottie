import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./User.css";
import { SecondaryButton } from "../SecondaryButton";
import { MainButton } from "../MainButton";


interface _CreateAccountProps {
  onCancel : React.MouseEventHandler<HTMLButtonElement> | undefined;
  onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const CreateAccount: React.FC<_CreateAccountProps> = (props) => {

  return (
    <div className="user">
      <form method="POST" action="/users" className="login-form">
        <h2>Register</h2>
        <br></br>
        <br></br>
        <label className="form-label">First Name</label>
        <input type="text"
              name="first_name"
              placeholder="Enter your first name"
              className="input-text"></input>
        <label className="form-label">Last Name</label>
        <input type="text"
              name="last_name"
              placeholder="Enter your last name"
              className="input-text"></input>
        <label className="form-label">Email</label>
        <input type="email"
              name="email"
              placeholder="Enter your email"
              className="input-text"></input>
        <label className="form-label">Password</label>
        <input type="password"
              name="password"
              placeholder="Enter your password"
              className="input-text"></input>
        <label className="form-label">Phone Number</label>
        <input type="text"
              name="phone"
              placeholder="Enter your phone number"
              className="input-text"></input>
        <label className="form-label">Address</label>
        <input type="text"
              name="address"
              placeholder="Enter your address"
              className="input-text"></input>
        <br></br>
        <div className="button-container">
          <SecondaryButton class="secondary-button" onChange={props.onCancel} name="Back to login"/>
          <MainButton onChange={props.onChange} name="Register"/>
          {/* <button type="submit" className="main_button">Register</button> */}
        </div>
      </form> 
  </div>
  );
};

