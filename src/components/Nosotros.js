import React from 'react';
import mision from '../assets/img/mision.JPG';
import vision from '../assets/img/vision.JPG';
import hugo from '../assets/img/hugo.png'
import mariaisabel from '../assets/img/mariaisabel.png'
import isabel from '../assets/img/isabel.png'
import silueta from '../assets/img/siluetamujer.jpg'
import barbara from '../assets/img/barbara.jpeg'
import "./Nosotros.css"

export const Nosotros = () => {
  return (
    <div className='Nosotros' id='Nosotros'>
      <div className="nosotrosInfo">
        <div className="nosotrosInfoIzquierda">
          <h1>Ver bien, es vivir mejor</h1>
          <p>En Servicios Oftalmológicos Patagonia somos profesionales de la salud visual y de la confección de lentes en la región de Ñuble. Nuestra misión es mejorar la calidad de vida de nuestros usuarios, haciendo énfasis en las nuevas tendencias del mundo moderno, moda y deporte, para así entregar una mejor asesoría personalizada.<br />
            Especialistas en recetas de lentes, para solucionar principalmente los problemas refractivos: miopía, hipermetropía, astigmatismo y presbicia, junto con exámenes complementarios logramos derivaciones oportunas que permitan la pesquisa temprana de patologías visuales. Además, contamos con un grupo de asesores en sala de ventas para escoger lentes y sus accesorios de acuerdo a tus necesidades.</p>

        </div>
        <div className="nosotrosInfoDerecha">
          <img src={vision} alt="" />

        </div>

      </div>

      <div className="nosotrosInfo">
        <div className="nosotrosInfoIzquierda">
          <h1>Nuestra Misión</h1>
          <p>Aspiramos a ser una de los mejores box de consulta oftalmológica de la región y
            reconocidos por ser los principales solucionadores de problemas asociados a de lentes,
            cristales y lentes de contacto de nuestros usuarios.</p>
          <h1>Nuestra Visión</h1>
          <p>Creemos que una atención personalizada obtiene resultados significativamente mayores
            en el éxito para el tratamiento de un diagnóstico. Nuestros servicios se enfocan 100%
            en mejorar la calidad de vida de nuestros usuarios.</p>
        </div>
        <div className="nosotrosInfoDerecha">
          <img src={mision} alt="" />
        </div>

      </div>

      <div className='nuestrosProfesionales'>
        <h1>Conoce a <br />nuestros profesionales</h1>

        <div className='profesionalesContainer'>
          <div className='profesionalesTarjeta'>
            <img src={hugo} alt="Imagen de Hugo" onClick={() => window.open("https://www.doctoralia.cl/hugo-vasquez-boero/tecnologo-medico/chillan", "_blank")} />
            <div className="tarjetaInfo">
              <h5>Hugo Vásquez Boero</h5>
              <p style={{ color: "#1E82B9", fontSize: "14px" }}>Tecnólogo Médico en Oftalmología</p>
              <div >
                <p>Director Clínico</p>
                <p style={{fontSize:"12px", color:"#13293D", cursor:"pointer"}} onClick={() => window.open("https://www.doctoralia.cl/hugo-vasquez-boero/tecnologo-medico/chillan", "_blank")}>Ver Comentarios {'>'}</p>
              </div>
            </div>
          </div>

          <div className='profesionalesTarjeta'>
            <img src={barbara} alt="Imagen de barbara" />
            <div className="tarjetaInfo">
              <h5>Barbara Contreras</h5>
              <p style={{ fontSize: "14px", marginBottom: "7px" }}>Tecnólogo Médico con mención en Oftalmología</p>
            </div>
          </div>

          <div className='profesionalesTarjeta'>
            <img src={mariaisabel} alt="Imagen de mariaisabel" />
            <div className="tarjetaInfo">
              <h5>Marísabel Aponte</h5>
              <p>Jefe Sala de Ventas</p>
              <p>Asesor Óptico</p>
            </div>
          </div>

          <div className='profesionalesTarjeta'>
            <img src={isabel} alt="Imagen de Vanessa" />
            <div className="tarjetaInfo">
              <h5>Vanessa Vargas</h5>
              <p>Relacionador Público</p>
              <p>Vinculación con el Medio</p>
            </div>
          </div>

          <div className='profesionalesTarjeta'>
            <img src={silueta} alt="Imagen de Isabel Parra" />
            <div className="tarjetaInfo">
              <h5>Isabel Parra</h5>
              <p>Administración</p>
              <p>Gerencia</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
