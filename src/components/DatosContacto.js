import React from 'react'
import './DatosContacto.css'
import wsp from "../assets/img/wspPequeño.png"
import ubi from "../assets/img/ubicacionPequeño.png"

const DatosContacto = () => {
    return (
        <div className='datosContactoContainer'>
            <div style={{display:"flex", alignItems:"center"}}>
                <img src={wsp} alt="" style={{height:"13px", width:"auto"}} />
                <p>+56 940834675</p>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                <img src={ubi} alt="" style={{height:"13px", width:"auto"}}/>
                <p>Constitución #892, Chillán</p>
            </div>

        </div>
    )
}

export default DatosContacto