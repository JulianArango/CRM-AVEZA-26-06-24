import axios from "axios";
import {
  createPagosClientes,
} from "../pagosClientesControllers/postPagosClientes.js";

const obtenerPago = async (idPago) => {
  console.log("Payment id: ", idPago);
  try {
    const { data } = await axios.get(
      `https://api.mercadopago.com/v1/payments/${idPago}`,
      {
        headers: {
          Authorization: process.env.ACCESSTOKEN,
        },
      }
    );
      console.log("Respuesta obtener pago: ", data.additional_info);
    const idCaso = data.additional_info.items[0].id;
    console.log("idCaso: ", data.additional_info.items[0].id);
    const orderId = data.order.id;
    const importeDeLaTransaccion = data.transaction_amount;
    const estado = data.status;
    const descripcion = data.description;
    const fechaDeAprobacion = data.date_approved;
    const tipoDePago = data.payment_type_id;
    const pagoId = data.id;
    


 console.log("Data crear pago:",)
    const newPago = createPagosClientes(
      idCaso,
      descripcion,
      fechaDeAprobacion,
      pagoId,
      orderId,
      tipoDePago,
      estado,
      importeDeLaTransaccion
      
    );
    return data;
  } catch (error) {
    console.log(error);
    // window.alert("No se obtuvieron los datos del pago");
  }
};


export {
  obtenerPago,
};
