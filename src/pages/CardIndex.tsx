import React, { Fragment } from "react";
import axios from "axios";
import { useState } from "react";
import "./CardIndex.css";

//import hooks
import useVisualMode from "../hooks/useVisualMode";

//import components
import { HeroBanner } from "../components/PlantsPage/HeroBanner";
import { MainButton } from "../components/MainButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { Loading } from "../components/card/Loading";

import { Step1 } from "../components/card/Step1";
// import { Step2 } from "../components/card/Step2";
import { Step3 } from "../components/card/Step3";
import { Step4 } from "../components/card/Step4";
import { Step5 } from "../components/card/Step5";
import { Step6 } from "../components/card/Step6";
import { Step7 } from "../components/card/Step7";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";


interface CardIndexProps {
  products?: any[];
  user?: any;
  recipient?: any;
  setRecipient: any;
  plant?: any;
  setPlant: any;
  cartCreation: any;
  handlePreValidationStep: any;
  handleRecipientCardSubmit: any;
  getAllRecipients: any;
}

const STEP1 = "STEP1";
// const STEP2 = "STEP2";
const STEP3 = "STEP3";
const STEP4 = "STEP4";
const STEP5 = "STEP5";
const STEP6 = "STEP6";
const STEP7 = "STEP7";
const LOADING = "LOADING";

