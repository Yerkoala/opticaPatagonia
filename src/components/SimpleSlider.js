import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";
import slider1 from "../assets/img/slider1.png";
import slider2 from "../assets/img/slider2.png";
import slider3 from "../assets/img/slider3.png";
import slider4 from "../assets/img/slider4.png";
import slider5 from "../assets/img/slider5.png";
import oftalmologia from "../assets/img/oftalmologia.png"
import fonasa from "../assets/img/isapres/fonasa.jpg"
import fotoderecha from "../assets/img/fotoPresentacion.jpg"
import lentes from "../assets/img/catalogo1.JPG"


export default function SimpleSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 4500); // Cambia de slide cada 3 segundos

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="home">
      <div className="sliderContainer" >
        <div className="divSlider">
          <Slider ref={sliderRef} {...settings}>
            <div className="slide">
              <img
                src={slider1}
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
                onClick={() => window.open("https://serviciosoftalmologicospatagonia.site.agendapro.com/cl/sucursal/14002", "_blank")}
              />
            </div>
            <div className="slide">
              <a href="#Catalogo">
                <img
                  src={slider2}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </div>
            <div className="slide">
              <img
                src={slider3}
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
                onClick={() => window.open("https://serviciosoftalmologicospatagonia.site.agendapro.com/cl/sucursal/14002", "_blank")}
              />
            </div>
            <div className="slide">
              <img
                src={slider4}
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
                onClick={() => window.open("https://serviciosoftalmologicospatagonia.site.agendapro.com/cl/sucursal/14002", "_blank")}
              />
            </div>
            <div className="slide">
              <img
                src={slider5}
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
                onClick={() => window.open("https://serviciosoftalmologicospatagonia.site.agendapro.com/cl/sucursal/14002", "_blank")}
              />
            </div>
            {/* Agrega más slides según sea necesario */}
          </Slider>
        </div>
      </div>

      <div className="seccionInfo">
        <div className="seccionTarjetas">
          <div className="tarjetaHome">
            <img src={fonasa} alt="" />
            <h3>Bono Electrónico</h3>
            <p>Con tu cedula de identidad, podemos emitir tu bono en nuestra sucursal. <br/>Valor $6.220. Código Prestación: 1201027.</p>

          </div>
          <div className="tarjetaHome">
            <img src={oftalmologia} alt="" />
            <h3>Consulta Oftalmológica</h3>
            <p>Brindamos un servicio integral que abarca desde la consulta oftalmológica hasta la receta de lentes, asegurando una derivación oportuna cuando se necesita.</p>

          </div>
          <div className="tarjetaHome">
            <img src={lentes} alt="" />
            <h3>Óptica</h3>
            <p>Nuestra óptica presenta una selección única de estilos y opciones para satisfacer tanto tus necesidades visuales como tu sentido estético.</p>

          </div>
        </div>

        <div className="seccionInfoNosotros">
          <div className="seccionInfoNosotrosIzquierda">
            <h1>Todo en <br /> un solo lugar</h1>
            <p>¡Bienvenido a nuestro centro integral de cuidado visual! En un solo lugar, ofrecemos todo lo que necesitas para el bienestar de tus ojos. Consulta Oftalmológica, receta de lentes, derivación oportuna, contactología, óptica y sala de ventas.
              <br />Fusionamos y experiencia para descubras la comodidad de tener todos estos servicios en un solo lugar, proporcionando atención integral para el cuidado completo de tus ojos. ¡Tú visión, es nuestro compromiso!
            </p>
          </div>
          <div className="seccionInfoNosotrosDerecha">
            <img src={fotoderecha} alt="" />

          </div>
        </div>


      </div>

    </div>
  );
}
