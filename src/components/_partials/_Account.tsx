import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./User.css";
import { useNavigate } from "react-router-dom";
import userImage from "./images/user.png";
import { SecondaryButton } from "../SecondaryButton";


interface _AccountProps {
  closeSide: () => void;
  updateStorage: any;
  clearStorage: any;
  user?: any;
  orderId?: any;
}

export const Account: React.FC<_AccountProps> = ({closeSide, updateStorage, clearStorage, user, orderId}) => {
  
  console.log("orderId from account", orderId)
  console.log("localstorage from account", localStorage)

  let navigate = useNavigate();

  const routeChange = () => {
  let path = `/card`;
  closeSide();
  navigate(path);
  window.scrollTo(0, 0);
  };

  const logout = () => {
    clearStorage();
    // navigate('/');
    closeSide();
}

  return (
    <div className="user">
        <div className="canva-body">
          <h2>Welcome {user.first_name}!</h2>
          <br></br>
          <img src={userImage} alt="Confirmation" className="user-image"/> 
          <br></br>
          <p className="canva_body">You can track your orders and access Bottie's promotions with your personal account.</p>
          <br></br>
          <h4>Orders</h4>    
          <br></br>
          {!orderId &&
          <div className="orders-container">
            <h5>You have no order yet.</h5>
            <SecondaryButton type="submit" class="secondary-button" name="Let's get started!" onChange={routeChange}/>
          </div>
          }
          {orderId &&
          <div className="orders-container">
            <h5>Upcoming orders </h5>
            <p>#{orderId}</p>
          </div>
          }
          <br></br>
          <br></br>
          <button className="main_button" type="submit" onClick={logout}>Logout</button> 
       </div>   
  </div>
  );
};

