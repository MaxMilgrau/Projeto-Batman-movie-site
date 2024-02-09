import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/userContext';


function Profile(){
    const {login}=useContext(UserContext);

    useEffect(() =>{
        console.log('teste de useEffect no componente profile');
    }, [login]);

    return (
        <div>{login ? <h1>MOZAAART O CACHORRO</h1> : 'faça seu login para acessar as informações do usuário'}</div>
       
    )

}

export default Profile;
