import React from 'react'
import Gastado from './Gastado'

const GastoLista= ({gastos, eliminarGasto, setGastoEditar}) =>{
  return (
    <div className='listado-gastos contenedor'>
        
        <h2>{gastos.length?'GASTOS': 'NO HAY GASTOS'}</h2>

        {gastos.map(gasto=> (
            <Gastado
            key={gasto.id}
            gasto={gasto}
            eliminarGasto={eliminarGasto}
            setGastoEditar={setGastoEditar}/>
        ))}

    </div>
  )
}

export default GastoLista