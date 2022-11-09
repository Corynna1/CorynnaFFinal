import React from "react";
import{LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions }from 'react-swipeable-list' 
import "react-swipeable-list/dist/styles.css"//se instala primero npm i react-swipeable-list en la terminal pagina npm
import { formatoFecha } from "./funciones";
import ahorroimg from "../img/ahorro2.png";
import comidaimg from "../img/comida.png";
import saludimg from "../img/salud.png";
import suscripcionesimg from "../img/suscribir.png";
import casaimg from "../img/casa.png";
import ocioimg from "../img/ocio.png";
import otroimg from "../img/compras.png";


  // se crea un objeto con las imagenes para irla llamando cada que se seleccione esa categoria con icono[gasto.categoria], esa proviene de guardando gastos donde se encuentra la informacion App,jsx y TerceraPantalla.jsx donde se creo la variable categoria con state[]
const icono = {

  ahorro: ahorroimg,
  comida: comidaimg,
  salud: saludimg,
  suscripciones: suscripcionesimg,
  casa: casaimg,
  ocio: ocioimg,
  otro: otroimg,
};


const Gastado = ({ gasto, setEditando, deleteGasto }) => {
  
  //Se crea una constante con las caracteristicas que se pondran en el div que se visualizara en GastoLista.jsx y posteriormente en SegundaPantalla.jsx esta se iguala a gasto para posteriormente mandar a llamar todos los parametros

  const { categoria, nombre, fecha, id, cantidad } = gasto;

  //esta constante se utiliza para tener los estilos de SwipeAction que es de manera deslizable de izquierda a derecha, al deslizar a la derecha se hace el onCLick y se aplica el prop setEditando que se encuentra en App.jsx
  const leadingActions=()=>(
    <LeadingActions>
      <SwipeAction onClick={()=> setEditando(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )
 //esta constante se utiliza para tener los estilos de SwipeAction que es de manera deslizable de derecha  a izquierda, al deslizar a la izquierda se hace el onCLick y se aplica la funcion delete que se encuentra en App.jsx, donde se filtran los gastos por medio de filter y id
  const trailingActions=()=>(
    <TrailingActions>
    <SwipeAction onClick={()=> deleteGasto(id)}
    >
      Eliminar
    </SwipeAction>
  </TrailingActions>
  )

  return (
  
    <SwipeableList>
      <SwipeableListItem
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
      >
        
          <div className="contenido-gasto">
            <img src={icono[categoria]} alt="" />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">Agregando el: {formatoFecha(fecha)}</p>
            </div>
            <p className="cantidad">${cantidad}</p>
          </div>
        
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gastado;
