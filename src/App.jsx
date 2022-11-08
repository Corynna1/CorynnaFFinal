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

  const nuevoGastoTP = () => {
    setTerceraPantalla(true); //se inicia en false para que cuando se clickee cambie a true y aparezca la tercera pantalla
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
            <GastoLista gastos={gastos} />
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
        />
      )}
    </div>
  );
}

export default App;
