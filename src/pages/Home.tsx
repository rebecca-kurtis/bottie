import React from "react";

//import styling
import "./Home.css"

//import components
import { HomePageBanner } from "../components/HomePage/HomePageBanner";
import { HowItWorks } from "../components/HomePage/HowItWorks";
import { FavouriteProducts } from "../components/HomePage/FavouriteProducts";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <main>
      <div className="spacer-tag home" />
      <section >
        <HomePageBanner />
        <HowItWorks />
        <FavouriteProducts />
      </section>
    </main>
  );
};
