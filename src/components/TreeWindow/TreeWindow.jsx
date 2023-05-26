import React, { useEffect, useState, useRef } from "react";
import cytoscape from "cytoscape";
import {
  drawNode,
  hasChildren,
  casePicker,
  changePos,
} from "../../utils/treeContext.js";
import {
  addNode,
  findValue,
  leftChild,
  rightChild,
  parent,
  buildTree,
} from "./../../utils/binariContext.js";
import { Options } from "./../../utils/layaout.js";

export const TreeWindow = ({ add, build, setBuild, err,setErr }) => {
  console.log("---------  Modulo TreeWindow ---------");
  const [cy, setCy] = useState(null);
  const cyContainerRef = useRef(null);
  const [numbers, setNumbers] = useState([]);

  const updateNumbers = (newNumber) => {
    setNumbers([...numbers, newNumber]);
  };

  useEffect(() => {
    if(err != false){
      cy.nodes().remove(); // Eliminar todos los nodos
      cy.edges().remove(); // Eliminar todas las aristas
      setErr(!err);
    }
  }, [err]);

  useEffect(() => {
    if (add !== 0) {
      console.log("Numbers: +");
      updateNumbers(add);
      console.log(numbers);
    }
  }, [add]);

  console.log("--------- FIN Modulo Tree Window ---------");

  useEffect(() => {
    if (!cy) {
      const newCy = cytoscape({
        container: cyContainerRef.current,
        style: [
          {
            selector: "node",
            style: {
              shape: "circle",
              "background-color": "#e6e6e6",
              label: "data(id)",
            },
          },
        ],
        //Viewport opt Scale
        zoom: 1,
        pan: { x: 0, y: 0 },
      });
      setCy(newCy);
    }
  }, []);

  useEffect(() => {
    if (cy && add != 0) {
      drawNode(cy, add);
    }
  }, [add, cy]);

  useEffect(() => {
    /* Acá pintamos el arbol - Cuando espicho Generar Arbol */
    if (build != false) {
      let tree = buildTree(numbers);
      casePicker(cy, tree.root());
      /*changePos(cy, tree.root().getValue(), 300, 400);*/
      cy.layout(Options).run();
      setBuild(false);
    }
  }, [build]);

  console.log("add desde app -->" + add);
  console.log("--------- FIN Modulo Tree Window ---------");

  return (
    <div className="main__tree">
      <div id="cy" ref={cyContainerRef}></div>
    </div>
  );
};

export default TreeWindow;
