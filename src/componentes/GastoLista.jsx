import React from 'react'
import Gastado from './Gastado'

const GastoLista= ({gastos}) =>{
  return (
    <div className='listado-gastos contenedor'>
        
        <h2>{gastos.length?'gastos': 'no hay gastos'}</h2>

        {gastos.map(gasto=> (
            <Gastado
            key={gasto.id}
            gasto={gasto}/>
        ))}

    </div>
  )
}

export default GastoLista