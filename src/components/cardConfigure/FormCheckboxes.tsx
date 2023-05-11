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
      <div className="configure-li-component" key={option}>
        <input
          className="checkbox-input"
          type="checkbox"
          name={option}
          value={option}
          onChange={onChange}
        />
        <label className="checkbox-label">{option}</label>
      </div>
    );
  });

  return (
    <div>
      <h4> {groupText}</h4>
      <ul className="checkbox-list">{mappedOptions}</ul>
    </div>
  );
};
