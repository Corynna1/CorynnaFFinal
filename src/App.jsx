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

    if(gasto.id){//Aqui se presgunta si hay gasto o no, para que al momento de editar no se cree un nuevo registro y se quede con el id anterior
      const actualizacionDeGastos=gastos.map(gastoState=> gastoState.id===gasto.id?gasto: gastoState)//se itera sobre el state, si el gastoStateid es igual al gastoid que se esta editando en el  parametro,retorname en el gasto que se esta editando y en caso contrario retorname lo que esta en el state, para que los demas campos sigan con la misma informacion si estas no se editan//esta funcion es para buscar con el id el que se esta modificando y los demas se siguen retornando igual porque no queremos que se pierda la informacion
      setGastos(actualizacionDeGastos);
    } else{//nuevo gasto
      gasto.id = GastoId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]); //se crea una copia del arreglo que viene desde la tercera pantalla [nombreGastos, categoria, cantidad]
    }


    

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
