import React, { useState } from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./User.css";
import { MiniCartCard } from "./_MiniCartCard";
import { SecondaryButton } from "../SecondaryButton";
import { MainButton } from "../MainButton";
import { useNavigate } from "react-router-dom";


interface _MiniCartProps {
  products: any;
  closeSide: () => void;

}

export const MiniCart: React.FC<_MiniCartProps> = ({products, closeSide}) => {


const [cart, setCart] = useState(1)  

const product = products[0];

let navigate = useNavigate();

const routeChange = () => {
let path = `/card`;
closeSide();
navigate(path);
window.scrollTo(0, 0);
};


  return (
    <div className="user">
       <div className="canva-body">
          <h2>Cart</h2>
          <br></br>
          <br></br>

          {cart === null &&
            <div>
              <p className="canva_body">You can track your orders and access Bottie's promotions with your personal account.</p>
              <br></br>
              <h4>Orders</h4>
              <br></br>
              <div className="orders-container">
                <h5>Cart is null.</h5>
              </div>
            </div>
          }
          {cart !== null &&
            <div>
              <MiniCartCard products={products} />
              <MiniCartCard products={products} />
              <br></br>
              <br></br>
              <MainButton type="submit" name="Go to my cart" onChange={routeChange}/>
            </div>
          }
      </div> 
    </div>
  );
};

