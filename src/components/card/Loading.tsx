import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loading.css";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
  return (

     <div className="container">
    <div className="loading-container">
      <h2>Loading your custom card...</h2>
      <Spinner animation="border" role="status" className="spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>

    </div>
  );
};
