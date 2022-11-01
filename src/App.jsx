import { useState } from "react";
import Header from "./componentes/Header";
import iconoNG from "./img/agregar2.png";
import TerceraPantalla from "./componentes/TerceraPantalla";
import GastoId from "./componentes/GastoId";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [valido, setValido] = useState(false);
  const [terceraPantalla, setTerceraPantalla] = useState(false);
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos]=useState([]);


  const nuevoGastoTP = () => {
    setTerceraPantalla(true);//se inicia en false para que cuando se clickee cambie a true y aparezca la tercera pantalla 

    setTimeout(()=>{
      setAnimarModal(true)
    }, 500)// al clickear la imagen de + se activa la tercera pantalla y su valor de inputs se inicia en .5s, con valor en ''

  }

  const guardandoGastos=(gasto)=>{
    gasto.id=GastoId();
    setGastos([...gastos, gasto])//se crea una copia del arreglo que viene desde la tercera pantalla [nombreGastos, categoria, cantidad]
  
    setAnimarModal(false)
    setTimeout(()=>{
        setTerceraPantalla(false)
    },500)
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        valido={valido}
        setValido={setValido}
      />

      {valido ? (
        <div className="nuevo-gasto">
          <img
            src={iconoNG}
            alt="icono de nuevo gasto"
            onClick={nuevoGastoTP}
          />
        </div>
      ) : null}

      {terceraPantalla && (
        <TerceraPantalla 
        setTerceraPantalla={setTerceraPantalla}
        animarModal= {animarModal} 
        setAnimarModal={setAnimarModal}
        guardandoGastos={guardandoGastos}
      />
      )}
    </div>
  );
}

export default App;
