import React from 'react'
import './ImagenCatalogo.css'

const ImagenCatalogo = ({isOpen,cerrarImagenModal,imagenProyecto}) => {
   
    const noCerrar=(e)=>{
        e.stopPropagation();
    }

  return (
    <div className={isOpen?'imagenProyectoAbierto':'imagenProyecto'} onClick={cerrarImagenModal}>
        <div className='imagenModal' onClick={noCerrar}>
            <img src={imagenProyecto} alt="" />
            <button onClick={cerrarImagenModal}>X</button>
        </div>

    </div>
  )
}

export default ImagenCatalogo