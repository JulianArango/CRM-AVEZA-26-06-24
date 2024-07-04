 import {models} from '../../DB.js'
const { Cliente, Abogado, Usuario } = models
 
const getLoginGoogle = async (email,rol) => {
    const login = await Usuario.findOne({
      where: {
        email: email,
      },
    });
    if (login) {
      console.log("Usuario encontrado:", login);
      const user = await Cliente.findOne({
        where: {
          cedulaCliente: login.cedula,
        },
      });
      console.log("Cedula cliente:", user.cedulaCliente);
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
}

export {
    getLoginGoogle
}