import "../../App.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ingresos.css";
import { Link } from "react-router-dom";
import { Button } from "../Mystyles";

const Ingresos = () => {
  const cliente = useSelector((state) => state.cliente);
  const acreedores = useSelector((state) => state.acreedores);

  const ingresosObj = [];
  const gastosObj = [];
  const bienesObj = [];
  
  const initGastos = {
    energia: "",
    aguaAlcAseo: "",
    gas: "",
    telecomunicaciones: "",
    television: "",
    arriendo: "",
    seguros: "",
    alimentacion: "",
    transporte: "",
    otros: "",
  };

  const initIngreso = {
    concepto: "",
    valor: "",
  };

    const initBien = {
      tipoBien: "",
      valor: "",
      tipoAfectacion: "",
      descripcionBien: "",
    };
  
  const [ingreso, setIngreso] = useState(initIngreso);
  const [ingresos, setIngresos] = useState(ingresosObj);
  const [gasto, setGasto] = useState(initGastos);
  const [gastos, setGastos] = useState(gastosObj);
    const [bien, setBien] = useState(initBien);
    const [bienes, setBienes] = useState(bienesObj);

  const addIngreso = (ingreso) => {
    setIngresos([...ingresos, ingreso]);
    setIngreso(initIngreso);
  };

  const addGasto = (gasto) => {
    setGastos([...gastos, gasto]);
    setGasto(initGastos);
  };

    const addBien = (bien) => {
      setIngresos([...bienes, bien]);
      setBien(initBien);
    };
  console.log("Gastos:", gastos);
  console.log("Datos gasto:", gasto);

  console.log("Ingresos:", ingresos);
  console.log("ingreso:", ingreso);

    console.log("bienes:", bienes);
    console.log("bien:", bien);

  const handleIngresoChange = (e) => {
    setIngreso({
      ...ingreso,
      [e.target.name]: e.target.value,
    });
  };

  const handleGastoChange = (e) => {
    setGasto({
      ...gasto,
      [e.target.name]: e.target.value,
    });
  };

    const handleBienChange = (e) => {
      setBien({
        ...bien,
        [e.target.name]: e.target.value,
      });
    };

  const handleSubmitIngreso = async (e) => {
    e.preventDefault();
    // if (
    //   !userState.userFirstname ||
    //   !userState.userLastname ||
    //   !userState.userPhone
    // )
    //   return;
    addIngreso(ingreso);
    try {
      // await postgasto(deudas);
    } catch (error) {
      console.error("Error al crear las deudas:", error.message);
    }
  };

    const handleSubmitBien = async (e) => {
      e.preventDefault();
      // if (
      //   !userState.userFirstname ||
      //   !userState.userLastname ||
      //   !userState.userPhone
      // )
      //   return;
      addBien(bien);
      try {
        // await postDeuda(deudas);
      } catch (error) {
        console.error("Error al crear las deudas:", error.message);
      }
    };

  const handleSubmitGasto = async (e) => {
    e.preventDefault();
    addGasto(gasto);
    try {
      // await postGasto(gasto);
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
    <div className="contenedorinsolvencia">
      <div className="encabezado">
        <span className="titulo">Datos para la Solicitud de Insolvencia</span>
      </div>
      <br />
      <div className="menu-insolvencia">
        <Link to="/ingreso">
          <Button>Ingresos / Gastos</Button>
        </Link>
        <Link to="/bienes">
          <Button>Bienes / Procesos</Button>
        </Link>
        <Link to="/sociedades">
          <Button>Soc. Conyugal / Ob. Alimentarias</Button>
        </Link>
        <input type="file" id="doc" />
        {/* <Link to={"/generardocumentos"}> */}
        <Button
          className="botonesiniciosesion"
          // onClick={handlerGenerarSolicitud}
        >
          Generar solicitud
        </Button>
      </div>
      <form
        onSubmit={handleSubmitGasto}
        className="datosinsolvencia"
        id="continsolvencia"
      >
        <div className="infotodosingresos">
          <div className="formingresos">
            <br />
            <div className="encabezadoingresos">
              <h6 className="titulo">Ingresos</h6>
            </div>
            <div className="infodetailingresos">
              <label htmlFor="concepto" className="labelingresos">
                Concepto:
              </label>
              <input
                type="text"
                className="cajaingresos"
                name="concepto"
                id="concepto"
                value={ingreso.concepto}
                onChange={(event) => handleIngresoChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="valor" className="labelingresos">
                Valor :
              </label>
              <input
                type="number"
                className="cajaingresos"
                name="valor"
                id="valor"
                value={ingreso.valor}
                onChange={(event) => handleIngresoChange(event)}
              />
            </div>

            <Button onClick={handleSubmitIngreso} value="Guardaringreso">
              Guardar ingreso
            </Button>
            <br />
            <br />

            <div className="encabezadoingresos">
              <h6 className="titulo">Bienes</h6>
            </div>
            <div className="infodetailingresos">
              <label htmlFor="tipoBien" className="labelingresos">
                Tipo de bien:
              </label>
              <input
                type="text"
                className="cajaingresos"
                name="tipoBien"
                id="tipoBien"
                value={bien.tipoBien}
                onChange={(event) => handleBienChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="valorBien" className="labelingresos">
                Valor comercial:
              </label>
              <input
                type="number"
                className="cajaingresos"
                name="valor"
                id="valorBien"
                value={bien.valor}
                onChange={(event) => handleBienChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="tipoafectacion" className="labelingresos">
                Tipo de afectación:
              </label>
              <input
                type="text"
                className="cajaingresos"
                name="tipoafectacion"
                id="tipoafectacion"
                value={bien.tipoAfectacion}
                onChange={(event) => handleBienChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="decripcionBien" className="labelingresos">
                Descripción:
              </label>
              <input
                type="text"
                className="cajaingresos"
                name="descripcionBien"
                id="descripcionBien"
                value={bien.descripcionBien}
                onChange={(event) => handleBienChange(event)}
              />
            </div>
            <Button onClick={handleSubmitBien} value="Guardarbien">
              Guardar bien
            </Button>
            <br />
            <br />
          </div>
          <div className="formgastos">
            <br />
            <div className="encabezadogastos">
              <h6 className="titulo">Gastos mensuales</h6>
            </div>

            <div className="infodetailingresos">
              <label htmlFor="energia" className="labelingresos">
                Energía:
              </label>
              <input
                type="number"
                className="cajaingresos"
                name="energia"
                id="energia"
                value={gasto.energia}
                onChange={(event) => handleGastoChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="agua" className="labelingresos">
                Agua, alcantarillado y aseo:
              </label>
              <input
                type="number"
                number
                className="cajaingresos"
                name="aguaAlcAseo"
                id="agua"
                value={gasto.aguaAlcAseo}
                onChange={(event) => handleGastoChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="gas" className="labelingresos">
                Gas:
              </label>
              <input
                type="number"
                number
                className="cajaingresos"
                name="gas"
                id="gas"
                value={gasto.gas}
                onChange={(event) => handleGastoChange(event)}
              />
            </div>

            <div className="infodetailingresos">
              <label htmlFor="telecomunicaciones" className="labelingresos">
                Telecomunicaciones :
              </label>
              <input
                type="number"
                number
                className="cajaingresos"
                name="telecomunicaciones"
                id="telecomunicaciones"
                value={gasto.telecomunicaciones}
                onChange={(event) => handleGastoChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="television" className="labelingresos">
                Televisión:
              </label>
              <input
                type="number"
                number
                className="cajaingresos"
                name="television"
                id="television"
                value={gasto.television}
                onChange={(event) => handleGastoChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="arriendo" className="labelingresos">
                Arriendo:
              </label>
              <input
                type="number"
                number
                className="cajaingresos"
                name="arriendo"
                id="arriendo"
                value={gasto.arriendo}
                onChange={(event) => handleGastoChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="seguros" className="labelingresos">
                Seguros:
              </label>
              <input
                type="number"
                number
                className="cajaingresos"
                name="seguros"
                id="seguros"
                value={gasto.seguros}
                onChange={(event) => handleGastoChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="alimentacion" className="labelingresos">
                Alimentación:
              </label>
              <input
                type="number"
                number
                className="cajaingresos"
                name="alimentacion"
                id="alimentacion"
                value={gasto.alimentacion}
                onChange={(event) => handleGastoChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="transporte" className="labelingresos">
                Transporte:
              </label>
              <input
                type="number"
                number
                className="cajaingresos"
                name="transporte"
                id="transporte"
                value={gasto.transporte}
                onChange={(event) => handleGastoChange(event)}
              />
            </div>
            <div className="infodetailingresos">
              <label htmlFor="otros" className="labelingresos">
                Otros gastos:
              </label>
              <input
                type="number"
                number
                className="cajaingresos"
                name="otros"
                id="otros"
                value={gasto.otros}
                onChange={(event) => handleGastoChange(event)}
              />
            </div>

            <Button type="submit" value="Guardar">
              Guardar gastos
            </Button>
          </div>
        </div>
        <br />
        <div className="resultadostodos">
          <div className="resultadoingresos">
            <table className="informationTable">
              <thead>
                <tr>
                  <th className="tableCell">Ingreso</th>
                  <th className="tableCell">Valor</th>
                </tr>
              </thead>
              <tbody>
                {ingresos.length > 0 ? (
                  ingresos.map((ingreso, index) => (
                    <tr key={index}>
                      <td className="tableCell" key={index}>
                        {ingreso.concepto}
                      </td>
                      <td className="tableCell" key={index}>
                        {ingreso.valor}
                      </td>
                    </tr>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <div className="resultadogastos">
            <table className="informationTable">
              <tr>
                <th className="tableCell">Energía:</th>
                {gastos.length > 0 ? (
                  gastos.map((gasto, index) => (
                    <td className="tableCell" key={index}>
                      {gasto.energía}
                    </td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th className="tableCell">Agua, alcantarillado y aseo:</th>
                {gastos.length > 0 ? (
                  gastos.map((gasto, index) => (
                    <td className="tableCell" key={index}>
                      {gasto.aguaAlcAseo}
                    </td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th className="tableCell">Gas:</th>
                {gastos.length > 0 ? (
                  gastos.map((gasto, index) => (
                    <td className="tableCell" key={index}>
                      {gasto.gas}
                    </td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th className="tableCell">Televisión:</th>
                {gastos.length > 0 ? (
                  gastos.map((gasto, index) => (
                    <td className="tableCell" key={index}>
                      {gasto.television}
                    </td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th className="tableCell">Telecomunicaciones :</th>
                {gastos.length > 0 ? (
                  gastos.map((gasto, index) => (
                    <td className="tableCell" key={index}>
                      {gasto.telecomunicaciones}
                    </td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th className="tableCell">Arriendo:</th>
                {gastos.length > 0 ? (
                  gastos.map((gasto, index) => (
                    <td className="tableCell" key={index}>
                      {gasto.arriendo}
                    </td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th className="tableCell">Seguros:</th>
                {gastos.length > 0 ? (
                  gastos.map((gasto, index) => (
                    <td className="tableCell" key={index}>
                      {gasto.seguros}
                    </td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
              <tr>
                <th className="tableCell">Alimentación:</th>
                {gastos.length > 0 ? (
                  gastos.map((gasto, index) => (
                    <td className="tableCell" key={index}>
                      {gasto.alimentacion}
                    </td>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tr>
            </table>

            {/* <table className="informationTable">
              <thead>
                <tr>
                  <th className="tableCell">Energía</th>
                  <th className="tableCell">Agua, alcantarillado y aseo</th>
                  <th className="tableCell">Gas</th>
                  <th className="tableCell">Telecomunicaciones</th>
                  <th className="tableCell">Televisión</th>
                  <th className="tableCell">Arriendo</th>
                  <th className="tableCell">Seguros</th>
                  <th className="tableCell">Alimentación</th>
                  <th className="tableCell">Transporte</th>
                  <th className="tableCell">Otros gastos</th>
                </tr>
              </thead>
              <tbody>
                {gastos.length > 0 ? (
                  gastos.map((gasto, index) => (
                    <tr key={index}>
                      <td className="tableCell" key={index}>
                        {gasto.energia}
                      </td>
                      <td className="tableCell" key={index}>
                        {gasto.aguaAlcAseo}
                      </td>
                      <td className="tableCell" key={index}>
                        {gasto.gas}
                      </td>
                      <td className="tableCell" key={index}>
                        {gasto.telecomunicaciones}
                      </td>
                      <td className="tableCell" key={index}>
                        {gasto.television}
                      </td>
                      <td className="tableCell" key={index}>
                        {gasto.arriendo}
                      </td>
                      <td className="tableCell" key={index}>
                        {gasto.seguros}
                      </td>
                      <td className="tableCell" key={index}>
                        {gasto.alimentacion}
                      </td>
                      <td className="tableCell" key={index}>
                        {gasto.otros}
                      </td>
                    </tr>
                  ))
                ) : (
                  <td>&nbsp;</td>
                )}
              </tbody>
            </table> */}
          </div>
        </div>
      </form>
    </div>
  );
};
export default Ingresos;
