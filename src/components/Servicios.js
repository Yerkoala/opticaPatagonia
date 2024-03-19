import "./Servicios.css"
import lentesServicios from "../assets/img/lentesServicios.png"
import ventas from "../assets/img/ventasServicios.png"
import consulta from "../assets/img/consultaServicios.png"
import derivacion from "../assets/img/derivacionServicios.png"
import lentesContacto from "../assets/img/lentesContactoServicios.png"
import marcos from "../assets/img/marcosServicios.png"
import agenda from "../assets/img/agenda.png"
import EmpresasSlider from "./EmpresasSlider"
import IsapreSlider from "./IsapresSlider"
import TrabajaConNosotros from "./TrabajaConNosotros"



export const Servicios = () => {
  return (
    <div className="servicios" id="Servicios">
      <div className="serviciosIntro">
        <h3>Servicios para verte bien</h3>
        <div className="serviciosIntroTextos">
          <p>
            Los servicios oftalmológicos son esenciales para mantener una buena salud ocular y
            tener una visión clara. Estos servicios incluyen exámenes oculares completos
            para detectar enfermedades de los ojos y trastornos de la visión,
            como el astigmatismo, la miopía y la hipermetropía. En Oftalmología Patagonia
            también podemos tratar problemas oculares comunes, como infecciones oculares,
            ojos secos y alergias.
          </p>
          <p>
            Además, ofrecemos consejos y sugerencias para cuidar los ojos y
            mantener una buena salud ocular en general. Los servicios
            oftalmológicos también incluyen la prescripción de anteojos,
            lentes de contacto y otros dispositivos para ayudar en la corrección
            de la visión. Nuestros servicios oftalmológicos son importantes para
            mantener una buena salud ocular y asegurarse de tener una visión clara
            y precisa.
          </p>
        </div>
      </div>

      <div className='todosLosServicios'>
        <h1>Conoce <br /> nuestros servicios</h1>
        <div className="serviciosContainer">

          <div className='serviciosTarjeta'>
            <img src={consulta} alt="Imagen de Lentes" />
            <div className="serviciosTarjetaInfo">
              <h5>Consulta Oftalmológica</h5>
              <p>Realizando una serie de pruebas clínicas, según los síntomas y hallazgos clínicos, nos vamos enfocando como se pueden solucionar sus molestias.</p>
            </div>
          </div>

          <div className='serviciosTarjeta'>
            <img src={lentesServicios} alt="Imagen de Lentes" />
            <div className="serviciosTarjetaInfo">
              <h5>Receta de Lentes</h5>
              <p>Podemos identificar y corregir los problemas más frecuentes, tales como miopía, hipermetropía, presbicia y astigmatismo.</p>
            </div>
          </div>

          <div className='serviciosTarjeta'>
            <img src={derivacion} alt="Imagen de Lentes" />
            <div className="serviciosTarjetaInfo">
              <h5>Derivación Oportuna</h5>
              <p>En casos más severos, podemos derivarte oportunamente gracias a nuestra red de derivacion con algún médico oftalmólogo sub-especialista.</p>
            </div>
          </div>

          <div className='serviciosTarjeta'>
            <img src={lentesContacto} alt="Imagen de Lentes" />
            <div className="serviciosTarjetaInfo">
              <h5>Lentes de Contacto</h5>
              <p>Para personas que no quieren   utilizar anteojos o que buscan aumentar su rendimiento deportivo, contamos con contactología.</p>
            </div>
          </div>

          <div className='serviciosTarjeta'>
            <img src={marcos} alt="Imagen de Lentes" />
            <div className="serviciosTarjetaInfo">
              <h5>Óptica</h5>
              <p>Nuestros productos vienen en una variedad de estilos y precios, asegurando que tenemos algo para cada gusto y presupuesto. Nuestros marcos están hechos de materiales de alta calidad.</p>
            </div>
          </div>

          <div className='serviciosTarjeta'>
            <img src={ventas} alt="Imagen de Lentes" />
            <div className="serviciosTarjetaInfo">
              <h5>Sala de Ventas</h5>
              <p>Amplia gama de marcos para lentes según estilo, moda, comodidad y diversas tecnologías en cristales ópticos con distintos tratamientos según recomendación medica.</p>
            </div>
          </div>

        </div>
      </div>


      <div className="serviciosContainerSlider">
        <h4 style={{ textAlign: "center" }}>Cobertura Extendida</h4>
        <div className="serviciosContainerSliderTamaño">
          <IsapreSlider />
        </div>
      </div>

      <div className="servicioAgenda">
        <img src={agenda} alt="" />
        <div className="servicioTextoBoton">
          <h1>¿Quieres agendar <br /> una hora?</h1>
          <button onClick={() => window.open("https://serviciosoftalmologicospatagonia.site.agendapro.com/cl/sucursal/14002", "_blank")}>Agenda tu Hora aquí</button>
        </div>
      </div>

      <div className="serviciosContainerSlider">
        <h4 style={{ textAlign: "center" }}>Empresas que confían en nosotros</h4>
        <div className="serviciosContainerSliderTamaño">
          <EmpresasSlider />
        </div>
      </div>

      <div style={{ marginTop: "80px" }}>
        <TrabajaConNosotros/>
      </div>

    </div>
  )
}
