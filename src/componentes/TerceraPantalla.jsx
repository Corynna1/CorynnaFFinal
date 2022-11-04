import React from 'react'
import cerrar from '../img/tacha.png'
import { useState } from 'react'
import {Error} from './funciones'

const TerceraPantalla = ({setTerceraPantalla, cambioPantalla, setCambioPantalla, guardandoGastos}) => {

    //en los use state se guarda el valor de los inputs y su valor de inicio es vacio 
    const [error, setError] = useState('')
    const [nombreGasto, setNombreGasto]= useState('')
    const [cantidad, setCantidad]= useState('')
    const [categoria, setCategoria]= useState('')


    const cerrarPantalla=()=>{// al realizar click se regresara en .5s la animacion 
        setCambioPantalla(false)
        setTimeout(()=>{
            setTerceraPantalla(false)
        },500)
    }

    const validacionFormulario = (e)=>{// validacion de formulario por evento preventDefault, para prevenir la accion de enviar formulario
        e.preventDefault()
        if([nombreGasto, cantidad, categoria].includes('')){// aqui se valida si no hay nada con el includes/ es similar ha realizar la accion de nombreGasto===''|| y se comparan a vacio
            setError('Todos los campos son obligatorios')

            setTimeout(()=>{
                setError('');
            }, 3000)

            return
        } 

        guardandoGastos({nombreGasto, cantidad, categoria})//se crea un objeto// hay que tratar que ese guardado sea json
    }


    
    
  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img
            src={cerrar}
            alt='boton de cerrar'
            onClick={cerrarPantalla}
             />
        </div>

        <form 
        onSubmit={validacionFormulario}
        className={`formulario ${cambioPantalla ? "animar" : ""}`}>


            <legend>
                <span id='span1'></span>
                <span id='span2'></span>
             Nuevo Gasto</legend>

             {error && <Error>{error}</Error>}
            

            

            <div className='campo'>
                <label htmlFor="nombre">Nombre Del Gasto</label>
                <input type="text" 
                placeholder='Añade El Nombre Del Gasto' 
                id='nombre'
                value={nombreGasto}
                onChange={e=> setNombreGasto(e.target.value)}/>

            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Agrega La Cantidad</label>
                <input type="number" 
                placeholder='Añade La Cantidad' 
                id='cantidad'
                value={cantidad}
                onChange={e=> setCantidad(Number(e.target.value))}/>

            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>

                <select id="categoria"
                value={categoria}
                onChange={e=> setCategoria(e.target.value)}>
                
                    <option value="">--Seleccione--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="Salud">Salud</option>
                    <option value="Suscripciones">Suscripciones</option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            <input type="submit" value='Agrega Gasto'/>

        </form>

    </div>
  )
}

export default TerceraPantalla;
