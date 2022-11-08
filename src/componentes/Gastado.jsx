import React from "react";
import { formatoFecha } from "./funciones";
import ahorroimg from "../img/ahorro2.png";
import comidaimg from "../img/comida.png";
import saludimg from "../img/salud.png";
import suscripcionesimg from "../img/suscribir.png";
import casaimg from "../img/casa.png";
import ocioimg from "../img/ocio.png";
import otroimg from "../img/compras.png";

const icono = {
  // se crea un objeto con las imagenes para irla llamando cada que se seleccione esa categoria con icono[gasto.categoria], esa proviene de guardando gastos donde se encuentra la informacion App,jsx y TerceraPantalla.jsx donde se creo la variable categoria con state[]
  ahorro: ahorroimg,
  comida: comidaimg,
  salud: saludimg,
  suscripciones: suscripcionesimg,
  casa: casaimg,
  ocio: ocioimg,
  otro: otroimg,
};

const Gastado = ({ gasto }) => {
  const { categoria, nombre, fecha, id, cantidad } = gasto;

  return (
  
        <div className="gasto">
          <div className="contenido-gasto">
            <img src={icono[categoria]} alt="" />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">Agregando el: {formatoFecha(fecha)}</p>
            </div>
            <p className="cantidad">${cantidad}</p>
          </div>
        </div>
  );
};

export default Gastado;
