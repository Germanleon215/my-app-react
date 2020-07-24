import React from 'react';
import Saludos from './evaluacion/puntos';
import NumText from './evaluacion/numerotexto';
import Matrices from './evaluacion/GoMatrices';

function App() {
  return (
    <div className="App">  
       <h1>\(° °)/</h1>
       <Saludos />
       <hr />  
      <NumText />
      <hr />
      <Matrices />

    </div>
  );
}

export default App;





/*import React from 'react';
import MicomponenteDos from './components/Micomponente2';

import Saludo from './components/01Saludo';
import Contador from './components/02contador';
import Operado from './components/03OperadorT';
import Matriz from './components/04Matriz';
import MatrizOperaciones from './components/05Matriz';

function App(){
  return (
    <div>

      <h1> Practicas:....React</h1>
      <hr />
      <MicomponenteDos />
      <hr />
      <Saludo variable=" Otro Saludo en Variable" />
      <hr />
      <Contador />
      <hr />
      <Operado />
      <hr />
     <Matriz />
     <hr />
     <MatrizOperaciones />
    </div>
  );
}

export default App;
*/
/*
import React from 'react';
import Contador from'./components/Contador' //con o sin extension js

function App() {
  return (
    <div className="App">  
       <h1>hola mundo desde react</h1>
       <Contador /> 
    </div>
  );
}

export default App;*/
