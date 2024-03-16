import React from 'react'
import './Services.css'
import services01 from '../../Assets/service01.png'
import services02 from '../../Assets/service02.png'
import services03 from '../../Assets/service03.png'

const Services = () => {
  return (
    <div className="service_container">
        {/* service description */}
        <div className="services">
            <h1>We provide various kind of learning modules for you</h1>
            <p>it is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem
            </p>
        </div>

        {/* service cards */}
        <div className="services_cards">
            <div className="left">
                <img src={services01} alt="" />
                <h1>Web Development</h1>
                <p>it is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem
                </p>
            </div>
            <div className="middle">
              <img src={services02} alt="" />
                <h1>Web Development</h1>
                <p>it is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem
                </p>
            </div>
            <div className="right">
              <img src={services03} alt="" />
                  <h1>Web Development</h1>
                  <p>it is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem
                  </p>
            </div>
        </div>

    </div>
  )
}

export default Services