import React from "react";
import Slider from "react-slick";
import './EmpresasSlider.css'
import ubb from "../assets/img/ubiobio.png"
import grez from "../assets/img/grezUlloa.jpg"
import unifrutti from "../assets/img/unifrutti.png"
import integra from "../assets/img/integraSalud.jpg"
import iansa from "../assets/img/iansa.png"
import rayun from "../assets/img/rayun.png"


function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slideEmpresas">
          <img src={ubb} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={grez} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={unifrutti} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={integra} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={iansa} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={rayun} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
