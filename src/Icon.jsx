import React, { useState } from 'react';
import TahmIcon from './component/Icon.png';
import './Icon.css';

const Icon = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    // Reset the animation after it completes
    setTimeout(() => setAnimate(false), 4000); // Adjust duration as needed
  };

  return (
    <div className="Icon-container" onClick={handleClick}>
      <img className={`IconTahm ${animate ? 'animate' : ''}`} src={TahmIcon} alt='Tahm'/>
    </div>
  );
}

export default Icon;
