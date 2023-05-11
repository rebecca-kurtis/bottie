import React from "react";

//import styling
import "./Home.css"

//import components
import { HomePageBanner } from "../components/HomePage/HomePageBanner";
import { HowItWorks } from "../components/HomePage/HowItWorks";
import { FavouriteProducts } from "../components/HomePage/FavouriteProducts";

// interface HomeProps {
//   products?:{[
//     product_id: number,
//     drawing_url: string,
//     image_url:string,
//     name: string,
//     latin_name:string,
//     description:string,
//     intended_for: string[],
//     temp:string,
//     water: string,
//     height: string,
//     sun: string,
//     sun_description:string,
//     water_description:string,
//     price_in_cents:number,
//     invetory:number,
//     modified_date:Date,
//   ]: any;}
// }

interface HomeProps {
  products?:any[];
}

export const Home: React.FC<HomeProps> = ({products}) => {
  console.log("home products:", products);
  return (
    <main>
      <div className="spacer-tag home" />
      <section >
        <HomePageBanner />
        <HowItWorks />
        <FavouriteProducts 
        products={products} />
      </section>
    </main>
  );
};
