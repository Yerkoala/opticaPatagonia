import React from "react";
import Slider from "react-slick";
import './EmpresasSlider.css'
import bancamedica from "../assets/img/isapres/bancamedica.jpg"
import colmena from "../assets/img/isapres/colmena.png"
import consalud from "../assets/img/isapres/consalud.png"
import cruzblanca from "../assets/img/isapres/cruzBlanca.png"
import esencial from "../assets/img/isapres/esencial.png"
import fonasa from "../assets/img/isapres/fonasa.jpg"
import isalud from "../assets/img/isapres/isalud.png"
import fundacionbancoestado from "../assets/img/isapres/isaprefundacionbancoestado.jpg"
import nuevamasvida from "../assets/img/isapres/nuevaMasVida.png"
import vidatres from "../assets/img/isapres/vidaTres.png"


function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
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
          <img src={bancamedica} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={colmena} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={consalud} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={cruzblanca} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={esencial} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={fonasa} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={isalud} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={fundacionbancoestado} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={nuevamasvida} alt="" />
        </div>
        <div className="slideEmpresas">
          <img src={vidatres} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
