import React from 'react';
import './pantalla.css'

const Pantalla = ({ input }) => {
    return (
        <div className='calculadora__pantalla'>
            {input}
        </div>
    )
}

export default Pantalla;