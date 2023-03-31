import axios from "axios";
import jwtDecode from "jwt-decode";
import { Redirect } from "react-router-dom";

const urlBase = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("token");
/* const headers = { Authorization: "Bearer " + token }; */

export function isTokenValid(token) {
  try {
    // const decodedToken = jwtDecode(token);
    //const currentTime = Date.now() / 1000;
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    console.log("Hola");
    console.log(decodedToken);
    return decodedToken;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function ingresar(usuario, contraseña) {
  try {
    const response = await axios({
      url: `${urlBase}/autenticacion/login`,
      method: "POST",
      data: {
        usuario: usuario,
        contraseña: contraseña,
      },
    });
    localStorage.setItem("token", response.data.token);
    console.log(response.data.token);
    return <Redirect to="/menu" />;
  } catch (error) {
    console.log(error.response.data.error);
    throw error.response.data.error;
  }
}
