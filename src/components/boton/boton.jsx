import React from 'react';
import './boton.css'

function Boton(props) {

    const isOperador = (children) => {
      return isNaN(children) && children !== '.' && children !== '=';  
    }

    return (
      <div className={`calculadora__boton ${isOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    )
}

export default Boton