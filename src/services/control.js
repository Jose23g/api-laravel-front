import axios from "axios";

const urlBase = process.env.REACT_APP_BASE_URL;

export async function ingresar(email, password) {
  try {
    const response = await axios({
      url: `${urlBase}/autenticacion/login`,
      method: "POST",
      data: {
        usuario: email,
        contraseña: password,
      },
    });
    console.log(response.data);
  }catch(error){
    throw error;
  }
} 
