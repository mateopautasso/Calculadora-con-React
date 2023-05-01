import './App.css';
import Boton from './components/boton/boton.jsx';
import Pantalla from './components/pantalla/pantalla';
import BotonClear from './components/boton-clear/boton-clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

    const [input, setInput] = useState('');

    const agregarValor = valor => {
        setInput(input + valor);
    };

    const clearPantalla = () => {
        setInput('');
    };

    const calcularResultado = () => {
        const regex = /^-?\d+(?:\.\d+)?(?:[-+/*]-?\d+(?:\.\d+)?)+$/;
        
        if(regex.test(input)) {
            setInput(evaluate(input));
        } else {
            alert("Ingrese una operación válida");
            setInput('');
        };
    }

    return (
        <div className='App'>
          <div className='calculadora__container'>
          <div className='fila'>
              <Pantalla input={input}/>
            </div>
            <div className='fila'>
                <Boton manejarClic={agregarValor}>1</Boton>
                <Boton manejarClic={agregarValor}>2</Boton>
                <Boton manejarClic={agregarValor}>3</Boton>
                <Boton manejarClic={agregarValor}>+</Boton>
            </div>
            <div className='fila'>
                <Boton manejarClic={agregarValor}>4</Boton>
                <Boton manejarClic={agregarValor}>5</Boton>
                <Boton manejarClic={agregarValor}>6</Boton>
                <Boton manejarClic={agregarValor}>-</Boton>
            </div>
            <div className='fila'>
                <Boton manejarClic={agregarValor}>7</Boton>
                <Boton manejarClic={agregarValor}>8</Boton>
                <Boton manejarClic={agregarValor}>9</Boton>
                <Boton manejarClic={agregarValor}>*</Boton>
            </div>
            <div className='fila'>
                <Boton manejarClic={agregarValor}>.</Boton>
                <Boton manejarClic={agregarValor}>0</Boton>
                <Boton manejarClic={calcularResultado}>=</Boton>
                <Boton manejarClic={agregarValor}>/</Boton>
            </div>
            <div className='fila'>
                <BotonClear manejarClic={clearPantalla}>
                  Clear
                </BotonClear>
            </div>
          </div>
        </div>
    );
}

export default App;
