import React from "react";

export const Contact = () => {
  return (
    // <div>
    //   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28053.959077652435!2d78.4346937940848!3d12.000221792210093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac703f94b97dd7%3A0xa2e26076a2345b85!2sPuludiyur%2C%20Tamil%20Nadu%20636903!5e0!3m2!1sen!2sin!4v1702274886551!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    // </div>
    <div className="map-container">
      <iframe style={{ height:"85vh"  }}
        title="Google Map"
        width="100%"
        height="400"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28053.959077652435!2d78.4346937940848!3d12.000221792210093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac703f94b97dd7%3A0xa2e26076a2345b85!2sPuludiyur%2C%20Tamil%20Nadu%20636903!5e0!3m2!1sen!2sin!4v1702274886551!5m2!1sen!2sin" 
        allowFullScreen
      ></iframe>
    </div>
  );
};
