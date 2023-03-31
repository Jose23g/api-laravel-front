import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom"
import { isTokenValid } from "../services/control";

const PrivateRoute =({component:Component, ...rest}) => {
    const [autenticacion, setautenticacion] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token && isTokenValid(token)) {
            setautenticacion(true);
        }else{
            setautenticacion(false);
        }
    }, []);


    return(
        <Route { ...rest}>
            {autenticacion? <Component/> : <Redirect to="/" /> }
        </Route>
    )
}

export default PrivateRoute;