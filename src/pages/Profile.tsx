import React, { Fragment, useState } from "react";
import { HeroBanner } from "../components/PlantsPage/HeroBanner";
import { Login } from "../components/_partials/_Login";
import { PageTitle } from "../components/_partials/_PageTitle";

//import styling


//import components


interface ProfileProps {
  user?: any;
}

export const Profile: React.FC<ProfileProps> = ({user}) => {
  console.log("user:", user)

  const [token, setToken] = useState()

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
      <p>{user.first_name}</p>
    

    </Fragment>
  );
};
