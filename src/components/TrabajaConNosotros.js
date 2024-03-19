import React, { useRef, useState } from 'react'
import './TrabajaConNosotros.css'
import emailjs from '@emailjs/browser'
import { uploadFile } from "../firebaseConfig"



const TrabajaConNosotros = () => {
    const refForm = useRef();
    const [url, setUrl] = useState("");
    const [mensajeEnviado, setMensajeEnviado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = 'service_mjslufi';
        const templateId = 'template_r4gbl21';
        const apikey = '_nP2VJLI-bHX2Udnl';

        const templateParams = {
            to_name: refForm.current.to_name.value,
            correo: refForm.current.correo.value,
            mensaje: refForm.current.mensaje.value,
            archivoUrl: url,
        };
        console.log(templateParams)
        emailjs.send(serviceId, templateId, templateParams, apikey)
            .then(result => console.log(result.text))
            .catch(error => console.error(error));

        setTimeout(() => {
            setMensajeEnviado(!false);
        }, 1000);
    }


    const subirArchivo = async (e) => {
        e.preventDefault();
        try {
            const result = await uploadFile(e.target.files[0])
            setUrl(result)
            console.log("Se subió el archivo")
        } catch (error) {
            console.log(error)
            alert("Fallo interno, Por favor intente de nuevo más tarde")
        }
    }

    return (
        <div className='trabajaConNosotros'>

            <div className='trabajaConNosotrosContainer'>
                <div className='trabajaConNosotrosTexto'>
                    <h4>¿Deseas trabajar con nosotros?</h4>
                    <p>Contamos con cobertura en las regiones de Maule, Ñuble y Bio Bio. Estamos en búsqueda de establecer alianzas estratégicas y convenios con aquellas empresas o instituciones que deseen complementar la salud de sus trabajadores.<br /> Contamos con descuentos exclusivos y diversas formas de pago para sus trabajadores, afiliados y/o cargas familiares.
                        <br />Además, contamos con nuestros equipos oftalmológicos móviles para el control visual y nuestra óptica móvil para realizar intervenciones en terreno en dependencias de la empresa, sin la necesidad de interrumpir de forma prolongada la jornada laboral de los trabajadores.
                        <br />Si desea establecer una alianza, escríbenos a <span style={{ fontWeight: "bold" }}>Oftalmologia@opticapatagonia.cl</span> y uno de nuestros ejecutivos comerciales lo contactará a la brevedad o en su defecto responde nuestro formulario.
                    </p>
                </div>
                <div className='trabajaConNosotrosFormulario'>
                    <form ref={refForm} onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input name="to_name" type="text" required />
                            <label>Nombre</label>
                        </div>
                        <div className="input-container">
                            <input name='correo' type="text" required />
                            <label>Correo</label>
                        </div>
                        <div className="input-container">
                            <input name='mensaje' type="text" placeholder='Cuentanos un poco sobre ti o tu empresa' />
                            <label>Mensaje</label>
                        </div>
                        <div >
                            <input
                                name="archivo"
                                type="file"
                                accept='.PDF'
                                onChange={e => subirArchivo(e)}
                            />
                        </div>
                        <button type="submit" className="btn">Enviar</button>
                    </form>
                    {mensajeEnviado && (<p className='muchasGracias'>¡Muchas gracias!</p>)}
                </div>

            </div>
        </div>
    )
}

export default TrabajaConNosotros