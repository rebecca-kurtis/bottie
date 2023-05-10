import React from "react";
import { HeroBanner } from "../PlantsPage/HeroBanner";
import { Step1 } from "./Step1"


interface CardIndexProps {}

export const CardIndex: React.FC<CardIndexProps> = () => {
  return (
    <main>
      <div className="spacer-tag plants" />
      <section >
        <HeroBanner message="Hello! I will help you to find the perfect gift for a special someone. Follow the steps below."/>
        <div className="index-body">
          <Step1 />

        </div>
        


      </section>
    </main>
  );
};