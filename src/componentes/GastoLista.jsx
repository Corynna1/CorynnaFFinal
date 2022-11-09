import React from 'react'
import Gastado from './Gastado'

const GastoLista= ({gastos, setEditando, deleteGasto, resultadoFiltrado, filtroGasto}) =>{

  //en el h2 se pregunta si hay gastos y no y por medio de filtrogasto se visualiza con un filtro los gastos que se estan realizando,
  //ahi se revisa a componente Gastado.jsx  donde se integra el div que se visualiza los gastos, ahi tambien se asigna una llave para tenerlos con id los gastos y poder vizualizarlas de manera unitaria con un id
  
  return (
    <div className='listado-gastos'>
        
        <h2>{gastos.length?'GASTOS': 'NO HAY GASTOS'}</h2>

        {
        filtroGasto ? (
          
          resultadoFiltrado.map( gasto=> (
            <Gastado
            key={gasto.id}
            gasto={gasto} 
            setEditando={setEditando} 
            deleteGasto={deleteGasto}        
            />
        ))
      )  :  (
          
        gastos.map(gasto=> (
            <Gastado
            key={gasto.id}
            gasto={gasto} 
            setEditando={setEditando} 
            deleteGasto={deleteGasto}        
             />
        ))
            )
      }

      

    </div>
  )
}

export default GastoLista