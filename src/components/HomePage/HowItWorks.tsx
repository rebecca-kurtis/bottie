import React from "react";
import "./HowItWorks.css";

//import photos
import num1 from "./HomePage_Images/num1.png";
import num2 from "./HomePage_Images/num2.png";
import num3 from "./HomePage_Images/num3.png";


interface HowItWorksProps {}

export const HowItWorks: React.FC<HowItWorksProps> = () => {
  return (
    <div className="how-it-works-block">
      <div className="how-it-works-title">
        <h3>How It Works</h3>
      </div>
      <div className="step-blocks-section">
        <div className="step-block">
          <img className="num1" src={num1} alt="Number One"></img>
          <p>Tell Bottie about you and the person you want to offer a present.</p>
        </div>
        <div className="step-block">
          <img className="num2" src={num2} alt="Number Two"></img>
          <p>Choose among the plants recommended for your gift.</p>
        </div>
        <div className="step-block">
          <img className="num3" src={num3} alt="Number Three"></img>
          <p>Get a personalized card for your special someone.</p>
        </div>
      </div>
    </div>
  );
};
