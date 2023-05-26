import React, { useEffect, useState, useRef } from "react";
import cytoscape from "cytoscape";
import {
  drawNode,
  hasChildren,
  casePicker,
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
import {
  BinarySearchTree,
  BinarySearchTreeNode,
  AvlTree,
  AvlTreeNode
} from '@datastructures-js/binary-search-tree';


export const TreeWindow = ({ add, build, setBuild,setAdd,del }) => {
  console.log("---------  Modulo TreeWindow ---------");
  const [cy, setCy] = useState(null);
  const cyContainerRef = useRef(null);
  const [numbers, setNumbers] = useState([]);

  const updateNumbers = (newNumber) => {
    setNumbers([...numbers, newNumber]);
  };

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
      casePicker(cy, buildTree(numbers).root(),numbers.length);
      cy.layout(Options).run();
      setBuild(false);
    }
    if(del != 0){
      cy.remove(`#${del}`);
      cy.remove('edge');
      let treeDel = buildTree(numbers);
      treeDel.remove(del)
      casePicker(cy, treeDel.root(),numbers.length-1);
      cy.layout(Options).run();
    }
  }, [build,del,del]);

  console.log("add desde app -->" + add);
  console.log("--------- FIN Modulo Tree Window ---------");

  return (
    <div className="main__tree">
      <div id="cy" ref={cyContainerRef}></div>
    </div>
  );
};

export default TreeWindow;
