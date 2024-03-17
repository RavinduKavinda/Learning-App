import React, { useRef, useState } from 'react';
import './Whyus.css'
import videoSource from './../../Assets/Mint Green Home SchoolRemote Learning 169 Video.mp4'
import { FaPlay } from "react-icons/fa";

const Whyus = () => {

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
    <div>
        <div className="whyus_container" id='whyus'>
            {/* Why Us description */}
            <div className="whyus_title">
                <h1>Why Us</h1>
                <p>it is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem
                </p>
            </div>

            {/* Video Section */}
            <div className="whyus_desc">
                <div className="whyus_desc_left">
                    <div className="video-container" onClick={togglePlay}>
                        <video className="video" ref={videoRef} width="320" height="180" >
                            <source src={videoSource} type="video/mp4" />
                        </video>
                        {!isPlaying && (
                            <div className="play-icon">
                            <FaPlay />
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="whyus_desc_right">
                    <h1>Web Development</h1>
                    <p>it is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem
                    </p><br />
                    <p>it is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem
                    </p>
                    <br />
                    <button className='btn'>Get More</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Whyus