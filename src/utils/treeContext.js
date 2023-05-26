import cytoscape from "cytoscape";
import {
  BinarySearchTree,
  BinarySearchTreeNode,
  AvlTree,
  AvlTreeNode,
} from "@datastructures-js/binary-search-tree";

export const drawNode = (cont, value) => {
  console.log("Funcion draw node value:" + value);
  console.log("Funcion draw node cont:" + cont);
  cont.add({ data: { id: value } });
};

/*
export const testLines = (cont) => {
  cont.add({
    data: {
      id: nodeVal + "|" + nodeRight,
      source: nodeVal,
      target: nodeRight,
    },
  });
};*/
const addLink = (cont, node) => {
  let parent = node.getParent().getValue();
  let nodeVal = node.getValue();
  cont.add({
    data: {
      id: parent + "|" + nodeVal,
      source: parent,
      target: nodeVal,
    },
  });
  console.log("Conexión hecha entre " + nodeVal + " y " + parent);
};

export const casePicker = (cont, node) => {
  console.log("------- Case Picker -------");
  console.log(node);
  if (node === null) {
    console.log("Caso null - Fin del árbol");
    console.log(node);
    console.log("-----------------");
    return;
  }

  let nodeRight = node.getRight();
  let nodeLeft = node.getLeft();

  if (nodeLeft !== null && nodeRight !== null) {
    console.log("Caso true - true");
    console.log(node.hasLeft());
    console.log(node.hasRight());
    addLink(cont, nodeRight);
    addLink(cont, nodeLeft);
    if(node.hasParent()){
      addLink(cont, node);
    }
    caseBoth(cont, nodeLeft);
    caseBoth(cont, nodeRight);
    console.log("-----------------");
  } else if (nodeRight !== null) {
    console.log("Caso true - false");
    console.log(node.hasRight());
    console.log(node.hasLeft());
    addLink(cont, nodeRight);
    addLink(cont, node);
    caseRight(cont, nodeRight);
    console.log("-----------------");
  } else if (nodeLeft !== null) {
    console.log("Caso false - true");
    console.log(node.hasLeft());
    console.log(node.hasRight());
    addLink(cont, nodeLeft);
    addLink(cont, node);
    caseLeft(cont, nodeLeft);
    console.log("-----------------");
  } else {
    console.log("Caso false - false");
    console.log(node.hasLeft());
    console.log(node.hasRight());
    addLink(cont, node);
    caseNull();
    console.log("-----------------");
  }

  console.log("------- FIN Case Picker -------");
};

const caseBoth = (cont, node) => {
  console.log("CaseBoth");
  casePicker(cont, node.getRight());
  casePicker(cont, node.getLeft());
};

const caseRight = (cont, node) => {
  console.log("CaseRight");
  casePicker(cont, node.getRight());
};

const caseLeft = (cont, node) => {
  console.log("CaseLeft");
  casePicker(cont, node.getLeft());
};

const caseNull = () => {
  console.log("caseNull - Fin del árbol");
};

export const changePos = (cont,node_id,x,y) => {
  let nodeID = node_id;
  cont.$(`#${nodeID}`).position({
    x: x,
    y: y
  });
}

