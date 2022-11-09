import React from "react";
import swal from "sweetalert";

const Presupuesto = ({ presupuesto, setPresupuesto, setValido }) => {
  
  const validar = (e) => {//se valida si hay presupuesto y manda una alerta si no es un numero y si es valido te manda a la segundaPantalla.jsx
    e.preventDefault();
    if (
      !Number(presupuesto) ||
      Number(presupuesto <= 0) ||
      presupuesto === ""
    ) {
      ("Error", "Esto no es un numero!", "error");
    } else {
      swal(
        "Bienvenid@ (ᵔᴥᵔ)",
        "Da click en el boton para continuar!",
        "success"
      );
      setValido(true);
    }
  };
  return (
    <div className="contenedor-presupuesto contenedor ">
      <form className="formulario" onSubmit={validar}>

        <div className="campo">
          <label>Definir Presupuesto</label>

          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu presupuesto"
            onChange={(e) => {
              setPresupuesto(e.target.value);
            }}
          />
        </div>

        <input type="submit" value="AGREGAR" />
      </form>
    </div>
  );
};

export default Presupuesto;
