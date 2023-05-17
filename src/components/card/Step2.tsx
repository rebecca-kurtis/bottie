import React from "react";
import "./Card.css";
// import './Step2.css';
import { PageTitle } from "../_partials/_PageTitle";
import { FormSelect } from "react-bootstrap";

interface Step2Props {
  buyer: any;
  setBuyer: any;
  setFrom: any;
}

export const Step2: React.FC<Step2Props> = ({ buyer, setBuyer, setFrom }) => {

  return (
    <div>
      <PageTitle message="2 / 5" />
      <PageTitle message="Tell me about you" />
      <br></br>
      <br></br>
      <div className="container">
        <form method="POST" action="/users" className="double">
          <div className="colonne">
            <h3>Who are you</h3>
            <br></br>
            <br></br>
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              className="input-text"
              value={buyer.first_name || ""}
              onChange={(event) => {
                setBuyer({
                  ...buyer,
                  first_name: event.target.value,
                });
                setFrom(event.target.value);
              }}
            ></input>

            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              className="input-text"
              value={buyer.last_name || ""}
              onChange={(event) => {
                setBuyer({
                  ...buyer,
                  last_name: event.target.value,
                });
              }}
            ></input>

            <label className="form-label">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="input-text"
              value={buyer.email || ""}
              onChange={(event) => {
                setBuyer({
                  ...buyer,
                  email: event.target.value,
                });
              }}
            ></input>

            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a password"
              className="input-text"
              value={buyer.password || ""}
              onChange={(event) => {
                setBuyer({
                  ...buyer,
                  password: event.target.value,
                });
              }}
            ></input>
          </div>
          <div className="colonne">
            <h3>Where do you live</h3>
            <br></br>
            <br></br>
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="input-text"
              value={buyer.address || ""}
              onChange={(event) => {
                setBuyer({
                  ...buyer,
                  address: event.target.value,
                });
              }}
            ></input>

            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your last name"
              className="input-text"
              value={buyer.city || ""}
              onChange={(event) => {
                setBuyer({
                  ...buyer,
                  city: event.target.value,
                });
              }}
            ></input>

            <div className="double">
              <div>
                <label className="form-label">Province</label>
                <FormSelect className="input-text province" 
                 value={buyer.province || ""}
                onChange={(event) => {
                setBuyer({
                  ...buyer,
                  province: event.target.value,
                });
              }}>
                  <option>Select a Province</option>
                  <option value="Alberta">Alberta</option>
                  <option value="Manitoba">Manitoba</option>
                  <option value="New Brunswick">New Brunswick</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                  <option value="Northwest Territories">Northwest Territories</option>
                  <option value="Nova Scotia">Nova Scotia</option>
                  <option value="Nunavut">Nunavut</option>
                  <option value="Ontario">Ontario</option>
                  <option value="Prince Edward Island">Prince Edward Island</option>
                  <option value="Quebec">Quebec</option>
                  <option value="Saskatchewan">Saskatchewan</option>
                  <option value="Yukon">Yukon</option>
                </FormSelect>
              </div>
              <div className="postcode">
                <label className="form-label">Postal Code</label>
                <input
                  type="text"
                  name="post_code"
                  placeholder="XXX XXX"
                  className="input-text postcode"
                  value={buyer.postal_code || ""}
                  onChange={(event) => {
                    setBuyer({
                      ...buyer,
                      postal_code: event.target.value,
                    });
                  }}
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
