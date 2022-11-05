import React from 'react'
import { formatoFecha } from './funciones'
import ahorro from '../img/ahorro2.png'
import comida from '../img/comida.png'
import salud from '../img/salud.png'
import suscripciones from '../img/suscribir.png'
import casa from '../img/casa.png'
import ocio from '../img/ocio.png'
import otro from '../img/compras.png'
import{LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
const icono ={// se crea un objeto con las imagenes para irla llamando cada que se seleccione esa categoria con icono[gasto.categoria], esa proviene de guardando gastos donde se encuentra la informacion App,jsx y TerceraPantalla.jsx donde se creo la variable categoria con state[]
ahorro: ahorro,
comida: comida,
Salud: salud,
Suscripciones: suscripciones,
casa: casa,
ocio: ocio,
otro:otro
}

const Gastado = ({gasto, eliminarGasto, setGastoEditar}) => {

  const {categoria, nombreGasto, fecha, id, cantidad} = gasto;

  const deleteGasto=()=>{
    const respuesta=confirm ('Seguro de eliminar al gasto?')
if(respuesta){
    eliminarGasto(id)
}
}




  return (
    <SwipeableList>
      <SwipeableListItem>

    <div className='gasto'>
        <div className='contenido-gasto'>
        <img src={icono[categoria]} alt="" />

            <div className='descripcion-gasto'>
                <p className='categoria'>{categoria}</p>
                <p className='nombre-gasto'>{nombreGasto}</p>
                <p className='fecha-gasto'>Agregando el: {formatoFecha(fecha)}</p>
            </div>
        <p className='cantidad'>${cantidad}</p>
        
        <div className='botones'>
          <button className='eliminar' onClick={deleteGasto}>Eliminar</button>
          <button className='editar'onClick={setGastoEditar(gasto)}>Editar</button>
        </div>

      
        </div> 
    </div>
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gastado