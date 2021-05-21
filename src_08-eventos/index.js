import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de Estilos
import './index.css'

// Componentes Creados

import ComponenteEventoApp from './ComponenteEventoApp'

const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteEventoApp/>, divRoot);