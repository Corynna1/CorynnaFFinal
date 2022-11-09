import React from 'react'
import Gastado from './Gastado'

const GastoLista= ({gastos, setEditando, deleteGasto, resultadoFiltrado, filtroGasto}) =>{
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