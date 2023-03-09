import React, { useRef, useState } from 'react'
import GraficoFibonacci from './GraficoFibonacci';


const ListaFibonacci = (props) => {

  const semilla1 = useRef(Math.trunc(props.minutos / 10));
  const semilla2 = useRef(props.minutos - (Math.trunc(props.minutos / 10) * 10));
  const [verGrafico, setVerGrafico] = useState(false);

  const mostrarGrafico = () => setVerGrafico(!verGrafico);

  const GenerarLista = () => {
    var lista = []
    if (semilla1.current < semilla2.current) {
      lista = [semilla1.current,semilla2.current];
    } else {
      lista = [semilla2.current, semilla1.current];
    }
    for (let i = 0; i < (props.segundos); i++) {
      lista[i] + lista[i + 1] > 0 ? lista.push(lista[i] + lista[i + 1]) : lista = [0, 0];
    }
    return (
      <>
        {verGrafico ? (
          <div className='grafico-box'>
          <GraficoFibonacci lista={lista} />
        </div>) :(
        <div className="lista-box">
          <ul className="lista-fibonacci">
            {lista.reverse().map((item, index) => {
              return <li key={index}>{item.toLocaleString()}</li>
            })}
          </ul>
        </div>)
        }
        {lista.map((item, index) => {
          return (<style key={"s" + index}>{`
        .lista-fibonacci li:nth-child(`+ (index + 1) + `) {
          animation-delay: `+ index * 0.3 + `s;
        } 
      `}</style>)
        })}
      </>
    )
  }

  return (
    <div>
      <h3>Hora de referencia: {props.hora}<br />
        Numeros semilla: {semilla1.current}, {semilla2.current}<br />
        Tamaño de la serie: {props.segundos}
      </h3>
      <div className='boton-box'>
        <button className='boton' onClick={mostrarGrafico}>
          {verGrafico ? "Mostrar datos" : "Mostrar gráfico"}
        </button>
      </div>
      <GenerarLista />
    </div>
  )
}

export default ListaFibonacci