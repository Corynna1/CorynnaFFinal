import { useState, useEffect } from "react";
import Header from "./componentes/Header";
import iconoNG from "./img/agregar2.png";
import TerceraPantalla from "./componentes/TerceraPantalla";
import { GastoId } from "./componentes/funciones";
import GastoLista from "./componentes/GastoLista";
import FiltroGastos from "./componentes/FiltroGastos";

function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos')? JSON.parse(localStorage.getItem('gastos')):[]
  );
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto'))??0);
  const [valido, setValido] = useState(false);
  const [terceraPantalla, setTerceraPantalla] = useState(false);
  const [cambioPantalla, setCambioPantalla] = useState(false);
  const [editando, setEditando]=useState({})
  const [filtroGasto, setFiltroGasto]=useState('')
  const [resultadoFiltrado, setResultadoFiltrado]=useState([])
  


  useEffect(()=>{
    if(Object.keys(editando).length>0){//con Object.key te ayuda a validar si hay algo en los inputs, si es corecto te envia a la terceraPantalla.jsx con los datos a editar //Al editar, usando useEffect se regresan los imputs a llenos cuando se clickea editar
      setTerceraPantalla(true)

      setTimeout(() => {
        setCambioPantalla(true);
        }, 500);
    }
    }, [editando])

    useEffect(()=>{//aqui se asigna al localStorage lo que se ingresa a presupuesto y se pregunta si esta en 0 se queda igual
      localStorage.setItem('presupuesto', presupuesto ?? 0)
    }, [presupuesto])

    useEffect(()=>{//aqui se asigna en localStorage si hay gastos si no hay se queda con arreglo vacio[]
      localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
    }, [gastos])

    useEffect(()=>{//se guarda en local storage el presupuesto, y se guarda con Number para que no afecte en las operaciones que se utilice presupuesto
      const presupuestoLS = Number (localStorage.getItem('presupuesto'))?? 0;

      if(presupuestoLS>0){
        setValido(true)
      }
    },[])

    useEffect(()=>{//aqui se filtran los gastos cada que se seleccionan en el select y aparecen en la segunda pantalla
      if(filtroGasto){
        const filtrandoGastos= gastos.filter(gasto=>gasto.categoria===filtroGasto)
        setResultadoFiltrado(filtrandoGastos)
      }
      
    },[filtroGasto])

   

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
      setEditando({})// hace que al terminar de editar, al cerrar se limpien los datos del componente 
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
//funcion de eliminacion de gasto por medio de filter y id de gasto, tambien al eliminar gasto, la lista se actualice
  const deleteGasto=(id)=>{
   const actualizacionDeGastosEliminados= gastos.filter(gasto=>gasto.id!==id)
  setGastos(actualizacionDeGastosEliminados)
  }

  return (
    <div>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        valido={valido}
        setValido={setValido}
        setGastos={setGastos}
      />

      {valido ? (
        <>

        <FiltroGastos
        filtroGasto={filtroGasto}
        setFiltroGasto={setFiltroGasto}
        >
        </FiltroGastos>
          <div>
            <GastoLista gastos={gastos}
            setEditando={setEditando}
            deleteGasto={deleteGasto}
            filtroGasto={filtroGasto} 
            resultadoFiltrado={resultadoFiltrado}/>
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
          setEditando={setEditando}
        />
      )}
    </div>
  );
}

export default App;
