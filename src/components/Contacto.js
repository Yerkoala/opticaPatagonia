import "./Contacto.css"
import local from '../assets/img/local.JPG';
import Ubicacion from "../assets/img/Ubicacion";
import Wsp from "../assets/img/Wsp";
import Correo from "../assets/img/Correo";
import mapa from "../assets/img/mapaOptica.png"
import face from "../assets/img/facebook.png"
import insta from "../assets/img/instagram.png"
import agenda from "../assets/img/calendario.png"


export const Contacto = () => {
    return (
        <div id='Contacto'>
            <div className="contactoUbicacion">
                <div className="contactoInfoIzquierda">
                    <h1>¿Dónde encontrarnos?</h1>
                    <p>Nos complace invitarte a visitarnos en nuestra casa matriz en Calle Constitución 892, Chillán (altura Sargento Aldea), un lugar estratégico que te permite acceder fácilmente desde diferentes puntos de la ciudad, a pocos pasos tanto del Mall Parque Arauco Chillán como de la emblemática Plaza de Armas.
                        <br/>
                        <br/>A continuación, te presentamos nuestros horarios:
                        <br/> <span style={{textDecoration:"underline"}}>Lunes a Viernes:</span>
                        <br/>10:00 a 19:00 hrs
                        <br/><span style={{textDecoration:"underline"}}>Sábados:</span>
                        <br/>10:00 a 14:00 hrs

                    </p>
                </div>
                <div className="contactoInfoDerecha">
                    <img src={local} alt="" />
                </div>
            </div>
            <div className="contactoInfoContainer">
                <img src={mapa} onClick={() => window.open("https://www.google.com/maps/place/Constituci%C3%B3n+892,+3800805+Chill%C3%A1n,+%C3%91uble/@-36.6087087,-72.1011146,17z/data=!3m1!4b1!4m6!3m5!1s0x9669282a72909e23:0x61e8167579798458!8m2!3d-36.608713!4d-72.0985397!16s%2Fg%2F11tnwj_rdw?entry=ttu", "_blank")} alt="" />
                <div className="contactoInfoTextos">
                    <div>
                        <h3>Encuéntranos en</h3>
                        <div className="contactoDato">
                            <Ubicacion fill="#374957" width={24}/>
                            <h5>Calle Constitución #892, Chillán</h5>
                        </div>
                    </div>

                    <div>
                        <h3>Contacto</h3>
                        <div className="contactoDato">
                            <Wsp color="#374957" tamaño={30}/>
                            <h5>+56 940834675</h5>
                        </div>

                        <div className="contactoDato">
                            <Correo />
                            <h5>Ventas@opticapatagonia.cl</h5>
                        </div>
                        <div className="contactoDato">
                            <Correo />
                            <h5>Oftalmologia@opticapatagonia.cl</h5>
                        </div>
                    </div>

                    <div>
                        <h3>Redes Sociales</h3>
                        <div className="contactoDatosIconos">
                            <img src={face} onClick={() => window.open("https://www.facebook.com/profile.php?id=100088677781830&mibextid=LQQJ4d", "_blank")} alt="" />
                            <img src={insta} onClick={() => window.open("https://www.instagram.com/opticapatagonia.cl", "_blank")} alt="" />
                            <img src={agenda} onClick={() => window.open("https://serviciosoftalmologicospatagonia.site.agendapro.com/cl/sucursal/14002", "_blank")} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}