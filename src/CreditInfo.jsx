import React from 'react';
import './CreditInfo.css';
import Picture from './component/CreditsScene.jpg';
import Slider from './Slider';

const CreditInfo = () => {
  return (
    <div>
       <div className="p-flexbox">
    <p className="headlines">Tahm Kench</p>
    <p className="underlines">Credits</p>
    
    <div className="page-containerInfo">
      <div className="containerInfo">
        <div className="image_text_container">
          <div className="image_container">
            <img src={Picture} alt="Tahm Kench" />
          </div>
          <div className="nofloatingText">
            <p className="textInfo">
              All visual content, including videos and images, used in this project are not owned by me. They are utilized solely for personal use and as a tribute to the League of Legends character, Tahm Kench.
              League of Legends and all related assets are the property of Riot Games, Inc. This project is not affiliated with, endorsed, or sponsored by Riot Games, Inc.
            </p>
          </div>
        </div>
        <div className="slider-container">
          <Slider />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default CreditInfo;
