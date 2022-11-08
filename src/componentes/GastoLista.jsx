import React from 'react'
import Gastado from './Gastado'

const GastoLista= ({gastos, setEditando, deleteGasto}) =>{
  return (
    <div className='listado-gastos contenedor'>
        
        <h2>{gastos.length?'GASTOS': 'NO HAY GASTOS'}</h2>

        {gastos.map(gasto=> (
            <Gastado
            key={gasto.id}
            gasto={gasto} 
            setEditando={setEditando} 
            deleteGasto={deleteGasto}        
        />
        ))}

    </div>
  )
}

export default GastoLista