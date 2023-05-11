import React from "react";
import "./FormTextbox.css";

interface FormTextBoxProps {
  labelText: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormTextBox: React.FC<FormTextBoxProps> = ({labelText, name, placeholder, value,onChange}) => {
  return (
  <div className="form-text-box">
    <label>
      <h4>{labelText}</h4>
      <input type="text" className="input-text-feild"
      placeholder={placeholder}
      key={name}
      name={name}
      value={value}
      onChange={onChange}
      />
    </label>
  </div>
  );
}