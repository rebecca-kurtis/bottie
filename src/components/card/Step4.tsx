import React from "react";
import "./Card.css";
import "./Step4.css";
import { PageTitle } from "../_partials/_PageTitle";

//import components
import { FormTextBox } from "../CardConfigure/FormTextbox";
import { FormSelection } from "../CardConfigure/FormSelection";
import { FormCheckBoxes } from "../CardConfigure/FormCheckboxes";

interface Step4Props {
  handleGPTSubmit: any;
  recipientFName: string;
  relationship: string;
  occasion: string;
  setOccasion: any;
  occasionOptions: any;
  mood: string;
  setMood: any;
  moodOptions: any;
  themes: any;
  themeChange: any;
  themeOptions: any;
  proseStyle: string;
  setProseStyle: any;
  proseOptions: any;
  user?: any;
}

export const Step4: React.FC<Step4Props> = ({
  handleGPTSubmit,
  occasion,
  setOccasion,
  occasionOptions,
  mood,
  setMood,
  moodOptions,
  themes,
  themeChange,
  themeOptions,
  proseStyle,
  setProseStyle,
  proseOptions,
  user
}) => {
  
  return (
    <div>
      <PageTitle message="3 / 5" />
      <PageTitle message="Let's configure your card" />
      <br></br>
      <br></br>
      <div className="container">
        <div className="card-configure-view">
            <form id='card-form-id' onSubmit={handleGPTSubmit} className="card-configure-form">
              <div className="step4-row">
                <div className="step4-row-element">
                  <FormSelection
                    labelText="What is the Occasion?"
                    name="occasion"
                    value={occasion}
                    onChange={(occasion) => setOccasion(occasion.target.value)}
                    selectOptions={occasionOptions}
                  />
                </div>
                <div className="step4-row-element">
                  <FormSelection
                    labelText="What Kind of Mood Would You Like?"
                    name="mood"
                    value={mood}
                    onChange={(mood) => setMood(mood.target.value)}
                    selectOptions={moodOptions}
                  />
                </div>
              </div>

              <FormCheckBoxes
                groupText="What themes would you like the card to be about?"
                name="themes"
                value={themes}
                onChange={themeChange}
                selectOptions={themeOptions}
              />
              <FormSelection
                labelText="What Style of Poem?"
                name="proseStyle"
                value={proseStyle}
                onChange={(proseStyle) =>
                  setProseStyle(proseStyle.target.value)
                }
                selectOptions={proseOptions}
              />

              {/* <FormTextBox
                labelText="Would you like it to be from a different name?"
                name="from"
                value={user.first_name}
                placeholder={user.first_name}
                // onChange={(from) => setFrom(from.target.value)}
              /> */}
            </form>
        </div>
      </div>
    </div>
  );
};