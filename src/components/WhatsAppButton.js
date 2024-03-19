// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';
import ReactWhatsapp from 'react-whatsapp';

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-container">
      <div className="response-time">
        <p>Tiempo aproximado de respuesta de 15 minutos</p>
      </div>
      <ReactWhatsapp number="+56 940834675" message="Buen día, quisiera hacer una consulta">
        <div className="whatsapp-button">
          <FaWhatsapp size={30} color="#fff" />
        </div>
      </ReactWhatsapp>
    </div>
  );
};

export default WhatsAppButton;
