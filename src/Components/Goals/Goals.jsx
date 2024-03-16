import React from 'react'
import './Goals.css'
import { MdOutlineDone } from "react-icons/md";
import { IoBagCheckSharp, IoPeopleCircle  } from "react-icons/io5";


const Goals = () => {
  return (
    <div className='goals_container'>
        <div className="goals">
            <h1>Why Us</h1>
            <p>it is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem
            </p>
        </div>

        {/* Achivements */}
        <div className="ratings">
            <div className="ratings_cards">
                <div className="ratings_card">
                    <MdOutlineDone 
                    style={{ backgroundColor: 'blue',
                             color: 'white', 
                             borderRadius: '50%', 
                             padding: '10px' }} />
                    <span>100+<br />Batch Complete</span>
                </div>
                <div className="ratings_card">
                    <IoBagCheckSharp />
                    <span>50+<br />Active Batches</span>
                </div>
                <div className="ratings_card">
                    <IoPeopleCircle  />
                    <span>10,000+<br />Student Satisfied</span>
                </div>
                <div className="ratings_card">
                    <IoPeopleCircle  />
                    <span>10+<br />Course Modules</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Goals