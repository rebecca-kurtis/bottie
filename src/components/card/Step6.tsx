import React from 'react';
import './Card.css';
import { PageTitle } from "../_partials/_PageTitle";
import { ProductCard } from '../PlantsPage/ProductCard';

interface Step6Props {
  user?:any;
  plant?: any;
}

export const Step6: React.FC<Step6Props> = ({user, plant}) => {

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
            {user !== null &&
             <div>
                 <p className="form-label"><b>Name:</b> {user.first_name} {user.last_name}</p>
                 <p className="form-label"><b>Email:</b> {user.email}</p>
                 <p className="form-label"><b>Address:</b></p>
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
            <p className="form-label"><b>Name:</b> </p>
            <p className="form-label"><b>Email:</b> </p>
            <p className="form-label"><b>Address:</b></p>
            <p className="form-label"><b>Relation:</b></p>

          </div>
          
        </div>
     </div>
)};