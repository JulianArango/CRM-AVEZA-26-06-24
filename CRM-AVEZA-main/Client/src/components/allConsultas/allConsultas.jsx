import "./allConsultas.css";

import { getConsultas, getConsultasTodos } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loading from "../../assets/loading.gif";
import { Button2, Button3 } from "../Mystyles";

function AllConsultas() {
  const dispatch = useDispatch();
  const consultas = useSelector((state) => state.consultas);
  const pages = useSelector((state) => state.pages);
  const [loadingState, setLoadingState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getConsultas());
  }, [dispatch]);

  const totalPages = Math.ceil(consultas?.length / 6);
  console.log('Total paginas:',totalPages);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingState(true);
      await dispatch(getConsultasTodos(currentPage));
      setLoadingState(false);
    };
    fetchData();
  }, [dispatch, currentPage]);

  console.log("consultas", consultas);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="contenedorconsultas">
      <div className="infoconsultas">
        <div className="encabezadoconsultas">
          <h1 className="titulo">Consultas</h1>
        </div>
        <div className="paginationconsultas">
          {currentPage > 1 && (
            <Button2 onClick={() => handlePageChange(currentPage - 1)}>
              &lt;&lt;
            </Button2>
          )}
          <Button3>Página {currentPage}</Button3>
          {currentPage < totalPages && (
            <Button2 onClick={() => handlePageChange(currentPage + 1)}>
              &gt;&gt;
            </Button2>
          )}
        </div>
        {loadingState ? (
          <div className="loading-container">
            <img className="loading-image" src={loading} alt="loading" />
          </div>
        ) : consultas && consultas.length > 0 ? (
          <div className="divconsultas">
            {pages.map((consulta) => (
              <div key={consulta.id} className="cardconsulta">
                <h3>Consulta N° {consulta.id}</h3>
                <div className="infoconsultatarjeta">
                  <span className="labelconsulta">Remitente: </span>
                  <span className="nombreconsulta">
                    {consulta.nombre} {consulta.apellido}
                  </span>
                </div>
                <div className="infoconsultatarjeta">
                  <span className="labelconsulta">Fecha: </span>
                  <span className="nombreconsulta">
                    {consulta.createdAt.split("T")[0]}
                  </span>
                </div>
                <div className="infoconsultatarjeta">
                  <span className="labelconsulta">Correo electrónico: </span>
                  <span className="nombreconsulta">{consulta.correo}</span>
                </div>
                <div className="infoconsultatarjeta">
                  <span className="labelconsulta">Celular: </span>
                  <span className="nombreconsulta">{consulta.telefono}</span>
                </div>
                <div className="infoconsultatarjeta">
                  <span className="labelconsulta">Consulta: </span>
                  <span className="nombreconsulta">{consulta.consulta}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay consultas disponibles</p>
        )}
      </div>
    </div>
  );
}

export default AllConsultas;
