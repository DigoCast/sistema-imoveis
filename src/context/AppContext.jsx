import { createContext, useState } from "react";
import Api from "../services/Api";
import { toast } from "react-toastify";
import { setLocalStorage } from "./utils";

export const AppContext = createContext({});

export const AppContextProvider = ({children}) => {
    const [user, setUser] = useState();

    async function authenticate(email, password) {
        Api.post('/session', {email, password})
        .then((res) => {
            if(!res.data.error === true){
                toast(res.data.error);
            }
            const email = res.data.email;
            const payload = {token: res.data.token, email}
            setUser(payload);
            setLocalStorage(payload);
            //continuar daqui min: 44:17 aula 6
        })
        .catch(() => {
            console.log('Erro: App Error')
        })
    }
    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}