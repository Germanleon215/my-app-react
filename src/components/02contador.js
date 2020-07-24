import React,{useState, Fragment} from 'react';

const Contador = () => {

    const[valor, setValor] =useState(0) ;
    const[numero, setNumero] =useState(0) ;

    const IncrementoDos =()=> {
        setNumero(numero+2);
        console.log("Mensaje de Contador")
    }
        return(
        <Fragment>
            <button onClick={()=> setValor(valor+1)}>Contador 1  </button>
    <span> Incremento 1::::::{valor}</span>
            <hr/>
            <button onClick={IncrementoDos}>Contador 2  </button>
        <span> Incremento 2:::::{numero}</span>
        </Fragment>
    );
}
 
export default Contador;