import React, { useContext } from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { NavIconContext } from '../../Context/NavIcon'
// import { ServiceData } from '../../Screens/Services/ServicesData';

const Navbar = () => {
    const {isResponsiveNav, handleNav} = useContext(NavIconContext)


  return (
    <>
      <nav>
        <Link className="logo" to={'/'}>
          {/* <img src="/images/jokerlogo.jpeg" alt="" /> */}
          <p>QUBIT TECHNOLOGIES</p>
        </Link>
        <div className="navlinks">
          <ul className="links">
            <li className="link">
            <i class="fa-solid fa-book-open"></i>
            <NavLink to={`/`} className={"NavLinks"}>
            Services
            </NavLink>
            </li>
            <li className="link">
            <i class="fa-solid fa-building"></i>
              <NavLink to={"/"} className={"NavLinks"}>
                About Us
              </NavLink>
            </li>
            <li className="link">
            <i class="fa-regular fa-circle-user"></i>
              <NavLink to={"/"} className={"NavLinks"}>
                Case Studies
              </NavLink>
            </li>
            <li className="link">
            <i class="fa-solid fa-credit-card"></i>
            <NavLink to={'/latest-news'} className={"NavLinks"}>Insights</NavLink>
            </li>
          </ul>
        </div>

        <div className="btn_nav">
          <NavLink to={"/contact_us"} className={"NavLinks"}>
            <button className="button1">Book Demo</button>
          </NavLink>
        </div>

        <div className="resp-nav-icon">
          {/* <p > */}
            {!isResponsiveNav ? <i class="fa-solid fa-bars" onClick={handleNav}></i> : <i class="fa-solid fa-xmark" onClick={handleNav}></i>}
          {/* </p> */}
        </div>

        <div
          className="detail-summary"
          style={{ 
            opacity: isResponsiveNav ? "1" : "0",
            display: isResponsiveNav ? "block" : "none",
            transform: isResponsiveNav ? "translateY(0%)" : "translateY(10%)",
            transition:'transform 0.5s ease-in-out',
             }}
        >
          <details>
            <summary>
            <NavLink href={`/`} className={"NavLinks"} onClick={handleNav}>
              Services
            </NavLink>
              </summary>
          </details>
          <details>
            <summary>              
              <NavLink to={"/"} className={"NavLinks"} onClick={handleNav}>
                About Us
              </NavLink></summary>
          </details>
          <details>
            <summary>
              <NavLink to={'/'} className={"NavLinks"} onClick={handleNav}>
              Case Studies
              </NavLink>
            </summary>
          </details>
          <details>
            <summary>
              <NavLink to={"/latest-news"} className={"NavLinks"} onClick={handleNav}>
                Insights
              </NavLink>
            </summary>
          </details>          
          <details>
            <summary>
              <NavLink to={"/contact_us"} className={"NavLinks"} onClick={handleNav}>
                Book Demo
              </NavLink>
            </summary>
          </details>
          {/* <div>
            <NavLink to={"/register"} className={"NavLinks"}>
              <button className="button2">Get A Free Trial</button>
            </NavLink>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;