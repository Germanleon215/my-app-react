import React, { Fragment } from 'react';
const Operado = () => {
    const edad = 10;
    
    return (  
        <Fragment>
            <h1>Operador terciario...
            </h1>
            {edad >= 10? 'Mayor Edad' : 'Menor Edad'}
        </Fragment>
    );
}
 
export default Operado;