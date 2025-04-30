import { createContext, useEffect, useState } from "react";
import Api from "../services/Api";
import { toast } from "react-toastify";
import { getLocalStorage, setLocalStorage } from "./utils";

export const AppContext = createContext({});

export const AppContextProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const user = getLocalStorage();

        if(user){
            setUser(user);
        }

    }, []);

    async function authenticate(email, password) {
        Api.post('/session', {email, password})
        .then((res) => {
            if(!res.data.error === true){
                toast(res.data.message);
            }

            const id = res.data.user.id;
            const email = res.data.user.email;
            const payload = {token: res.data.token, email, id};

            setUser(payload);
            setLocalStorage(payload);
            window.location.href = "/perfil";
        })
        .catch(() => {
            console.log('Erro: App Error');
        })
    }

    function logout(){
        setUser(null);
        setLocalStorage(null);
    }

    return(
        <AppContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AppContext.Provider>
    )
}