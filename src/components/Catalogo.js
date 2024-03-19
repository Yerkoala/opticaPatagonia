import React, { useState } from 'react'
import './Catalogo.css'
import catalogo1 from "../assets/img/catalogo/catalogo1.jpg"
import catalogo2 from "../assets/img/catalogo/catalogo2.jpg"
import catalogo3 from "../assets/img/catalogo/catalogo3.jpg"
import catalogo4 from "../assets/img/catalogo/catalogo4.jpg"
import catalogo5 from "../assets/img/catalogo/catalogo5.jpg"
import catalogo6 from "../assets/img/catalogo/catalogo6.jpg"
import catalogo7 from "../assets/img/catalogo/catalogo7.jpg"
import catalogo8 from "../assets/img/catalogo/catalogo8.jpg"
import catalogo9 from "../assets/img/catalogo/catalogo9.jpg"
import catalogo10 from "../assets/img/catalogo/catalogo10.jpg"

import ImagenCatalogo from './ImagenCatalogo'

export const Catalogo = () => {

    const imagenesCatalogo = [
        {
            nombre: catalogo1,
            detalle: "Marcos de Acetato"
        },
        {
            nombre: catalogo4,
            detalle: "Marcos de Metal"
        },
        {
            nombre: catalogo5,
            detalle: "Lentes de Material Sustentable"
        },
        {
            nombre: catalogo3,
            detalle: "Lentes Personalizados"
        },
        {
            nombre: catalogo7,
            detalle: "Lentes de Sol"
        },
        {
            nombre: catalogo6,
            detalle: "Gafas Ópticas"
        },
        {
            nombre: catalogo8,
            detalle: "Lentes de Contacto de uso Mensual"
        },
        {
            nombre: catalogo9,
            detalle: "Lentes de Contacto de uso Diario"
        },
        {
            nombre: catalogo2,
            detalle: "Solución de Mantenimiento para Lentes de Contacto"
        },
        {
            nombre: catalogo10,
            detalle: "Accesorios ópticos"
        }]

    const [abierto, setAbierto] = useState(false)
    const [imagenDeCatalogo, setImagenDeCatalogo] = useState("")


    const cerrarImagenModal = () => {
        setAbierto(false)
    }

    const abrirImagenModal = (i) => {
        setAbierto(true)
        setImagenDeCatalogo(i)
    }
    return (
        <div className="catalogo" id='Catalogo'>
            <h1>Revisa nuestro <br />catalogo de productos</h1>
            <div className='catalogoContainer'>
                {imagenesCatalogo.map((imagen, index) => (
                    <div className='catalogoTarjeta' >
                        <img className='imagenContainer' src={imagen.nombre} alt=""  onClick={() => { abrirImagenModal(imagen.nombre) }} title="Expandir imagen"/>
                        <div className="catalogoTarjetaInfo">
                            <p>{imagen.detalle}</p>
                        </div>
                        <ImagenCatalogo isOpen={abierto} cerrarImagenModal={cerrarImagenModal} imagenProyecto={imagenDeCatalogo} />
                    </div>
                ))}
            </div>
            <p className='opcionDeCompra'>La opción para comprar a través de nuestra página estará habilitada muy pronto, ¡No te lo pierdas!</p>
        </div>
    )
}
