import React from 'react'
import './Contact.css'
const Contact = ({styles}) => {
  return (
    
    <>
        <div className="contatct_container" style={styles}>
            <div className="input_container">
            <input type="text" id='name' placeholder='YOUR NAME'/>
            {/* <label htmlFor="name"> YOUR NAME</label> */}
            </div>
            <div className="input_container">
            <input type="email" id='email' placeholder='YOUR EMAIL'/>
            {/* <label htmlFor="email"> YOUR EMAIL</label> */}
            </div>            
            <div className="input_container">
            <input type="number" id='number' placeholder='PHONE NUMBER'/>
            {/* <label htmlFor="number"> PHONE NUMBER</label> */}
            </div>            
            <div className="input_container">
            <textarea id='message'  placeholder='MESSAGE' />
            {/* <label htmlFor="message"> MESSAGE</label> */}
            </div>
            <div className="input_container">
            <button className='button2'>Leave us a Message</button>
            </div>
        </div>
    </>
  )
}

export default Contact