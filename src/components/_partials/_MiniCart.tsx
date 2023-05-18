import React, { useState } from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./User.css";
import { MiniCartCard } from "./_MiniCartCard";
import { SecondaryButton } from "../SecondaryButton";
import { MainButton } from "../MainButton";
import { useNavigate } from "react-router-dom";
import potImage from "./images/pot.png";


interface _MiniCartProps {
  products: any;
  closeSide: () => void;

}

export const MiniCart: React.FC<_MiniCartProps> = ({products, closeSide}) => {


const [cart, setCart] = useState(1)  

const product = products[0];

let navigate = useNavigate();

const cartRouteChange = () => {
let path = `/card`;
closeSide();
navigate(path);
window.scrollTo(0, 0);
};

const plantRouteChange = () => {
  let path = `/products`;
  closeSide();
  navigate(path);
  window.scrollTo(0, 0);
  };

  return (
    <div className="user">
       <div className="canva-body">
          <h2>Cart</h2>
          <br></br>
          {cart === null &&
            <div>
              <img src={potImage} alt="Empty pot" className="user-image"/> 
              <br></br>
              <br></br>
              <p className="canva_body">You have nothing in your cart. Why not start by looking into my currated plant selection?</p>
              <br></br>
              <MainButton type="submit" name="View all products" onChange={plantRouteChange}/>
            </div>
          }
          {cart !== null &&
            <div>
              <MiniCartCard products={products} />
              <MiniCartCard products={products} />
              <br></br>
              <br></br>
              <MainButton type="submit" name="Go to my cart" onChange={cartRouteChange}/>
            </div>
          }
      </div> 
    </div>
  );
};

