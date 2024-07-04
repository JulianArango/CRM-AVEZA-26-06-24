import { useNavigate } from "react-router-dom";
import axios from "axios";


export async function registroAbogado(userDataRegistro) {
  const {
    email,
    nombres,
    apellidos,
    cedulaAbogado,
    celular,
    direccion,
    nombre_ciudad,
    tarjetaProf,
    password,
  } = userDataRegistro;

 

  console.log("User data registro:", userDataRegistro);

  const URL = "/abogados";
  try {
    await axios.post(URL, {
      email: `${email}`,
      // password: `${password}`,
      nombres: `${nombres}`,
      apellidos: `${apellidos}`,
      cedulaAbogado: `${cedulaAbogado}`,
      celular: `${celular}`,
      direccion: `${direccion}`,
      nombre_ciudad: `${nombre_ciudad}`,
      tarjetaProf: `${tarjetaProf}`,
      password: `${password}`,
    });
    window.alert("Se ha registrado el abogado con éxito.");
    navigate("/abogados");
  } catch (error) {
    window.alert("No fue posible registrar el abogado.");
  }
}
