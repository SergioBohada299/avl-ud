import React, { useState } from "react";

export const TreeControl = ({del,add,setAdd,setDel,setBuild,build}) => {
  console.log("---------- Modulo TreeControl ----------");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const handleSend = (e) => {
    e.preventDefault();
    let newAddNumber = document.getElementById('add').value;
    console.log("Modulo TREE CONTROL - newAddNumber"+newAddNumber);
    setAdd(parseInt(newAddNumber));
  };

  const handleDeleteData = (e) => {
    e.preventDefault();
    let newDelNumber = document.getElementById('delete').value;
    setDel(parseInt(newDelNumber));
  };

  const buildTree = (e) => {
    e.preventDefault();
    setIsButtonEnabled(true);
    setBuild(!build);
  };

  console.log(del);
  console.log(add);

  console.log("---------- FIN Modulo TreeControl ----------");
  return (
    <div className="tree__control">
      <div classname="tree__control--container">
        <label className="col-form-label mt-4" htmlFor="inputDefault">
          Agregar nodo
        </label>
        <input
          type="number"
          className="form-control"
          placeholder="Numero entero.."
          id="add"
        />
      </div>
      <div classname="tree__control--container">
        <label className="col-form-label mt-4" htmlFor="inputDefault">
          Borrar nodo
        </label>
        <input
          type="number"
          className="form-control"
          placeholder="Numero entero.."
          id="delete"
        />
      </div>
      <div classname="tree__control--container">
        <button className="btn btn-light" onClick={handleSend}>
          Enviar
        </button>
        <button  className="btn btn-light " onClick={handleDeleteData}>
          Borrar datos
        </button>
        <button  className="btn btn-light " onClick={buildTree}>
          Generar arbol
        </button>
      </div>
    </div>
  );
};

export default TreeControl;
