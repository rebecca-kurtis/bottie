import React from "react";
import './Card.css';
// import './Step2.css';
import { PageTitle } from "../_partials/_PageTitle";
import { FormSelect } from "react-bootstrap";



interface Step3Props {}

export const Step3: React.FC<Step3Props> = () => {
  return (
    <div>
        <PageTitle message ="3 / 5" />
        <PageTitle message ="Tell me about you the person you want to offer a gift" />
        <br></br>
        <br></br>
        <div className="container">
        <form method="POST" action="/users" className="double">
            <div className="colonne">
              <h3>Who is this person</h3>
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

              <label className="form-label">Your relation to this person</label>
              <div className="checkbox">
                <input type="radio" value="A friend of mine" name="relation" /> A friend of mine
                <br></br>
                <input type="radio" value="A love one" name="relation" /> A love one
                <br></br>
                <input type="radio" value="A collegue" name="relation" /> A collegue
                <br></br>
                <input type="radio" value="A teacher" name="relation" /> A teacher
                </div>

              </div>
              <div className="colonne">
                 <h3>Where does she lives</h3>
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
                    <FormSelect className="input-text province">
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