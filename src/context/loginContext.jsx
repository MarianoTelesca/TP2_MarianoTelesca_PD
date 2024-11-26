import { createContext, useContext, useState } from "react";

const loginContext = createContext();

export function LoginProvider({children}){
    
    const [logueado, setLogueado] = useState(false);

    const loginUsuario = () =>{
        const usuario = "usuario";
        setLogueado(usuario);
    }

    const loginAdmin = () =>{
        const admin = "admin";
        setLogueado(admin);
    }

    const logout = () => {
        setLogueado(false);
    }
    
    return ( 
        <loginContext.Provider value={ {logueado, loginAdmin, loginUsuario, logout} } > 
            {children} 
        </loginContext.Provider>
    )
}

export function useLogin(){
    return ( useContext(loginContext) );
}