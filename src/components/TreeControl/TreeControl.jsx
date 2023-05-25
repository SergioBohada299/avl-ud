import React, { useState } from "react";

export const TreeControl = ({del,add,setAdd,setDel,setErr,setBuild,build}) => {
  console.log("---------- Modulo TreeControl ----------");
  const handleSend = (e) => {
    e.preventDefault();
    let newAddNumber = document.getElementById('add').value;
    let newDelNumber = document.getElementById('delete').value;
    console.log("Modulo TREE CONTROL - newAddNumber"+newAddNumber);
    setAdd(parseInt(newAddNumber));
    setDel([...del,parseInt(newDelNumber)]);
  };

  const handleDeleteData = (e) => {
    e.preventDefault();
    setErr(true);

  };

  const buildTree = (e) => {
    e.preventDefault();
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
