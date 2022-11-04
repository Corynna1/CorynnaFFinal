import React from "react"

export function Error({ children }) {

    return (
        <div className="error">
            {children}
        </div>
    )
}


export const GastoId =()=>{
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)
    return random + fecha
}

export const formatoFecha =fecha=>{
    const nuevoFormatoFecha=new Date(fecha);
    return nuevoFormatoFecha.toLocaleDateString('es-ES')
}




