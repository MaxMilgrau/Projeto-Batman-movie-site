import React, {useContext} from 'react';
import './styles.css';
import { UserContext } from '../../contexts/userContext';

function Contador_button(){
 
    let {contador, setContador}=useContext(UserContext);

    return (
        <div className='button-container'>
        <button onClick={() => setContador(contador++)} id='change-number'>atualizar</button>
        </div>
      


    )



}

export default Contador_button;
