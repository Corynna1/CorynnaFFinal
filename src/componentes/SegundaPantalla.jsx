import React from "react";

const SegundaPantalla=({presupuesto})=>{

    function formatNumber(number){
        return new Intl.NumberFormat("ES-MX", {
            style: 'currency',
            currency:'MXN',
        }).format(number)
    }

  
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <h2>grafica</h2>
      </div>

      <div className="contenido-presupuesto">
       
        <p>
          <span>Presupuesto: </span>
          {formatNumber(presupuesto)}
        </p>

        <p>
          <span>Disponible: </span>
          {formatNumber(0)}
        </p>

        <p>
          <span>Gastado: </span>
          {formatNumber(0)}
        </p>
      </div>
    </div>
  );
};

export default SegundaPantalla;
