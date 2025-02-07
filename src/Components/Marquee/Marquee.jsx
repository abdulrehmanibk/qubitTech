import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee_container">
      <div className="marquee_wrapper">
        {[...Array(2)].map((_, i) => (
          <>
            <div className="marquee_item">Lorem, ipsum1.</div>
            <div className="marquee_item">Lorem, ipsum2.</div>
            <div className="marquee_item">Lorem, ipsum3.</div>
            <div className="marquee_item">Lorem, ipsum4.</div>
            <div className="marquee_item">Lorem, ipsum5.</div>
            <div className="marquee_item">Lorem, ipsum6.</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
