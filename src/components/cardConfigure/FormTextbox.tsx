import React from "react";

interface FormTextBoxProps {
  labelText: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormTextBox: React.FC<FormTextBoxProps> = ({labelText, name, value,onChange}) => {
  return (
  <div>
    <label>
      <p>{labelText}</p>
      <input type="text"
      key={name}
      name={name}
      value={value}
      onChange={onChange}
      />
    </label>
  </div>
  );
}