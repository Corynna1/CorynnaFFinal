import {React} from 'react'

const FiltroGastos = ({filtroGasto, setFiltroGasto}) => {

    /*Funcion pata filtrar los gastos por medio de id. Los props se encuentras en App.jsx donde se inicia en state vacio(''), posteriormente se hace filter para asi buscarlos por medio de gasto.categoria */
  return (
    <div className='filtros contenedor'>
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