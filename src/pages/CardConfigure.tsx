import React, { useState } from "react";

interface CardConfigureProps {}

export const CardConfigure: React.FC<CardConfigureProps> = () => {

  const [recipientFName, setRecipientFName] = useState("");
  const [relationship, setRelationship] = useState("Friend");
  const [occasion, setOccasion] = useState("Birthday");
  const [mood, setMood] = useState("Happy");
  const [proseStyle, setProseStyle] = useState("Ode");
  const [themes, setThemes] = useState([] as string[]);
  const [from, setFrom] = useState("username");


  //themechange is based on checkmarks being on or off
  //if on they are added to a string, if off they are removed.
  const themeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked
      ? setThemes([...themes, event.target.value])
      : setThemes(themes.filter((theme) => theme !== event.target.value));
  };

  return (
    <main>
      <div className="spacer-tag home" />
      <section className="pages">
        <h1>This is the Card Form.</h1>
        <form>
          <label>
            Recipients First Name:
            <input
              type="text"
              name="name"
              onChange={(name) => setRecipientFName(name.target.value)}
            />
          </label>
          <br />
          <label>
            Their relationship to you?
            <select
              onChange={(relationship) =>
                setRelationship(relationship.target.value)
              }
              value={relationship}
            >
              <option value="Partner">Partner</option>
              <option value="Wife">Wife</option>
              <option selected value="husband">
                Husband
              </option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="uncle">Uncle</option>
              <option value="aunt">Aunt</option>
              <option value="cousin">Cousin</option>
              <option value="boss">Boss</option>
              <option value="employee">Employee</option>
              <option value="Friend">Friend</option>
            </select>
          </label>
          <br />
          <label>
            What is the occasion?
            <select
              onChange={(occasion) => setOccasion(occasion.target.value)}
              value={occasion}
            >
              <option value="Birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option selected value="get well">
                Get Well
              </option>
              <option value="welcome home">Welcome Home</option>
              <option value="mothers day">Mothers Day</option>
              <option value="fathers day">Fathers Day</option>
              <option value="new baby">New Baby</option>
              <option value="condolences">Condolences</option>
              <option value="congrats">Congrats</option>
              <option value="farewell">Farewell</option>
              <option value="graduation">Graduation</option>
              <option value="just because">Just Because</option>
              <option value="wedding">Wedding</option>
              <option value="thank you">Thank You</option>
              <option value="welcome">Welcome</option>
              <option value="thank you">Thank You</option>
              <option value="Valentines Day">Valentines Day</option>
              <option value="Christmas">Christmas</option>
              <option value="Happy Holidays">Happy Holidays</option>
              <option value="New Year">New Year</option>
              <option value="Easter">Easter</option>
              <option value="Thanksgiving">Thanksgiving</option>
              <option value="St.Patricks Day">St. Patricks Day</option>
              <option value="I'm sorry">Sorry</option>
            </select>
          </label>
          <br />
          <label>
            What Mood Are you in?
            <select onChange={(mood) => setMood(mood.target.value)}>
              <option value="Happy">Happy</option>
              <option value="Optimistic">Hopeful and Optimistic</option>
              <option value="Silly">Silly or Funny</option>
              <option value="Sympathy">Symathetic</option>
              <option value="Romantic">Romantic</option>
              <option value="Excited">Excited</option>
              <option value="Fearful">Unsure and Fearful</option>
            </select>
          </label>
          <br />
          <p>
            What themes would you like to talk about?(I need to put this in a
            loop)
          </p>
          <label>
            Love
            <input
              onChange={themeChange}
              type="checkbox"
              name="love"
              value="love"
            />
          </label>
          <label>
            Romance
            <input
              onChange={themeChange}
              type="checkbox"
              name="romance"
              value="romance"
            />
          </label>
          <label>
            Death
            <input type="radio" name="death" />
          </label>
          <label>
            Nature
            <input type="radio" name="nature" />
          </label>
          <label>
            Beauty
            <input type="radio" name="beauty" />
          </label>
          <label>
            Spirituality
            <input type="radio" name="beauty" />
          </label>
          <label>
            Aging
            <input type="radio" name="aging" />
          </label>
          <label>
            Desire
            <input type="radio" name="desire" />
          </label>
          <label>
            Identity
            <input type="radio" name="identity" />
          </label>
          <label>
            Travel
            <input type="radio" name="travel" />
          </label>
          <label>
            Dreams
            <input type="radio" name="dreams" />
          </label>
          <label>
            Recovery
            <input type="radio" name="recovery" />
          </label>
          <label>
            New Life
            <input type="radio" name="new life" />
          </label>
          <label>
            Disappointment
            <input type="radio" name="disappointment" />
          </label>
          <label>
            Immortality
            <input type="radio" name="immortality" />
          </label>
          <label>
            Coming of Age
            <input type="radio" name="coming of age" />
          </label>
          <label>
            Desire
            <input type="radio" name="desire" />
          </label>
          <label>
            Destiny
            <input type="radio" name="destiny" />
          </label>
          <label>
            Courage
            <input type="radio" name="courage" />
          </label>
          <label>
            Happiness
            <input type="radio" name="happiness" />
          </label>
          <label>
            God
            <input type="radio" name="god" />
          </label>
          <label>
            Friendship
            <input type="radio" name="friendship" />
          </label>
          <label>
            Heartbreak
            <input type="radio" name="heartbreak" />
          </label>
          <label>
            Imagination
            <input type="radio" name="imagination" />
          </label>
          <label>
            Tragedy
            <input type="radio" name="tragedy" />
          </label>
          <label>
            Memories
            <input type="radio" name="memories" />
          </label>
          <label>
            Rebirth
            <input type="radio" name="rebirth" />
          </label>
          <label>
            Seasons
            <input type="radio" name="seasons" />
          </label>
          <label>
            Secrets
            <input type="radio" name="secrets" />
          </label>
          <label>
            Peace
            <input type="radio" name="peace" />
          </label>
          <label>
            Pain
            <input type="radio" name="pain" />
          </label>
          <label>
            Earth
            <input type="radio" name="earth" />
          </label>
          <label>
            Faith
            <input type="radio" name="faith" />
          </label>
          <label>
            Forgiveness
            <input type="radio" name="forgiveness" />
          </label>
          <label>
            Afterlife
            <input type="radio" name="afterlife" />
          </label>
          <label>
            Joy
            <input type="radio" name="joy" />
          </label>
          <label>
            Purpose
            <input type="radio" name="purpose" />
          </label>
          <label>
            Regret
            <input type="radio" name="regret" />
          </label>
          <label>
            Innocence
            <input type="radio" name="innocence" />
          </label>
          <label>
            Duty
            <input type="radio" name="duty" />
          </label>
          <label>
            Change
            <input type="radio" name="change" />
          </label>
          <br />
          <label>
            What Style of Poem? (We should have helpers here.)
            <select
              onChange={(proseStyle) => setProseStyle(proseStyle.target.value)}
              value={proseStyle}
            >
              <option value="free verse">Free Verse</option>
              <option value="perfect rhyme">Perfect Rhyme</option>
              <option value="haiku">Haiku</option>
              <option value="sonnet">Sonnet</option>
              <option value="limerick">Limerick</option>
              <option value="villanelle">Villanelle</option>
              <option value="Ode">Ode</option>
            </select>
          </label>
          <br />
          <label>
            Would you like it to be from a different name:
            <input
              type="text"
              name="from"
              onChange={(from) => setFrom(from.target.value)}
              value={from}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>

        <div>
          {recipientFName} <br />
          {relationship}
          <br />
          {occasion}
          <br />
          {mood}
          <br />
          {themes.map((theme, index) =>
            index + 1 === themes.length ? `${theme}` : `${theme}, `
          )}
          <br />
          {proseStyle}
          <br />
          {from}
          <br />
        </div>
      </section>
    </main>
  );
};
