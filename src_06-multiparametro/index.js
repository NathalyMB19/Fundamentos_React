import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de Estilos
import './index.css'

// Componentes Creados

import ComponenteApp from './ComponenteApp'

const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteApp parm01='0001' parm02 = 'XXX0002'/>, divRoot);