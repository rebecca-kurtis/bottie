import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./User.css";
import { useNavigate } from "react-router-dom";
import userImage from "./images/user.png";

// import useLoginToggle from "../../hooks/useLoginToggle";


interface _AccountProps {
  // onCancel : React.MouseEventHandler<HTMLButtonElement> | undefined;
  // onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
  closeSide: () => void;
}

export const Account: React.FC<_AccountProps> = ({closeSide}) => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
    closeSide()
}

function getCurrentUser() {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
}
const currentUser = getCurrentUser()

  return (
    <div className="user">
        <h2>Welcome {currentUser[0].first_name}!</h2>
        <br></br>
        <br></br>
        <div className="canva-body">
          <p>You can track your orders and access Bottie's promotions with your personal account.</p>
          <img src={userImage} alt="Confirmation" className="user-image"/> 
          <h3>Orders</h3>    
          <div className="orders-container">
            <p className="white-text">You have no orders yet.</p>
            <a href="/card" className="secondary-button white-text">Let's get started!</a>
          </div>
          <br></br>
          <br></br>
          <button className="secondary-button" type="submit" onClick={logout}>Logout</button>
        </div>   
  </div>
  );
};

