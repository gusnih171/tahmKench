import React, { useState, useRef, useEffect, useReducer } from 'react';
import W from './component/W.mp4';
import Start from './component/Home.mp4';
import R from './component/R.mp4';
import E from './component/E.mp4';
import Q from './component/Q.mp4';
import Credit from './component/Credit.mp4';
import './Background.css';
import HomeInfo from './HomeInfo';
import Tahm3D from './Tahm3D.jsx';
import QInfo from './QInfo.jsx';
import WInfo from './WInfo.jsx';
import EInfo from './EInfo.jsx';
import RInfo from './RInfo.jsx';
import CreditsInfo from './CreditInfo.jsx';

const videoSources = {
  Start,
  Q,
  W,
  E,
  R,
  Credit,
};

const Background = () => {
  const [currentVideo, setCurrentVideo] = useState(videoSources.Start);
  const [visibleInfo, setVisibleInfo] = useState('Home');
  const videoRef = useRef(null);
  const modelRef = useRef(null);
  const updateVisibleInfo = (video) => {
    setCurrentVideo(video);
    switch (video) {
      case videoSources.Q:
        setVisibleInfo('Q');
        if (modelRef.current) {
          modelRef.current.playSpell4Long(); // Trigger the Spell4_Long animation
          
        }
        break;
      case videoSources.W:
        setVisibleInfo('W');
        if (modelRef.current) {
          modelRef.current.playTaunt(); // Trigger the Taunt animation
        }
        break;
      case videoSources.E:
        setVisibleInfo('E');
        if (modelRef.current) {
          modelRef.current.playE(); // Trigger the Spell1_Up animation
        }
        break;
      case videoSources.R:
        setVisibleInfo('R');
        if (modelRef.current) {
          
          modelRef.current.playR(); // Trigger the R animation
        }
        break;
      case videoSources.Credit:
        setVisibleInfo('Credits');
        if (modelRef.current) {
          modelRef.current.playJoke(); // Trigger the Joke animation
        }
        break;
      default:
        setVisibleInfo('Home');
        if (modelRef.current) {
          modelRef.current.playLaugh(); // Trigger the Laugh animation
        }
        break;
    }
  };

  const handleHomeClick = () => {
    updateVisibleInfo(videoSources.Start);
  };

  useEffect(() => {
    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      currentVideoRef.src = currentVideo;
      currentVideoRef.load();

      currentVideoRef.onloadeddata = () => {
        currentVideoRef.play().catch(error => {
          console.error("Error attempting to play video:", error);
        });
      };
    }
  }, [currentVideo]);

  return (
    <div className="video-background">
      <video ref={videoRef} autoPlay loop muted>
        <source src={currentVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="button-container">
        <button className="startCss" onClick={handleHomeClick}>Home</button>
        <button className="qCss" onClick={() => updateVisibleInfo(videoSources.Q)}>Q</button>
        <button className="wCss" onClick={() => updateVisibleInfo(videoSources.W)}>W</button>
        <button className="eCss" onClick={() => updateVisibleInfo(videoSources.E)}>E</button>
        <button className="rCss" onClick={() => updateVisibleInfo(videoSources.R)}>R</button>
        <button className="creditsCss" onClick={() => updateVisibleInfo(videoSources.Credit)}>Credits</button>
      </div>
      {visibleInfo === 'Home' && <HomeInfo />}
      {visibleInfo === 'Q' && <QInfo />}
      {visibleInfo === 'W' && <WInfo />}
      {visibleInfo === 'E' && <EInfo />}
      {visibleInfo === 'R' && <RInfo />}
      {visibleInfo === 'Credits' && <CreditsInfo />}
      <Tahm3D ref={modelRef} />
    </div>
  );
};

export default Background;
