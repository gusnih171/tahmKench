import React from 'react';
import './Info.css';
import Picture from './component/Grey.jpg';
const EInfo = () => {
  return (
    <div>
       <div className="p-flexbox">
      <p className="headline">Tahm Kench</p>
      <p className="underline">Scales From The Abyss</p>
      
    <div className="page-container">
            <div className="container">
              <div className="image_container">
              <img src={Picture} alt="Tahm Kench" />
              </div>
              <div className="floatingText">
              <div className="text_container">
              <p className="text">
              Touching Tahm Kench's skin is like running your fingers over the frozen scales of a creature that has dwelled in the murkiest depths of the river for eons. His scales are cold to the touch—unnaturally so—as if they have never known the warmth of sunlight. The chill they emanate isn’t just skin-deep; it feels as though it seeps into your bones, freezing your blood and clawing at your nerves with a biting numbness. Each scale is slick with a thin sheen of brackish slime, making your hand recoil in disgust as the viscous muck clings to your skin. It’s like touching the decayed flesh of something long dead, yet disturbingly alive, pulsing with a faint, sickly rhythm just beneath the surface.

The texture is uneven and jagged, with scales that overlap like shards of broken glass. Some are cracked and rough to the touch, as though worn down by countless years of devouring the desperate and the damned, while others are smooth and sharp, slicing into your skin like the edge of a razor. You can feel the ancient hunger that radiates from him, a gnawing emptiness that seems to draw the heat and vitality from your very flesh, feeding some deep, insatiable void. His skin shifts subtly beneath your fingers, almost as if it were alive and aware, squirming and twisting as though it could peel away from his body and slither across your hand like a serpent.

And then there’s the smell—a foul, briny stench that clings to the scales like a coating of rot. It’s a scent of stagnant water and decomposing fish, mingled with something far worse, an acrid reek that burns at the back of your throat and forces bile to rise. It’s the smell of a darkness that lurks beneath the surface, waiting to pull you under and swallow you whole. As you draw your hand away, the cold remains, as if a part of him lingers on your skin, a mark of the River King’s touch that you cannot wash away, no matter how hard you try.

It’s a reminder, a warning—once Tahm Kench has laid his cold, clammy scales upon you, you are already halfway to being consumed.
              </p>
              </div>
            </div>
            </div>
    </div>
    </div>
    </div>
  )
}

export default EInfo