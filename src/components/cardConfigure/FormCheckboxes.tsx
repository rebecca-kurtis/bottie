import React from "react";

interface FormCheckBoxesProps{
  groupText: string;
  name: string;
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectOptions: string[];
  }

export const FormCheckBoxes: React.FC<FormCheckBoxesProps> = ({groupText, name, value, onChange, selectOptions}) => {
  const mappedOptions = selectOptions.map((option:string) => {
    return (
      <li key={option}>
      <label>
        {option}
        <input 
          type="checkbox" 
          name={option} 
          value={option}
          onChange={onChange} 
          />
      </label>
      </li>
    )
  });

  return (
  <div>
    <p> {groupText}</p>
    <ul>
    {mappedOptions}
    </ul>
  </div>
  )

};