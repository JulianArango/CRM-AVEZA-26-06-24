 import { models } from "../../DB.js";
 const { Cliente, Abogado, Usuario } = models
const getLogin = async (cedula, password) => {
  console.log('Datos get login:', {cedula, password})
    const login = await Usuario.findOne({
      where: {
        cedula:cedula,
        password: password,
      },
    });
    if (login) {
      console.log('Usuario encontrado:', login)
          const user = await Cliente.findOne({
            where: {
              cedulaCliente: login.cedula,
            },
          });
       console.log('Cedula cliente:', user.cedulaCliente)
          if (!user) {
            const user = await Abogado.findOne({
              where: {
                cedulaAbogado: login.cedula,
              },
            });
            console.log("Cedula abogado:", user.cedulaAbogado);
            if (!user) throw new Error("Aún no tiene autorización para ingresar");
            return {
              access: true,
              usuario: user,
            };
          }
          return {
            access: true,
            usuario: user,
          };
    } else {
      return {
        access: false,
      };
    }
};

export {
  getLogin,
};
