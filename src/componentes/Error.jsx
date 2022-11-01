import React from "react"

function Error({ children }) {

    return (
        <div className="error">
            {children}
        </div>
    )
}

export default Error



///////// es para agregar campo de usuario nuevo y guardar la informacion del presupuesto///////
/* <div className="campo">
<label>Nombre de Usuario</label>
<input
className="nuevo-presupuesto"
type='text'
placeholder="Agrega nombre">
</input>
</div> */