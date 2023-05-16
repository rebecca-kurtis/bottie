import React, { Fragment, useState } from "react";
import { HeroBanner } from "../components/PlantsPage/HeroBanner";
import { Login } from "../components/_partials/_Login";
import { PageTitle } from "../components/_partials/_PageTitle";

//import styling


//import components


interface ProfileProps {
  user?: any;
}

function getCurrentUser() {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
}


export const Profile: React.FC<ProfileProps> = ({user}) => {
  // console.log("user:", user)

const currentUser = getCurrentUser()
console.log("currentUser Name:", currentUser[0].first_name)

  // const [token, setToken] = useState()

  // if(!token){
  //     {return <Login setToken={setToken}/>}
  // }

  return (
    <Fragment>
      <div className="spacer-tag profile" />
      <HeroBanner
        message={"Find the perfect gift from our curated plants collection!"}
      />
      <PageTitle message={"Profile"} />
      <p>Name:</p>
      <p>{currentUser[0].first_name}</p>
      <p>{currentUser[0].last_name}</p>
    

    </Fragment>
  );
};
