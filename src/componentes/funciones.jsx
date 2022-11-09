import React from "react"
//Se crea una funcion de error y se manda a llamar en las funciones de tercerPantalla.jsx al validar si los inputs estan llenos 
export function Error({ children }) {

    return (
        <div className="error">
            {children}
        </div>
    )
}

/*aqui se enlaza a App.jsx para guardar los gastos*/
export const GastoId =()=>{
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)
    return random + fecha
}

/*funcion para el formato de la fecha que este sea de manera 8/12/2022 y no se visualize como tipo linea o numeros al azar */
export const formatoFecha =fecha=>{
    const nuevoFormatoFecha=new Date(fecha);
    return nuevoFormatoFecha.toLocaleDateString('es-ES')
}



