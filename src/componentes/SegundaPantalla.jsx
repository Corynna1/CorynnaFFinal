import { useEffect, useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Swal from 'sweetalert2'

const SegundaPantalla = ({ presupuesto, gastos, setGastos, setPresupuesto, setValido }) => {
  //esta variables se traen de APP.jsx donde se crean las variables (presupuesto inicia en 0  y gastos en arreglo vacio[] )

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0); //gastado inicia en 0 ya que al generarse un gasto se va a la variable gastado y se acumula en setGastado, que se muestra en setGastado(totalGastado, donde se crea reduce que recorre cada gasto que se realiza y estos los va acumulando)
  const [porcentajeGrafica, setPorcentajeGrafica] = useState(0);

  useEffect(() => {
    const gastoTotal = gastos.reduce((acc, gasto) => gasto.cantidad + acc, 0);//se aplica un reduce para hacer el calculo de los gastos y en una sola linea
    const disponibleTotal = presupuesto - gastoTotal;
    //calcular porcentaje de la grafica

    const porcentajeInicio = (
      ((presupuesto - disponibleTotal) / presupuesto) *
      100
    ).toFixed(2); //se hace regla de 3 simple para sacar el porcentaje siento el presupuesto el 100%
    setPorcentajeGrafica(porcentajeInicio);

    setDisponible(disponibleTotal); //se setean ya que es un valor cambiante y se guarda en setDisponible
    setGastado(gastoTotal);
  }, [gastos]); //dependencia gastos

  function formatNumber(number) {
    // es la funcion para dar formato a la numeracion y que aparezca $0.000
    return new Intl.NumberFormat("ES-MX", {
      style: "currency",
      currency: "MXN",
    }).format(number);
  }

  const reiniciar=()=>{//funcion para aplicar el reseteo y que se elimine tambien de localStorage con [] y presupuesto en 0, se instala //npm install sweetalert2
    Swal.fire({
      title: '¿Estás segur@ que deseas resetear la App?',
      text: "Ya no podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Tu has eliminado todo exitosamente.',
          'success'
        )
        setGastos([]);//se reinicia en localStorage App.jsx
        setPresupuesto(0);//se reinicia presupuesto App.jsx
        setValido(false); //se pone en false para que al reiniciar la pagina se quede en la primera pagina 
        
      } else {console.log('no')}//buscar opcion para quitar, hay un error ya que se aplica el Swal 2 veces seguidas 
    })
  }

//Se aplicaron estilos a la grafica, esta se importo from react en la pagina npm
  return (
    <div className="contenedor-presupuesto contenedor  grafica-gastos">
      <div className="grafica">
        <CircularProgressbar
          value={porcentajeGrafica}
          styles={buildStyles({
            pathColor: "#9932CC",
            trailColor: "#D8BFD8",
            textColor: porcentajeGrafica>100? '#dc2626' : ''
          })}
          text={`${porcentajeGrafica} %Gastado`}
        ></CircularProgressbar>
      </div>

      <div className="contenido-presupuesto">

        <p>
          <span>Presupuesto: </span>
          {formatNumber(presupuesto)}
        </p>

        <p className={
          
          `${disponible < 0 ? Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Tu presupuesto se ha terminado',
            showConfirmButton: false,
            timer: 1500
          }): ''}`}>
          <span>Disponible: </span>
          {formatNumber(disponible)}
        </p>

        <p>
          <span>Gastado: </span>
          {formatNumber(gastado)}
        </p>

        <button className="reseteo"
        type="button"
        onClick={reiniciar}>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default SegundaPantalla;

