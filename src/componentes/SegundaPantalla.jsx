import {useEffect, useState} from "react";

const SegundaPantalla=({presupuesto, gastos})=>{//esta variables se traen de APP.jsx donde se crean las variables (presupuesto inicia en 0  y gastos en arreglo vacio[] )

  const [disponible, setDisponible]=useState(0);
  const [gastado, setGastado]=useState(0);//gastado inicia en 0 ya que al generarse un gasto se va a la variable gastado y se acumula en setGastado, que se muestra en setGastado(totalGastado, donde se crea reduce que recorre cada gasto que se realiza y estos los va acumulando)


useEffect(()=>{
const gastoTotal=gastos.reduce((acc, gasto)=> gasto.cantidad + acc, 0);
const disponibleTotal= presupuesto- gastoTotal;
setDisponible(disponibleTotal);//se setean ya que es un valor cambiante y se guarda en setDisponible 
setGastado(gastoTotal);

}, [gastos])//dependencia gastos


    function formatNumber(number){// es la funcion para dar formato a la numeracion y que aparezca $0.000
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
          {formatNumber(disponible)}
        </p>

        <p>
          <span>Gastado: </span>
          {formatNumber(gastado)}
        </p>
      </div>
    </div>
  );
};

export default SegundaPantalla;
