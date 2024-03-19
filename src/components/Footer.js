import React from 'react';
import "./Footer.css"
import logoBlanco from "../assets/img/logoPatagoniaBlanco.png"
import mediosdepago from "../assets/img/mediosdepago.jpg"
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Ubicacion from "../assets/img/Ubicacion";
import Wsp from "../assets/img/Wsp";


const Footer = () => {
  const [activelLink, setActiveLink] = useState('home')
  const onUpdateACtiveLink = (value) => {
    setActiveLink(value)
  }



  return (
    <footer className='footerStyle'>
      <div className='footerColUno'>
        <img src={logoBlanco} className="imagenFooter" alt="" />
        <p style={{ marginTop: "10px" }}>Servicio Oftalmológicos Patagonia En un solo lugar, ofrecemos todo lo que necesitas para el bienestar de tus ojos. Consulta Oftalmológica, receta de lentes, derivación oportuna, contactología, óptica y sala de ventas.</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px", marginTop: "10px" }}>
          <Wsp color="#fff" tamaño={24} />
          <p>+56 940834675</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Ubicacion fill="#fff" width={24} />
          <p>Constitución #892, Chillán</p>
        </div>
      </div>
      <div className='mapaDelSitio'>
        <h4 style={{ color: "white" }}>Mapa del sitio</h4>
        <Nav className="textosFooter">
          <Nav.Link href="#home" className={activelLink === 'home' ? 'active footer-link' : 'footer-link'} onClick={() => onUpdateACtiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#Servicios" className={activelLink === 'Servicios' ? 'active footer-link' : 'footer-link'} onClick={() => onUpdateACtiveLink('Servicios')}>Servicios</Nav.Link>
          <Nav.Link href="#Nosotros" className={activelLink === 'Nosotros' ? 'active footer-link' : 'footer-link'} onClick={() => onUpdateACtiveLink('Nosotros')}>Nosotros</Nav.Link>
          <Nav.Link href="#Contacto" className={activelLink === 'Contacto' ? 'active footer-link' : 'footer-link'} onClick={() => onUpdateACtiveLink('Contacto')}>Contacto</Nav.Link>
          <Nav.Link href="#Catalogo" className={activelLink === 'Catalogo' ? 'active footer-link' : 'footer-link'} onClick={() => onUpdateACtiveLink('Catalogo')}>Catalogo</Nav.Link>
        </Nav>
      </div>

      <div className='footerColTres'>
        <h4 style={{ color: "white", margin: 0 }}>Medios de pago</h4>
        <img src={mediosdepago} className="imagenWebpay" alt="" />
        <div>
        <h4 style={{ color: "white", margin: 0, marginBottom:"5px" }}>Horario de Atención</h4>
          <p style={{ color: "white"}}>
          <span style={{textDecoration:"underline"}}>Lunes a Viernes:</span>
            <br />10:00 a 19:00 hrs
            <br /><span style={{textDecoration:"underline"}}>Sábados:</span>
            <br />10:00 a 14:00 hrs
          </p>
        </div>
        <p className='copyright'>&copy; 2024 Óptica Patagonia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
