import React from 'react'
import "./HomePageBanner.css"

//import images
import redBegoniaImage from "./HomePage_Images/red-begonia-icon.png"
import bottieImage from "./HomePage_Images/bottie-icon.png"


interface HomePageBannerProps {

}

export const HomePageBanner: React.FC<HomePageBannerProps> = () => {
    return (
      <div className='home-page-banner'>
        <div className='home-page-banner-content'>
          <div className='red-begonia-icon'>
            <img className="red-begonia-img" src={redBegoniaImage} alt="Red Wing Begonia"></img>
          </div>
          <div className='home-banner-center'>
            <h1> Hello, I am Bottie. I will help you to find the perfect leafy gift. </h1>
            <p>In order to begin, tell me more about that person you want to offer a special gift.</p>
            <a href="/card" className="main_button">Let's get started!</a>
          </div>
          <div className='bottie-icon'>
            <img className="bottie-img" src={bottieImage} alt="Bottie"></img>
          </div>
        </div>
      </div>
    );
}