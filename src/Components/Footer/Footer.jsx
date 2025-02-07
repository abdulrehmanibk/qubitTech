import React from 'react'
import './Footer.css';
import { NavLink } from 'react-router-dom';
// import features from '../../Screens/AdditionalLinks/additionalLinksData';
// import { ServiceData } from '../../Screens/Services/ServicesData';

const Footer = () => {

  return (
    <>
        <footer className="footer">
        {/* <hr></hr> */}
        <div className="footer_content">
        <div className="footer_intro">
            {/* <img src="/images/fgc.jpeg" alt="" /> */}
            <h1>Don't leave just yet, <br /> Eplore thise resources!</h1>
        </div>
        <div className="footer_services">
            <ul>
                <li>Company</li>
                <li>Services</li>
                <li>About QUBIT</li>
                <li>Case Studies</li>
                <li>Insights</li>
                <li>Contact Us</li>
            </ul>
        </div>
                
        <div className="footer_services">
            <ul>
                <li>Services</li>
                <li>Data Base Administration</li>
                <li>Mobile App Development</li>
                <li>Website Development</li>
                <li>UI/UX Design</li>
                <li>Markettin</li>
            </ul>
        </div>
        
        <div className="footer_services">
            <ul>
                <li>Subscribe to our newslatter</li>
                <li>Be the first to receive exiting news, insder tips and special promotions.</li>
                <div>
                <input type='email'  placeholder='example@email.com' />
                <button className='button1'>Subscribe</button>
                </div>
            </ul>
        </div>
        </div>
    </footer>
    </>
  )
}

export default Footer;