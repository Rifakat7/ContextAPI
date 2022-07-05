import {  useState } from "react"
import { createContext } from "react";

export const AuthContext = createContext();      //1st step create a context

export const AuthProvider = ({children})=>{               //2nd crete a Provider
    const [isAuthorized, setIsAuthorized] = useState(false);           //3rd have the info insode Provider

    const login  = (username,password) =>{
        if(username && password){
            setIsAuthorized(true);
        }
    };

    const logout = ()=>{
        setIsAuthorized(false);
    }
    return (         
        // we write {} inside {} bcoze if we dclr a var values ={isAuthorized,login,logout};so here key and value are same like  isAuthorized:isAuthorized,login:login etc.so if the key value has same var name than no need to write keys and values seperatly.                                                                                     //4th step share the information than wrap the app and use the information.
        <AuthContext.Provider value={{isAuthorized,login,logout}}>     
        {children}
        </AuthContext.Provider>
    );
};
