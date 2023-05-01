import React from 'react';
import './boton-clear.css'

function BotonClear({children, manejarClic}) {

    return (
        <div className='calculadora__clear'
        onClick={manejarClic}>
            {children}
        </div>
    )
}

export default BotonClear;