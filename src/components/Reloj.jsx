import React, { useState } from 'react'
import n0 from '../0.png'
import n00 from '../00.png'

const Reloj = () => {

    const [hora,setHora] = useState(new Date().getHours());
    const [minuto,setMinuto] = useState(new Date().getMinutes());
    const [segundo,setSegundo] = useState(new Date().getSeconds());

    function ticTac() {
        var nuevaHora = new Date();
        if (nuevaHora.getHours() !== hora) setHora(nuevaHora.getHours());
        if (nuevaHora.getMinutes()!== minuto) setMinuto(nuevaHora.getMinutes());
        if (nuevaHora.getSeconds()!== segundo) {
            setSegundo(nuevaHora.getSeconds());
        }
    }
    setInterval(ticTac, 1000);

    return(       
        <div className='hora-box'>
            <div className='hora-subbox'>
                <span className='hora-numero'>
                    {hora<10 ? "0" + hora : hora}
                    <img className='cambio-hora' src={n0} alt="minutos" hidden={hora%2}/>
                    <img className='cambio-hora' src={n00} alt="minutos" hidden={!(hora%2)}/>
                </span>
                <span className='hora-numero'>:</span>
                <span className='hora-numero'>
                    {minuto<10 ? "0" + minuto:minuto}
                    <img className='cambio-hora' src={n0} alt="minutos" hidden={minuto%2}/>
                    <img className='cambio-hora' src={n00} alt="minutos" hidden={!(minuto%2)}/>
                    </span>
                <span className='hora-numero'>:</span>
                <span className='hora-numero'>
                    {segundo<10 ? "0" + segundo :segundo }
                    <img className='cambio-hora' src={n0} alt="segundos" hidden={segundo%2}/>
                    <img className='cambio-hora' src={n00} alt="segundos" hidden={!(segundo%2)}/>
                    </span>
            </div> 
        </div>
    )
}

export default Reloj