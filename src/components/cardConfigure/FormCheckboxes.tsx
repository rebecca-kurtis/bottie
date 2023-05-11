import React from "react";
import "./FormCheckboxes.css";

interface FormCheckBoxesProps {
  groupText: string;
  name: string;
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectOptions: string[];
}

export const FormCheckBoxes: React.FC<FormCheckBoxesProps> = ({
  groupText,
  name,
  value,
  onChange,
  selectOptions,
}) => {
  const mappedOptions = selectOptions.map((option: string) => {
    return (
      <li key={option}>
        <input
          type="checkbox"
          name={option}
          value={option}
          onChange={onChange}
        />
        <label>{option}</label>
      </li>
    );
  });

  return (
    <div>
      <h4> {groupText}</h4>
      <ul>{mappedOptions}</ul>
    </div>
  );
};
