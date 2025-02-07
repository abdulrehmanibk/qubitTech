import React from 'react'
import './Insights.css';
import Marquee from '../../Components/Marquee/Marquee';
import Contact from '../../Components/Contact/Contact';

const Insights = () => {
  return (
    <>  
    <div className="Insight_container">
        <div className="Insight_banner">
            <div className='img'>
            {/* <img src="/images/hero.svg" alt="" /> */}
            <h1>Success takes time</h1>
            </div>
            <div className="insight_banner_content" >
            <div>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis voluptatem ullam eaque, consequuntur voluptate nemo ut saepe omnis recusandae odit beatae deleniti, qui commodi maxime illo hic reprehenderit consectetur?</p>
            </div>
            <div className="Insight_banner_profile">
                <img src="" alt="" />
                <p>Lorem, ipsum.</p>
                <p>CEO</p>
            </div>
            </div>
        </div>        

       <Marquee />      

        <div className="insights_link_bar">
            <h2>Recent Articals</h2>
            <ul>
                <li>Learn</li>
                <li>Tools</li>
                <li>Tech</li>
                <li>Operations</li>
                <li>Inspiration</li>
                <li>News</li>
            </ul>
        </div>

        <div className="Insight_card_container">
        {Array(5).fill().map((_, index) => (
        <div key={index} className="Insight_card">
          <img src="/images/hero.svg" alt="" />
          <div className="insight_card_content">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima ex ipsum!</p>
            <div className="Insight_profile">
              <img src="" alt="" />
              <p>Lorem, ipsum. <br /> CEO</p>
            </div>
          </div>
        </div>
      ))}
        </div>


    </div>
        <Contact />
    </>
  )
}

export default Insights