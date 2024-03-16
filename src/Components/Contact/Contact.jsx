import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
        <div className="left">
            <h1>Contact Us!</h1>
            <p>Feel free to contact us at any time. We are here to help you.</p>
        </div>
        <div className="right">
            <div className="form">
                <form>
                    <input type="email" placeholder="Email here" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact