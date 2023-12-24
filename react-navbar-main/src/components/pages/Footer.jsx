import React from "react";
import './Footer.css'

export const Footer = () => {
  return (
    <>
    <div className="footer">
         <div className="f-first">
          <h1>Mathi Service</h1>
          <p>Where the road meets reliability, our bike service company is the pit stop for your peace of mind. We don't just fix bikes; we fine-tune adventures and ensure every ride is a journey without worries</p>
         </div>

         <div className="addr">
          <h1>Address</h1>
          <br/>
          <div className="f-second">
          <box-icon name='time-five'></box-icon>
          <p>Sun - Fri: 8.00am - 6.00pm</p>
          </div>
          
          <div className="f-second">
          <box-icon name='home-alt' ></box-icon>
          <p>2659 Autostrad St, London, UK</p>
          </div>
          
          <div className="f-second">
          <box-icon name='phone' ></box-icon>
          <p>91+ 9876543210</p>
          </div>
          <div className="f-second">
          <box-icon name='envelope' ></box-icon>
          <p>info@mathi.com</p>
          </div>
         </div>
        
    </div>
    <br/>
    <p className="foot">Copyright @2024 Mathi.All rights Reserved.</p>
    </>

  );
};
