import React, { useState } from 'react'

console.log('Componente Capturador de Evento en pantalla');

const ContadorApp = ({valor_contador}) => 
{
   console.log('.:ContadorApp:.');
   
   const [contador, setContador] = useState(valor_contador);

   const contarClick = () => 
   {
       setContador(contador + 1);
       console.log('Contador = ', contador);
   }
   return(
        <>
        <h1>Contador Component's React</h1>
        <h5>Acumulador de clicks</h5>
        <hr></hr>
        <h1>Contador = {contador}</h1>
        <button onClick={contarClick}>Contar +1</button>
        </>
   );
}
export default ContadorApp;