export const CardIndex: React.FC<CardIndexProps> = ({ plant, setPlant,recipient, setRecipient, products, user, cartCreation, handlePreValidationStep, handleRecipientCardSubmit, getAllRecipients }) => {
  const { mode, transition } = useVisualMode(STEP1);
  // const [plant, setPlant] = useState({
  //   product_id: "",
  //   plant_name: "",
  //   image_url: "",
  //   description: "",
  //   price_in_cents: ""
  // });

  // const [recipient, setRecipient] = useState({
  //   first_name: "",
  //   last_name: "",
  //   relationship: "",
  //   phone: "",
  //   address: "",
  //   city: "",
  //   province: "",
  //   country: "",
  //   postal_code: "",
  // });
  const [relationship, setRelationship] = useState("Friend");
  const [occasion, setOccasion] = useState("Birthday");
  const [mood, setMood] = useState("Happy");
  const [proseStyle, setProseStyle] = useState("Ode");
  const [themes, setThemes] = useState([] as string[]);
  const [chatGPTMessage, setChatGPTMessage] = useState("");
  // const [recipientId, setRecipientId] = useState("");
  // const [orderId, setOrderId] = useLocalStorage("orderId", "");
  // // const [orderId, setOrderId] = useState('');
  // const [cartId, setCartId] = useState('');



  const relationshipOptions = [
    "Partner",
    "Wife",
    "Husband",
    "Father",
    "Mother",
    "Brother",
    "Sister",
    "Uncle",
    "Aunt",
    "Cousin",
    "Grandmother",
    "Grandfather",
    "Boss",
    "Employee",
    "Friend",
  ];
  const occasionOptions = [
    "Birthday",
    "Anniversary",
    "Get Well",
    "Sorry For Your Loss",
    "Welcome Home",
    "Mothers Day",
    "Fathers Day",
    "New Baby",
    "Condolences",
    "Congrats",
    "Farewell",
    "Graduation",
    "Just Because",
    "Wedding",
    "Thank-you",
    "Welcome",
    "Valentines Day",
    "Christmas",
    "Happy Holidays",
    "New Year",
    "Easter",
    "Thanksgiving",
    "St. Patricks Day",
    "I'm Sorry",
  ];
  const moodOptions = [
    "Happy",
    "Optimistic",
    "Silly",
    "Sympathetic",
    "Romantic",
    "Excited",
    "Fearful",
    "Regretful",
  ];
  const themeOptions = [
    "Love",
    "Romance",
    "Death",
    "Nature",
    "Beauty",
    "Spirituality",
    "Aging",
    "Identity",
    "Travel",
    "Dreams",
    "Recovery",
    "New Life",
    "Dissapointment",
    "Immortality",
    "Coming of Age",
    "Desire",
    "Destiny",
    "Courage",
    "Happiness",
    "God",
    "Friendship",
    "Heartbreak",
    "Imagination",
    "Tragedy",
    "Memories",
    "Rebirth",
    "Spring",
    "Winter",
    "Summer",
    "Autumn",
    "Secrets",
    "Peace",
    "Pain",
    "Earth",
    "Faith",
    "Forgiveness",
    "Afterlife",
    "Joy",
    "Purpose",
    "Regret",
    "Innocence",
    "Duty",
    "Change",
  ];
  const proseOptions = [
    "Free Verse",
    "Perfect Rhyme",
    "Haiku",
    "Sonnet",
    "Limerick",
    "Villanelle",
    "Ode",
  ];

  //themechange is based on checkmarks being on or off
  //if on then they are added to a string, if off they are removed.
  //TODO - limit this to 5 themes.
  const themeChange = (event: any) => {
    event.target.checked
      ? setThemes([...themes, event.target.value]) // counter + 1
      : setThemes(themes.filter((theme) => theme !== event.target.value)); // counter -1
  };

  const route =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/chatGPT";

  //handleGPTsubmit returns the ChatGPT call.
  async function handleGPTSubmit(event: any) {
    event.preventDefault();
    const prompt = {
      relationship,
      proseStyle,
      occasion,
      themes,
      mood,
    };
    try {
      const response = await axios.post(route, prompt);
      setChatGPTMessage(response.data.message)
      transition(STEP5);
    } catch (error) {
      console.error(error);
    }
  }

//   const recipientRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/recipients"


//   //handle recipient post to the database
//   const handleRecipientCardSubmit = () => {
//     axios.post(recipientRoute, recipient)
//     .then((response) => {
//       const recipientIdSQL = response.data[0].recipient_id;
//       setRecipientId(recipientIdSQL);
//   })
//   .catch((error) => {
//     if (error.response) {
//       alert(`Error! ${error.message}`);
//     } else if (error.request) {
//       console.log("network error");
//     } else {
//       console.log(error);
//     }
//   });
// };

// const handlePreValidationStep = () => {
//   const userId = user.user_id;
//   const validateRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/validate/" + userId

//   axios.get(validateRoute, userId)
//   .then((response) => {
//     const orderId = response.data[0].order_id;
//     setOrderId(orderId);
//     localStorage.setItem("orderId", JSON.stringify(orderId));
//     const cartId = response.data[0].cart_id;
//     setCartId(cartId);
//   })
//   .catch((error) => {
//     if (error.response) {
//       alert(`Error! ${error.message}`);
//     } else if (error.request) {
//       console.log("network error");
//     } else {
//       console.log(error);
//     }
//   });
// }


// const cartCreation = () => {

//   const productId = plant.product_id;
//   const recipientIdNumber = recipientId;
//   const cart_id = cartId;

//   const cartItem = {
//     cart_id: cart_id,
//     product_id: productId,
//     recipient_id: recipientIdNumber,
//   }
  
//   const cartItemRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/cart-items"

//   axios.post(cartItemRoute, cartItem)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     if (error.response) {
//       alert(`Error! ${error.message}`);
//     } else if (error.request) {
//       console.log("network error");
//     } else {
//       console.log(error);
//     }
//   });
// }



let navigate = useNavigate();
  
const routeChange = () => {
  let path = `/cart`;
  navigate(path);
  window.scrollTo(0, 0);
};

  return (
    <main className="card-index">
      <div className="spacer-tag plants" />
      <section>
        <HeroBanner message="Hello! I will help you to find the perfect gift for a special someone. Follow the steps below." />

        {mode === STEP1 && (
          <Fragment>
            <div className="index-body">
              <Step1 products={products} plant={plant} setPlant={setPlant} />
            </div>
            <div className="index-nav">
              <MainButton 
              onChange={() => {
                if (plant.plant_name.length < 1) {
                  alert("Please choose a plant!")
                  return
                }
                getAllRecipients()
                transition(STEP3)}} name="Next step" />
            </div>
          </Fragment>
        )}

        {/* {mode === STEP2 && (
          <Fragment>
            <div className="index-body">
              <Step2 buyer={buyer} setBuyer={setBuyer} setFrom={setFrom} />
            </div>
            <div className="index-nav">
              <SecondaryButton
                class="secondary-button"
                onChange={() => transition(STEP1)}
                name="Previous"
              />
              <div className="spacer"></div>
              <MainButton onChange={() => transition(STEP3)} name="Next step" />
            </div>
          </Fragment>
        )} */}

        {mode === STEP3 && (
          <Fragment>
            <div className="index-body">
              <Step3
                relationship={relationship}
                setRelationship={setRelationship}
                relationshipOptions={relationshipOptions}
                recipient={recipient}
                setRecipient={setRecipient}
              />
            </div>
            <div className="index-nav">
              <SecondaryButton
                class="secondary-button"
                onChange={() => transition(STEP1)}
                name="Previous"
              />
              <div className="spacer"></div>
              <MainButton onChange={() => {
                handleRecipientCardSubmit()
                transition(STEP4)
                }} name="Next step" />
            </div>
          </Fragment>
        )}

        {mode === STEP4 && (
          <Fragment>
            <div className="index-body">
              <Step4
                handleGPTSubmit={handleGPTSubmit}
                recipientFName={recipient.first_name}
                relationship={relationship}
                occasion={occasion}
                setOccasion={setOccasion}
                occasionOptions={occasionOptions}
                mood={mood}
                setMood={setMood}
                moodOptions={moodOptions}
                themes={themes}
                themeChange={themeChange}
                themeOptions={themeOptions}
                proseStyle={proseStyle}
                setProseStyle={setProseStyle}
                proseOptions={proseOptions}
                user={user}
              />
            </div>
            <div className="index-nav">
              <SecondaryButton
                class="secondary-button"
                onChange={() => transition(STEP3)}
                name="Previous"
              />
              <div className="spacer"></div>
              <button
                form="card-form-id"
                className="main_button"
                type="submit"
                onClick={(event) => {
                  transition(LOADING);
                  handleGPTSubmit(event);
                }}
              >
                Generate Message
              </button>
            </div>
          </Fragment>
        )}

        {mode === LOADING && (
          <Fragment>
            <div className="index-body">
              <Loading />
            </div>
          </Fragment>
        )}

        {mode === STEP5 && (
          <Fragment>
            <div className="index-body">
              <Step5
                chatGPTMessage={chatGPTMessage}
                recipientFName={recipient.first_name}
                user={user}
                plant={plant}
              />
            </div>
            <div className="index-nav">
              <SecondaryButton
                class="secondary-button"
                onChange={() => transition(STEP4)}
                name="Previous"
              />
              <div className="spacer"></div>
              <MainButton
                onChange={() => {
                  handlePreValidationStep()
                  transition(STEP6)
                }}
                name="Next Step"
              />
            </div>
          </Fragment>
        )}

        {mode === STEP6 && (
          <Fragment>
            <div className="index-body">
              <Step6 plant={plant} user={user}/>
            </div>
            <div className="index-nav">
              <SecondaryButton
                class="secondary-button"
                onChange={() => transition(STEP5)}
                name="Previous"
              />
              <div className="spacer"></div>
              <MainButton
                onChange={() => {
                  cartCreation()
                  transition(STEP7)
                }}
                name="Add to cart"
              />
            </div>
          </Fragment>
        )}

        {mode === STEP7 && (
          <Fragment>
            <div className="index-body">
              <Step7 />
            </div>
            <div className="index-nav">
              <SecondaryButton
                class="secondary-button"
                onChange={() => transition(STEP1)}
                name="Create another order"
              />
              <div className="spacer"></div>
              {/* Will need to be updated with a link to the cart */}
              <MainButton
                onChange={routeChange}
                name="Go to my cart"
              />
            </div>
          </Fragment>
        )}
      </section>
    </main>
  );
};
