import React from 'react'
import Contact from '../../Components/Contact/Contact'
import './Contact.css';

const ContactPage = () => {
  return (
    <>
        <h1 className='contact_heading'>
          Get in touch with us. <br />We're here to assist you.
        </h1>
        <Contact 
        styles={{
          border:'none',
          padding:'0',
          margin:'5rem auto'
        }}
        />
        <div className="contact_bottom">
          <div className="contact_bottom_list">
            <h1>We are always happy to assist you</h1>
          </div>
          <div className="contact_bottom_list">
            <ul>
              <li>Email Address</li>
              <li>---</li>
              <li>help@info.com</li>
              <li>Assistance hours:</li>
              <li>Monday - Friday 6 am to 8pm EST</li>
            </ul>
          </div>          
          <div className="contact_bottom_list">
            <ul>
              <li>Number</li>
              <li>---</li>
              <li>(808) 998-34256</li>
              <li>Assistance hours:</li>
              <li>Monday - Friday 6 am to 8pm EST</li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default ContactPage