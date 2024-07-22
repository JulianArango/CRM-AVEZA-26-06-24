import "../../App.css";
import logo from "../../img/logoAveza.png";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../insolvencia/insolvencia.css";
import { printDivContent } from "../../utils/printDivContent";
import { Link} from "react-router-dom";
import { Button } from "../Mystyles";

const Insolvencia = () => {
  const cliente = useSelector((state) => state.cliente);
  const acreedores = useSelector((state) => state.acreedores);

  const deudasObj = [];
 const initDeuda = {
   idDeuda: "",
   acreedor:"",
   tipoDeuda: "",
   tipoGarantia: "",
   documentoSoporte: "",
   capital: "",
   intereses: "",
   clasificacion: "",
   diasMora:"",
 };
  const [deudas, setDeudas] = useState(deudasObj);

    const [datosDeuda, setDatosDeuda] = useState(initDeuda);
  
  const addDeuda = (deuda) => {
    setDeudas([...deudas, deuda]);
    setDatosDeuda(initDeuda);
  };
  console.log('Deudas:', deudas)
  console.log("Datos deuda:", datosDeuda);
  const handleDeudaChange = (e) => {
    setDatosDeuda({
      ...datosDeuda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitDeuda = async (e) => {
    e.preventDefault();
    // if (
    //   !userState.userFirstname ||
    //   !userState.userLastname ||
    //   !userState.userPhone
    // )
    //   return;
    addDeuda(datosDeuda);
try {
      // await postDeudas(deudas);
    } catch (error) {
      console.error("Error al crear las deudas:", error.message);
    }

  };

    useEffect(() => {
      // const obtenerAcreedores = async () => {
      //   try {
      //     const listaAcreedores = await getAcreedores();
      //     setAcreedores(listaAcreedores);
      //   } catch (error) {
      //     console.error("Error al obtener las instituciones:", error);
      //   }
      // };

      // obtenerAcreedores();
    }, []);

  return (
    <div>
      <div className="encabezado">
        <span className="titulo">Datos para la Solicitud de Insolvencia</span>
      </div>
      <div className="menu-insolvencia">
        {/* <input type="file" id="doc" />
        <Link to={"/generardocumentos"}>
        <Button
          className="botonesiniciosesion"
          onClick={handlerGenerarDocumentos}
        >
          Generar documentos
        </Button>
        </Link> */}

        <Link to="/propuesta">
          <Button>Ingresos / Gastos / Propuesta</Button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmitDeuda}
        className="continsolvencia"
        id="continsolvencia"
      >
        <div className="infotodosinsolvencia">
          <div className="infodeudas">
            <br />
            <div className="infodetaildeudas">
              <label htmlFor="acreedor" className="labelcrearcaso">
                Selecciona el acreedor:
              </label>
              <select
                name="acreedor"
                id="acreedor"
                className="cajacreardeuda"
                onChange={(event) => handleDeudaChange(event)}
              >
                <option value="" className="opcionesacreedor">
                  Acreedor
                </option>
                {/* {acreedores.map((acreedor) => (
                  <option
                    key={acreedor.idAcreedor}
                    value={acreedor.idAcreedor}
                    className="opcionesacreedor"
                  >
                    {acreedor.nombre}
                  </option>
                ))} */}
              </select>
            </div>
            <div className="infodetaildeudas">
              <label for="tipoDeuda" className="labeldetaildeudas">
                Naturaleza del crédito::
              </label>
              <input
                type="text"
                className="cajadeudas"
                name="tipoDeuda"
                id="tipoDeuda"
                value={datosDeuda.tipoDeuda}
                onChange={(event) => handleDeudaChange(event)}
              />
            </div>
            <div className="infodetaildeudas">
              <label for="tipogarantia" className="labeldetaildeudas">
                Tipo de garantía:
              </label>
              <input
                type="text"
                text
                className="cajadeudas"
                name="tipoGarantia"
                id="tipogarantia"
                value={datosDeuda.tipoGarantia}
                onChange={(event) => handleDeudaChange(event)}
              />
            </div>
            <div className="infodetaildeudas">
              <label for="documentosoporte" className="labeldetaildeudas">
                Documento que soporta la garantía:
              </label>
              <input
                type="text"
                text
                className="cajadeudas"
                name="documentoSoporte"
                id="documentosoporte"
                value={datosDeuda.documentoSoporte}
                onChange={(event) => handleDeudaChange(event)}
              />
            </div>

            <div className="infodetaildeudas">
              <label for="capital" className="labeldetaildeudas">
                Capital :
              </label>
              <input
                type="number"
                text
                className="cajadeudas"
                name="capital"
                id="capital"
                value={datosDeuda.capital}
                onChange={(event) => handleDeudaChange(event)}
              />
            </div>
            <div className="infodetaildeudas">
              <label for="intereses" className="labeldetaildeudas">
                Valor intereses:
              </label>
              <input
                type="number"
                text
                className="cajadeudas"
                name="intereses"
                id="intereses"
                value={datosDeuda.intereses}
                onChange={(event) => handleDeudaChange(event)}
              />
            </div>
            <div className="infodetaildeudas">
              <label for="clasificacion" className="labeldetaildeudas">
                Clasificación del Crédito:
              </label>
              <input
                type="text"
                text
                className="cajadeudas"
                name="clasificacion"
                id="clasificacion"
                value={datosDeuda.clasificacion}
                onChange={(event) => handleDeudaChange(event)}
              />
            </div>
            <div className="infodetaildeudas">
              <label for="diasmora" className="labeldetaildeudas">
                Número de días en mora:
              </label>
              <input
                type="text"
                text
                className="cajadeudas"
                name="diasMora"
                id="diasmora"
                value={datosDeuda.diasMora}
                onChange={(event) => handleDeudaChange(event)}
              />
            </div>

            <table className="informationTable">
              <tr>
                <th>Nombre acreedor:</th>
                {deudas.length > 0 ? (
                  deudas.map((deuda, index) => (
                    <td key={index}>{deuda.acreedor}</td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th>Naturaleza del crédito:</th>
                {deudas.length > 0 ? (
                  deudas.map((deuda, index) => (
                    <td key={index}>{deuda.tipoDeuda}</td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th>Tipo de garantía:</th>
                {deudas.length > 0 ? (
                  deudas.map((deuda, index) => (
                    <td key={index}>{deuda.tipoGarantia}</td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th>Documento que soporta la garantía:</th>
                {deudas.length > 0 ? (
                  deudas.map((deuda, index) => (
                    <td key={index}>{deuda.documentoSoporte}</td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th>Capital :</th>
                {deudas.length > 0 ? (
                  deudas.map((deuda, index) => (
                    <td key={index}>{deuda.capital}</td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th>Valor intereses:</th>
                {deudas.length > 0 ? (
                  deudas.map((deuda, index) => (
                    <td key={index}>{deuda.intereses}</td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th>Clasificación del Crédito:</th>
                {deudas.length > 0 ? (
                  deudas.map((deuda, index) => (
                    <td key={index}>{deuda.clasificacion}</td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th>Número de días en mora:</th>
                {deudas.length > 0 ? (
                  deudas.map((deuda, index) => (
                    <td key={index}>{deuda.diasMora}</td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
            </table>
          </div>
          <div className="infobienes">
            {/* <div className="encabezadoAbogado">
              <h6 className="titulo">Cliente</h6>
            </div>
            <div className="infodetailcaso">
              <label for="ClienteCedulaCliente" className="labeldetailcaso">
                Número de cédula:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="ClienteCedulaCliente"
                id="ClienteCedulaCliente"
                value={casoDetail.ClienteCedulaCliente}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="nombresCliente" className="labeldetailcaso">
                Nombre (s):
              </label>
              <input
                type="text"
                className="cajadetail"
                name="nombresCliente"
                id="nombresCliente"
                value={casoDetail.Cliente.nombres}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="apellidosCliente" className="labeldetailcaso">
                Apellido (s):
              </label>
              <input
                type="text"
                className="cajadetail"
                name="apellidosCliente"
                id="apellidosCliente"
                value={casoDetail.Cliente.apellidos}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="celularCliente" className="labeldetailcaso">
                Número de celular:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="celularCliente"
                id="celularCliente"
                value={casoDetail.Cliente.celular}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="emailCliente" className="labeldetailcaso">
                Correo electrónico:
              </label>
              <input
                type="email"
                className="cajadetail"
                name="emailCliente"
                id="emailCliente"
                value={casoDetail.Cliente.email}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="direccionCliente" className="labeldetailcaso">
                Dirección:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="direccionCliente"
                id="direccionCliente"
                value={casoDetail.Cliente.direccion}
                disabled
              />
            </div>
            <br />
            <br />
            <div className="encabezadoAbogado">
              <h6 className="titulo">Abogado</h6>
            </div>
            <div className="infodetailcaso">
              <label for="AbogadoCedulaAbogado" className="labeldetailcaso">
                Número de cédula:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="AbogadoCedulaAbogado"
                id="AbogadoCedulaAbogado"
                value={casoDetail.AbogadoCedulaAbogado}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="nombresAbogado" className="labeldetailcaso">
                Nombre (s):
              </label>
              <input
                type="text"
                className="cajadetail"
                name="nombresAbogado"
                id="nombresAbogado"
                value={casoDetail.Abogado.nombres}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="apellidosAbogado" className="labeldetailcaso">
                Apellido (s):
              </label>
              <input
                type="text"
                className="cajadetail"
                name="apellidosAbogado"
                id="apellidosAbogado"
                value={casoDetail.Abogado.apellidos}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="celularAbogado" className="labeldetailcaso">
                Número de celular:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="celularAbogado"
                id="celularAbogado"
                value={casoDetail.Abogado.celular}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="emailAbogado" className="labeldetailcaso">
                Correo electrónico:
              </label>
              <input
                type="email"
                className="cajadetail"
                name="emailAbogado"
                id="emailAbogado"
                value={casoDetail.Abogado.email}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="direccionAbogado" className="labeldetailcaso">
                Dirección:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="direccionAbogado"
                id="direccionAbogado"
                value={casoDetail.Abogado.direccion}
                disabled
              />
            </div> */}
          </div>
          <Button type="submit" value="Guardar">
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Insolvencia;
