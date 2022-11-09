import React from "react";
import Presupuesto from "./Presupuesto";
import SegundaPantalla from "./SegundaPantalla";
import imgGastos from "../img/gastos2.png"
import imgGastos1 from "../img/gastos1.png"
import imgGastos2 from "../img/gastos5.png"

const Header = ({presupuesto, setPresupuesto, valido, setValido, gastos, setGastos}) => {
    
    return(
        <header>
            <h1>PLANIFICADOR DE GASTOS</h1>

            <div className="imgh">
            <img src={imgGastos}/>
            <img src={imgGastos2}/>
            <img src={imgGastos1}/>
            </div>
            
            {valido ? (
               <SegundaPantalla
               gastos={gastos}
               presupuesto={presupuesto}
               setGastos={setGastos}
               setPresupuesto={setPresupuesto}
               setValido={setValido}/>
            ):

            <div>
                <Presupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setValido={setValido}
                />
            </div>

            }
            
        </header>
    )
}

export default Header;