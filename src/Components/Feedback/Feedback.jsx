import React from 'react'
import './Feedback.css'
import { FaArrowRight } from 'react-icons/fa'
import feedback from './../../Assets/feedback.png'
import { LiaStarSolid } from "react-icons/lia";


const Feedback = () => {
  return (
    <div className="feedback_container">
        <div className="feedback_head">
            <div className="left_feed">
                <h1>Our Students Feedback</h1>
                <p>At Learning Exp. We are commited to providing you with a superior Learning experience that empowers you to achieve
                    your goals in the most efficient way possible. But don't just take our word for it, hear what our students have to
                    say.
                </p>
            </div>
            <div className="right_feed">
                <span>Read More </span> <FaArrowRight />
            </div>
        </div>

        <div className="feedback">
            <div className="left_feedbback">
                <img src={feedback} alt="" />
            </div>

            <div className="right_feedback">
                <div className="ratings_stars">
                    {/* Render five Stars */}
                    {[...Array(5)].map((_, index) => (
                        <LiaStarSolid key={index} style={{ fontSize: '30px', marginRight:'10px', color:'lightgreen'}} />
                    ))}
                </div>

                <p>“The best decision of my life”</p>
                <h4>React</h4>
                <span>Project Manager <a href="">@Learning.Com</a></span>

            </div>
        </div>


    </div>
  )
}

export default Feedback