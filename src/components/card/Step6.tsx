import React from 'react';
import './Card.css';
import { PageTitle } from "../_partials/_PageTitle";
import { ProductCard } from '../PlantsPage/ProductCard';

interface Step6Props {
  user?:any;
  plant?: any;
}

export const Step6: React.FC<Step6Props> = (props) => {

   const plant = props.plant;
   const user = props.user;

    return (
      <div>
        <PageTitle message ="5 / 6" />
        <PageTitle message ="Validate your order and add it to your cart" />
        <br></br>
        <br></br>
        <div className="container">
          <div className="colonne">
            <h3>You</h3>
            <br></br>
            {props.user !== null &&
             <div>
                 <p className="form-label">Name: {user.first_name} {user.last_name}</p>
                 <p className="form-label">Email: {user.email}</p>
                 <p className="form-label">Address:</p>
                 <p className="form-label">{user.address} ,</p>
                 <p className="form-label">{user.city} , {user.state}</p>
                 <p className="form-label">{user.state} , {user.country}</p>
                 <p className="form-label">{user.postal_code}</p>
            </div>
            }

            <br></br>
            <h3>The Plant</h3>
            <ProductCard 
              key={plant.id} 
              name={plant.plant_name} 
              description={plant.description} 
              price={plant.price_in_cents.toString()}
              imageSrc={plant.image_url}/>
          </div>
         
          <div className="colonne">
            <h3>The recipient</h3>
            <br></br>
            {/* ////////////This part to be updated with recipient info//////////// */}
            <p className="form-label">Name: </p>
            <p className="form-label">Email: </p>
            <p className="form-label">Address:</p>
            <p className="form-label">Relation:</p>

          </div>
          
        </div>
     </div>
)};