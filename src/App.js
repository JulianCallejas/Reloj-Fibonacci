import React, { useState } from 'react';

import './App.css';
import { Logo, Descripcion, Reloj, ListaFibonacci } from './components/index'


function App() {

  const [hora, setHora] = useState(null);
  const generarlista = () => setHora(new Date())
  const limpiarLista = () => setHora(null);

  return (
    <>
      <Logo />
      <Descripcion />
      <Reloj />
      <div className='boton-box'>
        <button
          className='boton'
          onClick={generarlista}
          disabled={hora ? true : false}
        >
          Generar
        </button>
        <button
          className='boton'
          onClick={limpiarLista}
        >
          Limpiar
        </button>
      </div>
      {hora && <ListaFibonacci
        hora={hora.toLocaleTimeString()}
        minutos={hora.getMinutes()}
        segundos={hora.getSeconds()}
      />}
    </>
  );
}

export default App;
