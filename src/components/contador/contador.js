import { UserContext } from '../../contexts/userContext';
import React, {useContext} from 'react';
import './styles.css'


function Contador(){

    const {contador}=useContext(UserContext);


    return (
        
        <div className='contador-container'>
        {contador%2==0 ? <span className='contandor-contabilizer'>o número {contador} é par</span> :  <span className='contandor-contabilizer'>o número {contador} é impar</span>}
        </div>
        
        
        
       




    )



    }


export default Contador;