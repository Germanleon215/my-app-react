import React,{useState, Fragment} from 'react';

const NumText =()=>{
    const[valor, setValor] =useState(0) ; 
    const[val, setVal] =useState(0) ; 
        return(
        <Fragment>
        <button onClick={()=> setValor(valor+1)}>Contador 1  </button>
         <span> Incremento :{valor}</span>
          <hr/>
          <button onClick={()=> setVal(val-1)}>Contador 1  </button>
         <span> decremento :{val}</span>
        </Fragment>
    );
}
export default NumText;