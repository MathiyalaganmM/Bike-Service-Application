import React from "react";
import './Home.css'
import './About.css'
import img from '../Images/about.jpg'
import image from '../Images/about-img2.jpg'
import image1 from '../Images/person.jpg'
export const About = () => {
  return (
    <>
    <div className="abt">
    <div className="about1">
      <img src={img}/>
      <div className="a-first">
        
        <h1>About Us</h1>
        <p>Home {">"} About</p>
      </div>
    </div>
    </div>

    <div className="about">
        <img src={image} data-aos="fade-left"/>
        <div className="a-inner" data-aos="fade-right" data-aos-offset="200">
          <p className="b-inner">About us</p>
          <h1>We Have 20+ Years of Service Experience for You</h1>
          <p className="a-p">Pedaling through precision, we at are not just servicing bikes; we're crafting journeys. With a commitment to excellence, our bike service management goes beyond gears and chains. It's about ensuring every ride is a symphony of smoothness, every turn a testament to meticulous care. Join us as we transform your cycling experience.</p>
          <br/>
          <div className="a-icons">
            <box-icon name='chevrons-right'></box-icon>
            <p>Customer Satisfication</p>
          </div>
          <div className="a-icons">
            <box-icon name='chevrons-right'></box-icon>
            <p>Expert Care</p>
          </div>
          <div className="a-icons">
            <box-icon name='chevrons-right'></box-icon>
            <p>Latest & Modern Services</p>
          </div>
          <div className="a-icons">
            <box-icon name='chevrons-right'></box-icon>
            <p>Expertise Diagnostics</p>
          </div>
          <div className="a-icons">
            <box-icon name='chevrons-right'></box-icon>
            <p>Fair Pricing</p>
          </div>
        </div>
      </div>
      <br/>
      <br/>

      <div className="s-inner" data-aos="fade-bottom"> 
             <div className="s-p">
             <p>Our Team</p>
             </div>
             <h1>
             We Have an Expert &
             </h1>
             <h1>Dedicated Team Member</h1>
             <p>Team members are the heart and soul of any endeavor.Together, they achieve more than the sum of their parts, creating a harmonious balance that propels the team towards greatness.</p>
        </div>
        <br/>
        <div className="experts"> 

          <div className="e-name">
            <img src={image1}/>
            <div  className="e-pos">
              <h1>John</h1>
              <p>Founder-CEO</p>
            </div>
          </div>
          <div className="e-name">
            <img src={image1}/>
            <div className="e-pos">
              <h1>Alex</h1>
              <p>Manager</p>
            </div>
          </div>
          <div className="e-name">
            <img src={image1}/>
            <div className="e-pos">
              <h1>Sam</h1>
              <p>Co-Founder</p>
            </div>
          </div>
          
        </div>
    </>
  )
};
