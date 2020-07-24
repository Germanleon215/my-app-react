import React,{useState, Fragment} from 'react';

const Matrices =()=>{
    const [lista, setLista] = useState([1,2,3,4,5]);
    const [dias, setDias] = useState(["go","o","o","o"]);
    const uniendoArray = [...lista, ...dias];

    const [numero, setNumero] = useState(6);
    const agregarNumero = () => {
        setNumero(numero + 1);
        setLista([...lista, numero]);
    }
    const [texto, setTexto] = useState(["Ever","German","Leon"]);
    const agregarTexto = () => {
        setDias([...dias, ...texto]);
    }
    return (  
        <Fragment>
       
        <h1> valor a un array</h1>
        <button onClick ={agregarTexto} > Agregar texto</button>
        {
            dias.map((item, index) =>
                <p key = {index} > {item} - {index}</p>
                )
        }

        </Fragment>
    );
}
export default Matrices;