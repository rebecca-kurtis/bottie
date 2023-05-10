import React, { Fragment } from "react";
import { useState } from "react";
import { HeroBanner } from "../PlantsPage/HeroBanner";
import { Step1 } from "./Step1"
import useVisualMode from "../../hooks/useVisualMode";
import { MainButton } from "../MainButton";
import { SecondaryButton } from "../SecondaryButton";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";
import { Step6 } from "./Step6";


interface CardIndexProps {}

const STEP1 = "STEP1";
const STEP2 = "STEP2";
const STEP3 = "STEP3";
const STEP4 = "STEP4";
const STEP5 = "STEP5";
const STEP6 = "STEP6";

export const CardIndex: React.FC<CardIndexProps> = () => {

  const { mode, transition, back } = useVisualMode(STEP1);

  return (
    <main>
      <div className="spacer-tag plants" />
      <section >
        <HeroBanner message="Hello! I will help you to find the perfect gift for a special someone. Follow the steps below."/>

        {mode === STEP1 && (
          <Fragment>
            <div className="index-body">
              <Step1 />
            </div>
            <div className="index-nav">
              <MainButton onChange={() => transition(STEP2)} name="Next step"/>   
            </div>
          </Fragment>
        )}

        {mode === STEP2 && (
          <Fragment>
            <div className="index-body">
              <Step2 />
            </div>
            <div className="index-nav">
              <SecondaryButton class="secondary-button" onChange={() => transition(STEP1)} name="Previous" />
              <MainButton onChange={() => transition(STEP3)} name="Next step"/>   
            </div>
          </Fragment>
        )}

        {mode === STEP3 && (
          <Fragment>
            <div className="index-body">
              <Step3 />
            </div>
            <div className="index-nav">
              <SecondaryButton class="secondary-button" onChange={() => transition(STEP2)} name="Previous" />
              <MainButton onChange={() => transition(STEP4)} name="Next step"/>   
            </div>
          </Fragment>
        )}

        {mode === STEP4 && (
          <Fragment>
            <div className="index-body">
              <Step4 />
            </div>
            <div className="index-nav">
              <SecondaryButton class="secondary-button" onChange={() => transition(STEP3)} name="Previous" />
              <MainButton onChange={() => transition(STEP5)} name="Next step"/>   
            </div>
          </Fragment>
        )}

        {mode === STEP5 && (
          <Fragment>
            <div className="index-body">
              <Step5 />
            </div>
            <div className="index-nav">
              <SecondaryButton class="secondary-button" onChange={() => transition(STEP4)} name="Previous" />
              <MainButton onChange={() => transition(STEP6)} name="Add to cart"/>   
            </div>
          </Fragment>
        )}

        {mode === STEP6 && (
          <Fragment>
            <div className="index-body">
              <Step6 />
            </div>
            <div className="index-nav">
              <SecondaryButton class="secondary-button" onChange={() => transition(STEP5)} name="Previous" />
              
              {/* Will need to be updated with a link to the cart */}
              <MainButton onChange={() => transition(STEP6)} name="Go to my cart"/>   
            </div>
          </Fragment>
        )}

      </section>
    </main>
  );
};

