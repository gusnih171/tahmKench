import React, { useState } from 'react';
import './Slider.css'; 

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videos = [
        "https://www.youtube.com/embed/u9RM4HwwoKs",
        "https://www.youtube.com/embed/u00fZC1Z5Rc",
        "https://www.youtube.com/embed/VYlOFKLmiHA"
    ];

    const handleForward = () => {
        setCurrentIndex((currentIndex + 1) % videos.length);
    };

    const handleBackward = () => {
        setCurrentIndex((currentIndex - 1 + videos.length) % videos.length);
    };

    return (
        <div className="banner">
            <div className="slider">
                
                {videos.map((video, index) => (
                    <iframe 
                        key={index}
                        src={video}
                        title={`video-${index}`}
                        className={index === currentIndex ? 'active' : 'inactive'}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ))}
                <button id="backward" onClick={handleBackward} className="arrow left">&lt;</button>
                <button id="forward" onClick={handleForward} className="arrow right">&gt;</button>
            </div>
        </div>
    );
};

export default Slider;
