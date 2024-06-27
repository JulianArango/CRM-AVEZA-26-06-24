import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Mystyles";
import "../detail/detail.css";
import logo from "../../img/logoAveza.png";
import {
  getByIdAbogado,
  getByIdCliente,
  setAbogado,
  setCliente,
} from "../../redux/actions";
import { deleteAbogado, deleteCliente } from "../../redux/actions";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const source = useSelector((state) => state.source);

  const datos = useSelector((state) =>
    source === "abogado" ? state.abogado : state.cliente
  );

  console.log("Datos cliente:", datos);
  const cedula =
    source === "abogado" ? datos.cedulaAbogado : datos.cedulaCliente;
  const tarjetaProf = source === "abogado" ? datos.tarjetaProf : null;

  const [userDataDetail, setUserDataDetail] = useState({
    email: "",
    nombres: "",
    apellidos: "",
    tarjetaProf: "",
    cedula: "",
    celular: "",
    direccion: "",
    ciudad: "",
    departamento: "",
    // password: "",
    comentarios: "",
    cedula: cedula,
  });

  useEffect(() => {
    if (source === "abogado") {
      setUserDataDetail({
        ...userDataDetail,
        email: datos.email,
        celular: datos.celular,
        ciudad: datos.Ciudads[0].nombre_ciudad,
        departamento: datos.Ciudads[0].Departamentos[0].nombre_departamento,
        tarjetaProf: datos.tarjetaProf,
        nombres: datos.nombres,
        apellidos: datos.apellidos,
        direccion: datos.direccion,
        comentarios: "",
        cedula: cedula,
      });
    } else {
      setUserDataDetail({
        ...userDataDetail,
        email: datos.email,
        celular: datos.celular,
        ciudad: datos.Ciudads[0].nombre_ciudad,
        departamento: datos.Ciudads[0].Departamentos[0].nombre_departamento,
        nombres: datos.nombres,
        tarjetaProf: "",
        apellidos: datos.apellidos,
        direccion: datos.direccion,
        comentarios: datos.comentarios,
        cedula: cedula,
      });
    }
  }, [dispatch, source]);

  const handleDelete = () => {
    if (source === "abogado") {
      const isConfirmed = window.confirm(
        "¿Estás seguro de que deseas eliminar este registro?"
      );

      if (isConfirmed) {
        dispatch(deleteAbogado(cedula));
        console.log("cedula", cedula);
        navigate("/abogados");
      }
    } else {
      const isConfirmed = window.confirm(
        "¿Estás seguro de que deseas eliminar este registro?"
      );

      if (isConfirmed) {
        dispatch(deleteCliente(cedula));
        navigate("/clientes");
      }
    }
  };

  const handleUpdateDetail = (e) => {
    setUserDataDetail({
      ...userDataDetail,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const submitUpdateDetail = (e) => {
    e.preventDefault();
    registroCliente(userDataRegistro);
  };

  return (
    <div className="contenedordetail">
      <div className="detail" key={userDataDetail.cedula}>
        <div className="encabezado">
          <h5 className="titulo">Detalles</h5>
        </div>
        <div className="menu-detail">
          {/* <Link to={"/cotizacion"}> */}
          <Button className="botonesiniciosesion" onClick={submitUpdateDetail}>
            Actualizar
          </Button>
          {/* </Link> */}
          <Button onClick={handleDelete} className="botonesiniciosesion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
              ></path>
            </svg>
            Eliminar
          </Button>

          {datos?.tarjetaProf ? (
            <Link to="/abogados">
              <Button >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={50.5}
                    d="M244 400L100 256l144-144M120 256h292"
                  ></path>
                </svg>
                Volver
              </Button>
            </Link>
          ) : (
            <Link to="/clientes">
              <Button >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={50.5}
                    d="M244 400L100 256l144-144M120 256h292"
                  ></path>
                </svg>
                Volver
              </Button>
            </Link>
          )}
          {/* <Button className="botonesiniciosesion" onClick={generarContrato}>
            Generar Documentos
          </Button> */}
        </div>
        {/* <div className="generardocumento">
          <input type="file" id="doc" />
        </div> */}
        {datos.nombres && (
          <h4 className="nombredetail">
            {datos.nombres.toUpperCase()} {datos.apellidos.toUpperCase()}{" "}
          </h4>
        )}
        {/* </div> */}
        {/* <img className="photo" src={character.image} alt={character.name} /> */}
        <div className="info">
          <div className="personal">
            <div className="infodetail">
              <label htmlFor="numerocedula" className="labeldetail">
                Numero de cédula:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="cedulaAbogado"
                id="cedula"
                value={userDataDetail.cedula}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="numerocedula" className="labeldetail">
                Celular:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="cedulaAbogado"
                id="cedula"
                value={userDataDetail.celular}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="email" className="labeldetail">
                Correo:
              </label>
              <input
                type="email"
                className="cajadetail"
                name="email"
                id="email"
                value={userDataDetail.email}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="direccion" className="labeldetail">
                Dirección:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="direccion"
                id="direccion"
                value={userDataDetail.direccion.toUpperCase()}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="ciudad" className="labeldetail">
                Ciudad:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="ciudad"
                id="ciudad"
                value={userDataDetail.ciudad.toUpperCase()}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="ciudad" className="labeldetail">
                Departamento:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="departamento"
                id="departamento"
                value={userDataDetail.departamento.toUpperCase()}
                onChange={handleUpdateDetail}
              />
            </div>
            {datos?.comentarios && (
              <div className="infodetail">
                <label htmlFor="comentarios" className="labeldetail">
                  Comentarios:
                </label>
                <input
                  type="text"
                  className="cajadetail"
                  name="departamento"
                  id="departamento"
                  value={userDataDetail.comentarios}
                  onChange={handleUpdateDetail}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
