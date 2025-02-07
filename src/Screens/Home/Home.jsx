import React, { useEffect, useRef, useState } from "react";
import TwoChild from "../../Components/TwoChild/TwoChild";
import Marquee from "../../Components/Marquee/Marquee";
import Slider from "../../Components/Slider/Slider";
import ServiceDemoData from "./serviceDemoData";
import Stats from "../../Components/Stats/Stats";
import appsData from "./casestudyDemoSata";
import testimonials from "./reviewsData";
import latestNews from "./latestNewsData";
import Contact from "../../Components/Contact/Contact";
const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [RefName, setRefName] = useState('');
  const ReviewRef = useRef(null);
  const ProjectsRef = useRef(null);
  const NewsRef = useRef(null);

  useEffect(() => {
    ReviewRef.current.scrollBy({
      left:
        8 * parseFloat(getComputedStyle(document.documentElement).fontSize), // -10rem to pixels
      behavior: "smooth",
    });    
    if (width < 450) {      
      ProjectsRef.current.scrollBy({
        left:
          6 * parseFloat(getComputedStyle(document.documentElement).fontSize), // -10rem to pixels
        behavior: "smooth",
      });
    }
  }, [])
  
  
  const nextSlide = (refname) => {
    refname.current.scrollBy({
      left:
        10 * parseFloat(getComputedStyle(document.documentElement).fontSize), // 10rem to pixels
      behavior: "smooth",
    });
  };

  const prevSlide = (refname) => {
    refname.current.scrollBy({
      left:
        -10 * parseFloat(getComputedStyle(document.documentElement).fontSize), // -10rem to pixels
      behavior: "smooth",
    });
  };
  return (
    <>
      <TwoChild
        imgs={<img src="/images/hero-.png"></img>}
        text={
          <>
            <h1>
              Empower Your Business with <span>Qubit Technologies</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit et labore eaque officiis. Placeat sit sed ex,
              deleniti corporis eos, inventore harum quae, libero adipisci
              molestiae quidem error nesciunt accusamus.
            </p>
            <button className="button2">Book Demo</button>
          </>
        }
      />
      <Marquee />
      <Slider>
        <div className="wraper_container" style={{padding:'.5rem'}}>
          <div className="wraper">
            {ServiceDemoData.map((item, index) => (
              <div key={index} className="item">
                {item.heading.split(" ").map((word, index) => (
                  <h1 key={index} style={{ lineHeight: "1.5rem" }}>
                    {word}
                    <br />
                  </h1>
                ))}
                <p>{item.description}</p>
                {item.icon && <span className="icon">{item.icon}</span>}{" "}
                {/* Display icon if available */}
                {item.list && (
                  <ul>
                    {item.list.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ul>
                )}
                {item.button && (
                  <div className="item_link">
                    <button className={index === 0 ? "button2" : "button1"}>
                      {item.button.text}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Slider>

      <TwoChild
        imgs={<img src="/images/hero.svg"></img>}
        text={
          <>
            <h1>
              Why Choose <span>Qubit Technologies</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit et labore eaque officiis. Placeat sit sed ex,
              deleniti corporis eos, inventore harum quae, libero adipisci
              molestiae quidem error nesciunt accusamus.
            </p>
            <button className="button2">Book a Demo</button>
          </>
        }
      />

      <Stats />

      <Slider>
        <div
          className="wraper_container"
          style={{
            maxHeight: "40rem",
            overflowY: "hidden",
            overflowX: "auto",
            backgroundColor: "var(--c1)",
          }}
          ref={ProjectsRef}
        >
          <div className="wraper" style={{ flexWrap: "nowrap" }}>
            {appsData.map((item, index) => (
              <>
                <div className="item2" key={index}>
                  <h1>{item.title}</h1>
                  <div className="item2_p">
                    {item.features.map((itemP, indexP) => (
                      <>
                        <p key={indexP}>{itemP}</p>
                      </>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div
          className="next_pre_container"
          style={{ justifyContent: "center" }}
        >
          <button onClick={() => prevSlide(ProjectsRef)} className="button3">
            &#10094;
          </button>
          <button className="button2">Explore Our Success Stories</button>
          <button onClick={() => nextSlide(ProjectsRef)} className="button1">
            &#10095;
          </button>
        </div>
      </Slider>

      <Slider>
        <div
          className="wraper_container"
          style={{ 
            backgroundColor: "transparent",
            maxHeight: "15rem",
            overflowY: "hidden",
            overflowX: "auto",
            borderRadius:'0',
            margin:'10rem auto',
            
           }}
           ref={ReviewRef}
        >
          <div className="wraper" style={{ flexWrap: "nowrap" }}>
            {testimonials.map((item, index) => (
            <div className="item3" key={index}>
              <div className="item3_img">
                <img src="images/hero.svg" alt="" />
              </div>
              <div className="item3_content">
                <h3>{item.name}</h3>
                <p>{item.role}</p>

                <p>{item.review}</p>
                <span>{item.date}</span>
              </div>
            </div>
            ))}
          </div>
        </div>
      </Slider>      
      
      <Slider>
      <div
          className="next_pre_container"
          style={{ justifyContent: "space-between" }}
        >
          <h2 style={{color:'var(--c3)'}}>Get The Latest In Insight</h2>
          <div style={{display:'flex', gap:'.5rem'}}>
          <button onClick={() => prevSlide(NewsRef)} className="button3">
            &#10094;
          </button>
          <button onClick={() => nextSlide(NewsRef)} className="button1">
            &#10095;
          </button>
          </div>
        </div>
        <div
          className="wraper_container"
          style={{ 
            backgroundColor: "transparent",
            maxHeight: "25rem",
            overflowY: "hidden",
            overflowX: "auto",
            borderRadius:'0',
            margin:'.2rem auto'
           }}
           ref={NewsRef}
        >
          <div className="wraper" style={{ flexWrap: "nowrap" }}>
            {latestNews.map((item, index) => (
           <div className="item4" key={index}>
            <div className="item4_img" style={{
              background:"url('images/hero.svg')",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              }}></div>

            <p>{item.author}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
           </div>
            ))}
          </div>
        </div>
      </Slider>

      <Contact />
    
    </>
  );
};

export default Home;
