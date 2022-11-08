import { useState, useEffect } from "react";
import Header from "./componentes/Header";
import iconoNG from "./img/agregar2.png";
import TerceraPantalla from "./componentes/TerceraPantalla";
import { GastoId } from "./componentes/funciones";
import GastoLista from "./componentes/GastoLista";

function App() {
  const [gastos, setGastos] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);
  const [valido, setValido] = useState(false);
  const [terceraPantalla, setTerceraPantalla] = useState(false);
  const [cambioPantalla, setCambioPantalla] = useState(false);
  const [editando, setEditando]=useState({})


  useEffect(()=>{
    if(Object.keys(editando).length>0){//con Object.key te ayuda a validar si hay algo en los inputs
      setTerceraPantalla(true)

      setTimeout(() => {
        setCambioPantalla(true);
        }, 500);
    }
    }, [editando])//Al editar, usando useEffect se regresan los imputs a llenos cuando se clickea editar


  const nuevoGastoTP = () => {
    setTerceraPantalla(true); //se inicia en false para que cuando se clickee cambie a true y aparezca la tercera pantalla
    setEditando({})
    setTimeout(() => {
    setCambioPantalla(true);
    }, 500);
  };

  const guardandoGastos = (gasto) => {
    gasto.id = GastoId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]); //se crea una copia del arreglo que viene desde la tercera pantalla [nombreGastos, categoria, cantidad]

    setCambioPantalla(false);
    setTimeout(() => {
      setTerceraPantalla(false);
    }, 500);
  };

  return (
    <div>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        valido={valido}
        setValido={setValido}
      />

      {valido ? (
        <>
          <div>
            <GastoLista gastos={gastos}
            setEditando={setEditando} />
          </div>
          <div className="nuevo-gasto">
            <h3>Agregar Gasto</h3>
            <img
              src={iconoNG}
              alt="icono de nuevo gasto"
              onClick={nuevoGastoTP}
            />
          </div>
        </>
      ) : null}

      {terceraPantalla && (
        <TerceraPantalla
          setTerceraPantalla={setTerceraPantalla}
          cambioPantalla={cambioPantalla}
          setCambioPantalla={setCambioPantalla}
          guardandoGastos={guardandoGastos}
          editando={editando}
        />
      )}
    </div>
  );
}

export default App;
