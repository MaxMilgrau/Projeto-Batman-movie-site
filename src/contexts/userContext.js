import { createContext, useState} from "react";


export const UserContext=createContext();

export const UserStore=({ children }) =>{
    const [login, setLogin]=useState(false);
    const [contador, setContador]=useState(0);



    return (
        <UserContext.Provider value={{login, setLogin, contador, setContador}}>
            {children}
        </UserContext.Provider>
    )
}