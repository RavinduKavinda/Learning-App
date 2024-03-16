import React, { useRef, useState } from 'react';
import './Hero.css';
import videoSource from './../../Assets/Mint Green Home SchoolRemote Learning 169 Video.mp4'
import { FaArrowRight, FaPlay } from "react-icons/fa"; // Import necessary icons


const Hero = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

     // Toggle video playback
    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
        video.play();
        setIsPlaying(true);
        } else {
        video.pause();
        setIsPlaying(false);
        }
    };

  return (
    <div className='hero'>
        <div className="container">
            <div className="hero-left">
                <div className="hero-text">
                    <h1>We Create Learning Experience With Excellent Technology.</h1>
                    <p>Unlimited Access To 100+ World-Class Cources, Hands-On Projects,
                        And Jpb-Ready Certificate Programs -<br/> All Included in Your Subscription</p>
                    <button className='btn'>Book Demo Class</button>
                    <a href="#" >
                        <span className="link">Explore More</span>
                        <FaArrowRight />
                    </a>
                </div>
            </div>
            <div className="hero-right">
                <div className="video-container" onClick={togglePlay}>
                    <video className="video" ref={videoRef} width="320" >
                        <source src={videoSource} type="video/mp4" />
                    </video>
                    {!isPlaying && (
                        <div className="play-icon">
                        <FaPlay />
                        </div>
                    )}
                </div>
            </div>
        </div>
        
        <svg className='waves'
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 1440 320">
                <path fill="lime" fill-opacity="1" d="M0,32L80,48C160,64,320,96,480,133.3C640,171,800,213,960,197.3C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <svg className='waves' xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,32L80,58.7C160,85,320,139,480,176C640,213,800,235,960,213.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
    </div>
  )
}

export default Hero