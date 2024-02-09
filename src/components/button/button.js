import React from 'react';
import './styles.css';

function Button({active, onClick, count}){
    
    /*
    function noClique(){
        if(active){
            return window.alert('botão está habilitado');
        }else{
            return window.alert('botão está desabilitado');
        }
    }
*/
    return(
        <div className='button-container'>
       <button  onClick={() => onClick(count++)} style={active? {backgroundColor: '#40E0D0'} : {backgroundColor: '#f00'}}>{active? 'habilitado' : 'desabilitado'}</button>
       <span>Seus dados estão a salvo conosco</span>

        </div>
      
    );
}





export default Button;
