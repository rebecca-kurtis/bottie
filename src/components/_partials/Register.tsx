import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./User.css";
import { SecondaryButton } from "../SecondaryButton";


interface _RegisterProps {
  onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Register: React.FC<_RegisterProps> = (props) => {


  return (
    <div className="user">
      <form method="POST" action="/users" className="canva-body">
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
{/* 
        <label className="form-label">Address</label>
        <input type="text"
              name="address"
              placeholder="Enter your address"
              className="input-text"></input>

        <label className="form-label">City</label>
        <input type="text"
                name="city"
                placeholder="Enter your last name"
                className="input-text"></input>
         
              <label className="form-label">Province/State</label>
                  <FormSelect className="input-text" name="state">
                      <option>Select a Province</option>
                      <option value="1">Alberta</option>
                      <option value="2">Manitoba</option>
                      <option value="3">New Brunswick</option>
                      <option value="4">Alberta</option>
                      <option value="5">Manitoba</option>
                      <option value="6">Newfoundland and Labrador</option>
                      <option value="7">Northwest Territories</option>
                      <option value="8">Nova Scotia</option>
                      <option value="9">Nunavut</option>
                      <option value="10">Ontario</option>
                      <option value="11">Prince Edward Island</option>
                      <option value="12">Quebec</option>
                      <option value="13">Saskatchewan</option>
                      <option value="14">Yukon</option>
                  </FormSelect>

                <label className="form-label">Postal Code</label>
                <input type="text"
                  name="postal_code"
                  placeholder="Enter your postal code"
                  className="input-text"></input>

                <label className="form-label">Country</label>
                <input type="text"
                    name="country"
                    placeholder="Enter your country"
                    className="input-text"></input> */}
        <br></br>
        <div className="button-container">
          <SecondaryButton class="secondary-button" onChange={props.onChange} name="Back to login"/>
          {/* <MainButton  name="Register"/> */}
          {/* <button type="submit" className="main_button">Register</button> */}
        </div>
      </form> 
  </div>
  );
};

