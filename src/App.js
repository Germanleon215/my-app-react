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
      por qe 
    </div>
  );
}

export default App;