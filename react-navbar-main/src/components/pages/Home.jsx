import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'
import image from '../Images/bike.jpg'
import image1 from '../Images/sample.jpg'
export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, 
  };
  return (
    <div>
      <br>
      </br>
      <div className="home">
      <div className="img" >

        <img src={image} alt="bike" />
        <div className="text">
          <p>Welcome to our service</p>
          <h1>Your bike is always</h1>
          <h1>special with us!</h1>
          <h2>Ride worry-free! Our bike service ensures your two wheels are always in top-notch condition, so you can focus on the thrill of the ride!</h2>
          <br/>
          <a><button>Get Started</button></a>
        </div>
      </div>
      </div>
      <div className="choose">
          <p>Why choose us?</p>
          <div className="topic">
             <div className="first">
             <a><box-icon name='question-mark'></box-icon></a>
             <div className="finner" data-aos="fade-right">
              <h1>Problem Solver</h1>
              <p>We have the best service for you to make and this is one of the best service.</p>
             </div>
             </div>

             <div className="second" >
             <a><box-icon name='time-five'></box-icon></a>
             <div className="sinner">
              <h1>On-time Deliveries</h1>
              <p>We have the best service for you to make and this is one of the best service.</p>
             </div>
             </div>

             <div className="third" >
             <a><box-icon name='male'></box-icon></a>
             <div className="tinner">
              <h1>Service by Experts</h1>
              <p>We have the best service for you to make and this is one of the best service.</p>
             </div>
             </div>
          </div>
      </div>
      <br/>
      <br/>


      <div className="about">
        <img src={image1} data-aos="fade-left"/>
        <div className="a-inner" data-aos="fade-right" data-aos-offset="200">
          <p>About us</p>
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
      {/* Serives  */}
      <div className="services">
        <div className="s-inner" data-aos="fade-bottom"> 
             <p>Services</p>
             <h1>
             We Always Ready to Serve
             </h1>
             <h1>You the Best Service</h1>
             <p>We have a good expert in the global market and this will help us to make a good image on our service market and globally.</p>
        </div>
        <br/>
        <br/>

        <div className="slider">
        <Slider {...settings}>
      <div className="slide1">
      <span class="material-symbols-outlined">
       oil_barrel
      </span>
          <h1>Oil Check-up</h1>
          <h4>Keep your bike running smoothly and efficiently with our professional bike oil change service.we understand that your bike is more than just a mode of transportation – it's a symbol of freedom and adventure. To ensure that every ride is a seamless journey, regular oil changes are essential.</h4>
      </div>
      <div className="slide2">
      <span><box-icon name='cog' ></box-icon></span>
      <h1>Engine Check-up</h1>
      <h4>Your bike's engine is the powerhouse that drives your adventures. Ensure it's in top-notch condition with our comprehensive bike engine check service at [Your Bike Shop]. We understand the thrill of the open road, and we're here to make sure your engine is ready for every twist and turn.</h4>
      </div>
      <div className="slide3">
      <span><box-icon name='washer' type='solid' ></box-icon></span>
      <h1>Bike wash</h1>
      <h4> Give your two-wheeled companion the care it deserves with our premium bike wash service. We specialize in bringing back the shine, ensuring your bike looks as good as it performs.</h4>
      </div>
      {/* Add more slides as needed */}
    </Slider>
        </div>
      </div>
      <br/>
      <br/>
      <br/>



 
     {/* Achievement */}
     <div>
     <div className="s-inner" data-aos="fade-left"> 
             <p>Achievements</p>
             <h1>
             We Are Always Famous
             </h1>
             <h1>for Our All Achievements</h1>
             <p>This is one of the best way to make a good achievements into the global world and this is really helpful for you.</p>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="ach">
        <div className="ach1">
        <span class="material-symbols-outlined">
           person
           </span>
        <h1>120K+</h1>
        <p>Happy Clients</p>
        </div>
        <div className="ach2">
        <span><box-icon name='cog' ></box-icon></span>
        <h1>200K+</h1>
        <p>Bike Repair</p>
        </div>
        <div className="ach3">
        <span class="material-symbols-outlined">
          engineering
          </span>
        <h1>170K+</h1>
        <p>Dedicated Experts</p>

        </div>
        <div className="ach4">
        <span><box-icon name='calendar' ></box-icon></span>
        <h1>50+</h1>
        <p>Years Experience</p>

        </div>
      </div>
      
     </div>

    </div>
    );
};
