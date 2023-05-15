import React from "react";
import "./Card.css";
// import './Step2.css';
import { PageTitle } from "../_partials/_PageTitle";
import { FormSelect } from "react-bootstrap";
import { FormSelection } from "../CardConfigure/FormSelection";

interface Step3Props {
  relationship: string;
  setRelationship: any;
  relationshipOptions: any;
  recipient: any;
  setRecipient: any;
}

export const Step3: React.FC<Step3Props> = ({
  relationship,
  setRelationship,
  relationshipOptions,
  recipient,
  setRecipient,
}) => {
  return (
    <div>
      <PageTitle message="3 / 5" />
      <PageTitle message="Tell me about you the person you want to offer a gift" />
      <br></br>
      <br></br>
      <div className="container">
        <form method="POST" action="/users" className="double">
          <div className="colonne">
            <h3>Who is this person</h3>
            <br></br>
            <br></br>
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              className="input-text"
              onChange={(event) => {
                setRecipient({
                  ...recipient,
                  first_name: event.target.value,
                });
              }}
            ></input>

            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              className="input-text"
              onChange={(event) => {
                setRecipient({
                  ...recipient,
                  last_name: event.target.value,
                });
              }}
            ></input>

            <FormSelection
              labelText="What is their relationship to you?"
              name="relationship"
              value={relationship}
              onChange={(relationship) =>
                setRelationship(relationship.target.value)
              }
              selectOptions={relationshipOptions}
            />
          </div>
          <div className="colonne">
            <h3>Where do they live</h3>
            <br></br>
            <br></br>
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="input-text"
              onChange={(event) => {
                setRecipient({
                  ...recipient,
                  address: event.target.value,
                });
              }}
            ></input>

            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              className="input-text"
              onChange={(event) => {
                setRecipient({
                  ...recipient,
                  city: event.target.value,
                });
              }}
            ></input>

            <div className="double">
              <div>
                <label className="form-label">Province</label>
                <FormSelect className="input-text province" onChange={(event) => {
                setRecipient({
                  ...recipient,
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
                  onChange={(event) => {
                    setRecipient({
                      ...recipient,
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
