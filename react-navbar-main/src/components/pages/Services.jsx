import React from "react";
import './Service.css'
import img from '../Images/service.jpg'
export const Services = () => {
  const navigateToAnotherPage = () => {
    // Change the URL to the desired path
    window.location.href = '/book';
  };
  return (
    <>
      <div className="service">
              <div className="ser-1">
              <img src={img}/>
              <div className="service-first">
        
                <h1>Services</h1>
                <p>Home {">"} Services</p>
              </div>
            </div>


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

             <div class="grid-container">
             <div class="grid-item">
             <box-icon name='cog' ></box-icon>
             <h1>Wheel Adjustment</h1>
             <p>We are always help to make one of the best adjustment service for us and all the details.</p>
             <button onClick={navigateToAnotherPage}>Book</button>
             </div>
             <div class="grid-item">
             <box-icon name='cog' type='solid' ></box-icon>
             <h1>Engine Servicing</h1>
             <p>We are always help to make one of the best adjustment service for us and all the details.</p>
             <button>Book</button>
             </div>
             <div class="grid-item">
             <span class="material-symbols-outlined">mode_fan</span>
             <h1>Cooling Service</h1>
             <p>We are always help to make one of the best adjustment service for us and all the details.</p>
             <button>Book</button>
             </div>
             <div class="grid-item"><span class="material-symbols-outlined">directions_bike</span>
              <h1>Brake Service</h1>
              <p>We are always help to make one of the best adjustment service for us and all the details.</p>
              <button>Book</button>
              </div>
             <div class="grid-item"><span class="material-symbols-outlined">cleaning</span>
             <h1>Washing Service</h1>
             <p>We are always help to make one of the best adjustment service for us and all the details.</p>
             <button>Book</button>
               </div>
             <div class="grid-item"><span class="material-symbols-outlined">circle</span>
             <h1>Tyre Service</h1>
             <p>We are always help to make one of the best adjustment service for us and all the details.</p>
             <button>Book</button>
             </div>
             </div>
      </div>
      
    </>
  );
};
