import React from 'react';
import './Info.css';
import Picture from './component/Icon.png';
const QInfo = () => {
  return (
    <div>
      <div className="p-flexbox">
            <p className="headline">Tahm Kench</p>
            <p className="underline">The Tongue</p>
            
           <div className="page-container">
            <div className="container">
              <div className="image_container">
              <img src={Picture} alt="Tahm Kench" />
              </div>
              
              <div className="text_container">
              <p className="text">
              The tongue of Tahm Kench, a monstrous appendage that slithers out from his cavernous mouth like a serpent from the depths. It is a grotesque, sinewy thing, slick with a dark, viscous slime that glistens in the dim light. The tongue moves with a life of its own, coiling and uncoiling, ready to lash out with the speed and precision of a whip.

When it strikes, it does so with a sickening crack, the force enough to shatter bone and rend flesh. The tip of the tongue is barbed, lined with tiny, razor-sharp hooks that latch onto its prey, ensuring there is no escape. The very sight of it is enough to freeze the blood in your veins, a reminder of the unending hunger and malevolent cunning of the River King.

In the dark corners of Bilgewater, tales are whispered of those who have felt the sting of Tahm Kench’s tongue, their screams echoing through the night as they are dragged into the depths, never to be seen again.
              </p>
              </div>
            </div>
            </div>
            </div>
      </div>
  )
}

export default QInfo