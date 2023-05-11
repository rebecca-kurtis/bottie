import React from "react";
import './Card.css';
import './Step2.css';
import { PageTitle } from "../_partials/_PageTitle";


interface Step2Props {}

export const Step2: React.FC<Step2Props> = () => {
  return (
    <div>
        <PageTitle message ="2 / 5" />
        <PageTitle message ="Tell me about you" />
        <br></br>
        <br></br>
        <div className="container">
          <form method="POST" action="/users" className="double">
            <div className="colonne">
              <h3>Who are you</h3>
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
              <input type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="input-text"></input>

              <label className="form-label">Password</label>
              <input type="password"
                    name="password"
                    placeholder="Enter a password"
                    className="input-text"></input>
            </div>
            <div className="colonne">
              <h3>Where do you live</h3>
              <br></br>
              <br></br>
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

              <div className="double">
                <div>
                  <label className="form-label">Province</label>
                  <input type="text"
                        name="province"
                        placeholder="Select a Province"
                        className="input-text province"></input>
                </div>
                <div className="postcode">
                  <label className="form-label">Postal Code</label>
                    <input type="text"
                          name="post_code"
                          placeholder="XXX XXX"
                          className="input-text postcode"></input>
                  </div>
                </div>
            </div>
        
          </form> 
        </div>  
    </div>
  );
};