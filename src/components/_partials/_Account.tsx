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
}

export const Account: React.FC<_AccountProps> = (props) => {


  let navigate = useNavigate();

  const routeChange = () => {
  let path = `/card`;
  props.closeSide();
  navigate(path);
  window.scrollTo(0, 0);
  };

  const logout = () => {
    props.clearStorage();
    // navigate('/');
    props.closeSide();
}

  return (
    <div className="user">
        <div className="canva-body">
          <h2>Welcome {props.user.first_name}!</h2>
          <br></br>
          <img src={userImage} alt="Confirmation" className="user-image"/> 
          <br></br>
          <p className="canva_body">You can track your orders and access Bottie's promotions with your personal account.</p>
          <br></br>
          <h4>Orders</h4>    
          <br></br>
          <div className="orders-container">
            <h5>You have no orders yet.</h5>
            {/* <br></br> */}
            <SecondaryButton type="submit" class="secondary-button" name="Let's get started!" onChange={routeChange}/>
          </div>
          <br></br>
          <br></br>
          <button className="main_button" type="submit" onClick={logout}>Logout</button> 
       </div>   
  </div>
  );
};

