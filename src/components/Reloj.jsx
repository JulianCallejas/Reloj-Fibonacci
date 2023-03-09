import React, { useState } from 'react'

const Reloj = () => {
    
    const [hora,setHora] = useState(new Date().getHours());
    const [minuto,setMinuto] = useState(new Date().getMinutes());
    const [segundo,setSegundo] = useState(new Date().getSeconds());
    function ticTac() {
        var nuevaHora = new Date();
        if (nuevaHora.getHours() !== hora) setHora(nuevaHora.getHours());
        if (nuevaHora.getMinutes()!== minuto) setMinuto(nuevaHora.getMinutes());
        if (nuevaHora.getSeconds()!== segundo) setSegundo(nuevaHora.getSeconds());
    }
    setInterval(ticTac, 1000);

    return(       
        <div className='hora-box'>
            <div className='hora-subbox'>
                <span className='hora-numero'>{hora<10 ? "0" + hora : hora}</span>
                <span className='hora-numero'>:</span>
                <span className='hora-numero'>{minuto<10 ? "0" + minuto:minuto}</span>
                <span className='hora-numero'>:</span>
                <span className='hora-numero'>{segundo<10 ? "0" + segundo:segundo}</span>
            </div> 
        </div>
    )
}

export default Reloj