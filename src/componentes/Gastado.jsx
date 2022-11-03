import React from 'react'


const Gastado = ({gasto}) => {
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <div className='descripcion-gasto'>
                <p className='categoria'>{gasto.categoria}</p>
                <p className='nombre-gasto'>{gasto.nombreGasto}</p>
                <p className='cantidad'>{gasto.cantidad}</p>
                <p className='cantidad'>{gasto.id}</p>
            </div>

        </div>

    </div>
  )
}

export default Gastado