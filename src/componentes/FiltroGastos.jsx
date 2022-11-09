import {useState, useEffect} from 'react'

const FiltroGastos = ({filtroGasto, setFiltroGasto}) => {
  return (
    <div className='filtros sombras contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar Gastos</label>
                <select
                value={filtroGasto}
                onChange={e=>setFiltroGasto(e.target.value)}>
                
                    <option value="">--Categorias--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="otro">Otro</option>
                </select>

            </div>
        </form>
        </div>
  )
}

export default FiltroGastos