import React, { useState } from 'react'

console.log('Componente Capturador de Evento en pantalla');

const ContadorApp = ({valor_contador}) => 
{
   console.log('.:ContadorApp:.');
   
   const [contador, setContador] = useState(valor_contador);

   const funcionSUMAR = () => 
   {
       setContador(contador + 1);
       console.log('Contador = ', contador);
   }

   const funcionREINICIAR = () => 
   {
       setContador(valor_contador);
       console.log('Contador = ', contador);
   }

   const funcionRESTAR = () => 
   {
       setContador(contador - 1);
       console.log('Contador = ', contador);
   }
   return(
        <>
        <h1>Contador Component's React</h1>
        <h5>Acumulador de clicks</h5>
        <hr></hr>
        <h1>Contador = {contador}</h1>
        <button onClick={funcionSUMAR}>SUMAR +1</button>
        <button onClick={funcionREINICIAR}>.:REINICIAR 0:.</button>
        <button onClick={funcionRESTAR}>RESTAR -1</button>
        </>
   );
}
export default ContadorApp;
