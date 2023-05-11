import React, { useState } from "react";
import axios from "axios";
import "./CardConfigure.css";


//import components
import { PageTitle } from "../components/_partials/_PageTitle";
import { FormTextBox } from "../components/CardConfigure/FormTextbox";
import { FormSelection } from "../components/CardConfigure/FormSelection";
import { FormCheckBoxes } from "../components/CardConfigure/FormCheckboxes";
import { CardMessage } from "../components/CardConfigure/CardMessage";

interface CardConfigureProps {}

export const CardConfigure: React.FC<CardConfigureProps> = () => {

  const [recipientFName, setRecipientFName] = useState('');
  const [relationship, setRelationship] = useState('Friend');
  const [occasion, setOccasion] = useState('Birthday');
  const [mood, setMood] = useState('Happy');
  const [proseStyle, setProseStyle] = useState('Ode');
  const [themes, setThemes] = useState([] as string[]);
  const [from, setFrom] = useState('username');
  const [chatGPTMessage, setChatGPTMessage]= useState("");

  const relationshipOptions = ["Partner", "Wife", "Husband", "Father", "Mother", "Brother", "Sister", "Uncle", "Aunt", "Cousin", "Grandmother", "Grandfather", "Boss", "Employee", "Friend"];
  const occasionOptions = ["Birthday", "Anniversary", "Get Well", "Sorry For Your Loss", "Welcome Home", "Mothes Day", "Fathers Day", "New Baby", "Condolences", "Congrats", "Farewell", "Graduation", "Just Because", "Wedding", "Thank-you", "Welcome", "Valentines Day", "Christmas", "Happy Holidays", "New Year", "Easter", "Thanksgiving", "St. Patricks Day", "I'm Sorry" ];
  const moodOptions = ["Happy", "Optimistic", "Silly", "Sympathetic", "Romantic", "Excited", "Fearful", "Regretful"];
  const themeOptions = ["Love", "Romance", "Death", "Nature", "Beauty","Spirituality", "Aging", "Identity", "Travel", "Dreams", "Recovery", "New Life", "Dissapointment", "Immortality", "Coming of Age", "Desire", "Destiny", "Courage", "Happiness", "God", "Friendship", "Heartbreak", "Imagination", "Tragedy", "Memories", "Rebirth", "Spring", "Winter", "Summer", "Autumn", "Secrets", "Peace", "Pain", "Earth", "Faith", "Forgiveness", "Afterlife", "Joy", "Purpose", "Regret", "Innocence", "Duty", "Change"];
  const proseOptions = ["Free Verse", "Perfect Rhyme", "Haiku", "Sonnet", "Limerick", "Villanelle", "Ode"];

  //themechange is based on checkmarks being on or off
  //if on then they are added to a string, if off they are removed.
  //TODO - limit this to 5 themes.
  const themeChange = (event: any) => {
    event.target.checked ? setThemes([...themes, event.target.value]) : setThemes(themes.filter(theme => theme !== event.target.value));
  }

  const route = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/chatGPT"

  //handleGPTsubmit returns the ChatGPT call.
  async function handleGPTSubmit(event: any ) {
    event.preventDefault();
    const prompt = {
      relationship, 
      proseStyle, 
      occasion, 
      themes, 
      mood
    }
    try {
      const response = await axios.post(route, prompt);
      setChatGPTMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
};
//the page render
  return ( <div className="card-root">
     <div > {/* className="card-configure-page" */}     
      <div className="spacer-tag card-configure" />  
      
     <PageTitle
        message={"Let Aunt Bottie Create a Custom Message for You."}
      />
      <div >
        {/* className="card-configure-options" */}
        <form onSubmit={handleGPTSubmit}>
            <FormTextBox
            labelText="Who is the Gift for?"
            name="recipientsFName"
            value={recipientFName || "Add a name"}
            onChange={name => setRecipientFName(name.target.value)}
            />

            <FormSelection
            labelText="Their Relationship to You?"
            name="relationship"
            value={relationship}
            onChange={relationship => setRelationship(relationship.target.value)}
            selectOptions = {relationshipOptions} 
            />

            <FormSelection
            labelText="What is the Occasion?"
            name="occasion"
            value={occasion}
            onChange={occasion => setOccasion(occasion.target.value)}
            selectOptions = {occasionOptions} 
            />

            <FormSelection
            labelText="What Kind of Mood Would You Like?"
            name="mood"
            value={mood}
            onChange={mood => setMood(mood.target.value)}
            selectOptions = {moodOptions} 
            />

            <FormCheckBoxes 
              groupText="What themes would you like the card to be about?"
              name="themes"
              value={themes}
              onChange={themeChange}
              selectOptions={themeOptions}
            />
            <FormSelection
            labelText="What Style of Poem? (need to build a pop up here to explain)"
            name="proseStyle"
            value={proseStyle}
            onChange={proseStyle => setProseStyle(proseStyle.target.value)}
            selectOptions = {proseOptions} 
            />
         
            <FormTextBox
            labelText="Would you like it to be from a different name?"
            name="from"
            value={from}
            onChange={from => setFrom(from.target.value)}
            />
          <div>
          <p><input type="submit" value="Generate Message" /></p>
          </div>
        </form>
        <div>
            <CardMessage
              message={chatGPTMessage}
              recipiant={recipientFName}
              from={from}
            />
          </div>


        {
        /* the following is for verifying we have control of states.
        Should be removed later.
        <div>
          {recipientFName} <br />
          {relationship}<br />
          {occasion}<br />
          {mood}<br />
          {themes.map((theme, index) => (
            index + 1 === themes.length ? `${theme}` : `${theme}, `
          ))}
          <br />
          {proseStyle}<br />
          {from}<br />
        </div>
          */
          }


    </div> 
</div>
</div>
  );
};
