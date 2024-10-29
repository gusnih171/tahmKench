import React, { useEffect, useState } from 'react';
import './AudioMusic.css';
import Music from './component/Soundtrack.mp3';
const AudioMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef(null);

    class MorphedSVG {
        constructor(svgId, firstPath, secondPath, styleClass) {
            this.elem = document.getElementById(svgId);
            if (!this.elem) {
                console.error(`Element with id ${svgId} not found`);
                return;
            }
            this.path = this.elem.querySelector('path');
            if (!this.path) {
                console.error(`Path element not found in SVG with id ${svgId}`);
                return;
            }
            this.anim = this.path.querySelector('animate');
            if (!this.anim) {
                console.error(`Animate element not found in path of SVG with id ${svgId}`);
                return;
            }
            this.animDur = parseFloat(this.anim.getAttribute('dur')) * 1000;

            this.originalPath = this.path.getAttribute('d');
            this.firstPath = firstPath;
            this.secondPath = secondPath;
            this.state = MorphedSVG.STATE_1;
            this.styleClass = styleClass;

            this.timeout = null;
        }

        static STATE_1 = true;
        static STATE_2 = false;

        toState(state) {
            if (state === this.state) return;

            switch (state) {
                case MorphedSVG.STATE_1:
                    this._set(this.firstPath, this.secondPath, this.firstPath);
                    if (this.styleClass) this.elem.classList.add(this.styleClass);
                    break;

                case MorphedSVG.STATE_2:
                    this._set(this.secondPath, this.firstPath, this.secondPath);
                    if (this.styleClass) this.elem.classList.remove(this.styleClass);
                    break;
            }

            this.state = state;
            this.anim.beginElement();

            if (this.originalPath && this.animDur) {
                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(this._resetOriginal.bind(this), this.animDur);
            }
        }

        toggle() {
            this.toState(!this.state);
        }

        _set(d, from, to) {
            this.path.setAttribute('d', d);
            this.anim.setAttribute('from', from);
            this.anim.setAttribute('to', to);
        }

        _resetOriginal() {
            if (this.state === MorphedSVG.STATE_1)
                this._set(this.originalPath, '', '');
        }
    }

    const PAUSE_PATH_2 = 'M9,8 L14,8 14,24 9,24 9,8 M19,8 L24,8 24,24 19,24 19,8';
    const PLAY_PATH_2 = 'M26,16 L26,16 11,16 11,8 26,16 M26,16 L26,16 11,24 11,16 26,16';

    useEffect(() => {
        const theButtonVer = new MorphedSVG('play-svg-2', PLAY_PATH_2, PAUSE_PATH_2);

        const handleClick = () => {
            theButtonVer.toggle();
            setIsPlaying(prevState => !prevState);
        };

        if (theButtonVer.elem) {
            theButtonVer.elem.parentNode.addEventListener('click', handleClick);

            return () => {
                theButtonVer.elem.parentNode.removeEventListener('click', handleClick);
            };
        }
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                console.log('Playing audio');
                audioRef.current.play().catch(error => {
                    console.error('Error playing audio:', error);
                });
            } else {
                console.log('Pausing audio');
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <div className="right-corner">
            <button className="buttonPlay">
                <svg id='play-svg-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                    <path d='M11,8 L26,16 11,24 11,8'>
                        <animate attributeName='d' fill='freeze' dur='0.2s' calcMode='spline' keySplines='0.19 1 0.22 1' />
                    </path>
                </svg>
            </button>
            <audio ref={audioRef} src={Music} loop />
        </div>
    );
};

export default AudioMusic;
