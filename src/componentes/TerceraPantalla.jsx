import React from 'react'
import cerrar from '../img/tacha.png'
import { useState, useEffect } from 'react'
import {Error} from './funciones'

const TerceraPantalla = ({setTerceraPantalla, cambioPantalla, setCambioPantalla, guardandoGastos, editando}) => {

    //en los use state se guarda el valor de los inputs y su valor de inicio es vacio 
    const [error, setError] = useState('')
    const [nombre, setNombre]= useState('')
    const [cantidad, setCantidad]= useState('')
    const [categoria, setCategoria]= useState('')

    useEffect(()=>{//si const editando viene vacio es un registro nuevo, aqui no es necesario hacer forEach ya que con state se puede hacer 
        if(Object.keys(editando).length>0){
          setNombre(editando.nombre)
          setCantidad(editando.cantidad)
          setCategoria(editando.categoria)
        }
    },[])

   
    const cerrarPantalla=()=>{// al realizar click se regresara en .5s la animacion 
        setCambioPantalla(false)

        setTimeout(()=>{
            setTerceraPantalla(false)
        },500)
    }

    const validacionFormulario = (e)=>{// validacion de formulario por evento preventDefault, para prevenir la accion de enviar formulario
        e.preventDefault()
        if([nombre, cantidad, categoria].includes('')){// aqui se valida si no hay nada con el includes/ es similar ha realizar la accion de nombreGasto===''|| y se comparan a vacio
            setError('Todos los campos son obligatorios')

            setTimeout(()=>{
                setError('');
            }, 3000)

            return
        } 

        guardandoGastos({nombre, cantidad, categoria})//se crea un objeto// hay que tratar que ese guardado sea json
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
                value={nombre}
                onChange={e=> setNombre(e.target.value)}/>

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
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            <input type="submit" value='Agregar'/>

        </form>

    </div>
  )
}

export default TerceraPantalla;
