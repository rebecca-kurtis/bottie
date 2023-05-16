import React from "react";
import './Card.css';
import { PageTitle } from "../_partials/_PageTitle";
import { Step1CardList } from "./Step1CardList";


interface Step1Props {
  plant: any;
  setPlant: any;
  products?:any[];
}

export const Step1: React.FC<Step1Props> = ({plant, setPlant, products}) => {
  return (
    <div>
        <PageTitle message ="1 / 5" />
        <PageTitle message ="Select a plant from my personal recommendations" />
        <br></br>
        <br></br>
        <div className="container">
          <Step1CardList products={products} plant={plant} setPlant={setPlant}></Step1CardList>
        </div>
    </div>
  );
};