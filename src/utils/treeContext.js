import cytoscape from "cytoscape";
import {
  BinarySearchTree,
  BinarySearchTreeNode,
  AvlTree,
  AvlTreeNode,
} from "@datastructures-js/binary-search-tree";

/* Nodos pos init */
var nodeX = 0;
var nodeY = 0;

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

const isRightLeaf = (node) => {
  if (node.getParent().getLeft() == null) {
    return true;
  }else if(node.getParent().getLeft().getValue() < node.getValue()){
    return true;
  }
};

export const casePicker = (cont, node, treeLenght) => {
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
    if(treeLenght >= 7){
      console.log("Lenght:"+treeLenght);
      nodeX += 200;
      nodeY += 200;
    }else{
      nodeX += 100;
      nodeY += 100;
    }

    console.log(node.hasLeft());
    console.log(node.hasRight());
    addLink(cont, nodeRight);
    addLink(cont, nodeLeft);
    if (node.hasParent()) {
      addLink(cont, node);
    }
    if(node.isRoot()){
      changePosR(cont, nodeRight.getValue(), nodeX, nodeY);
      changePosL(cont, nodeLeft.getValue(), nodeX, nodeY);
    }else{
      if (isRightLeaf(node)) {
        changePosRNull(cont, node.getValue(),node.getParent().getValue(),treeLenght);
      }else{
        changePosLNull(cont, node.getValue(),node.getParent().getValue(),treeLenght);
      }
      changePosRNull(cont, nodeRight.getValue(),node.getValue(),treeLenght);
      changePosLNull(cont, nodeLeft.getValue(),node.getValue(),treeLenght);
    }

    caseBoth(cont, nodeLeft,treeLenght);
    caseBoth(cont, nodeRight,treeLenght);
    console.log("-----------------");
  } else if (nodeRight !== null) {
    console.log("Caso true - false");
    if(node.isRoot()){
      console.log("ups jeje");
    }else if(isRightLeaf(node)) {
      changePosRNull(cont, node.getValue(),node.getParent().getValue());
    }else{
      changePosLNull(cont, node.getValue(),node.getParent().getValue());
    }
    changePosRNull(cont, nodeRight.getValue(),node.getValue());
    console.log(node.hasRight());
    console.log(node.hasLeft());
    addLink(cont, nodeRight);
    if(!node.isRoot()){
      addLink(cont, node);
    }
    caseRight(cont, nodeRight);
    console.log("-----------------");
  } else if (nodeLeft !== null) {
    console.log("Caso false - true");
    if(node.isRoot()){
      console.log("ups jeje");
    }else if (isRightLeaf(node)) {
      changePosRNull(cont, node.getValue(),node.getParent().getValue());
    }else{
      changePosLNull(cont, node.getValue(),node.getParent().getValue());
    }
    changePosLNull(cont, nodeLeft.getValue(),node.getValue());
    console.log(node.hasLeft());
    console.log(node.hasRight());
    addLink(cont, nodeLeft);
    if(!node.isRoot()){
      addLink(cont, node);
    }
    caseLeft(cont, nodeLeft);
    console.log("-----------------");
  } else {
    console.log("Caso false - false");
    console.log(node.hasLeft());
    console.log(node.hasRight());
    if(!node.isRoot()){
      console.log("Caso root - false - false")
    }
    if (isRightLeaf(node)) {
      changePosRNull(cont, node.getValue(),node.getParent().getValue(),0);
      addLink(cont, node);
    } else {
      changePosLNull(cont, node.getValue(),node.getParent().getValue(),0);
      addLink(cont, node);
    }
    caseNull();
    console.log("-----------------");
  }

  console.log("------- FIN Case Picker -------");
};

const caseBoth = (cont, node,treeLenght) => {
  console.log("CaseBoth");
  casePicker(cont, node.getRight(),treeLenght);
  casePicker(cont, node.getLeft(),treeLenght);
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

const changePosR = (cont, node_id, x, y) => {
  console.log("-------- Func changePosR ---------");
  console.log("node ID:" + node_id);
  console.log("node x:" + x);
  console.log("node x:" + y);
  let nodeID = node_id;
  cont.$(`#${nodeID}`).position({
    x: x,
    y: y,
  });
  console.log("-------- FIN Func changePos ---------");
};

const changePosRNull = (cont, node_id, parent_id,treeLenght) => {
  console.log("-------- Func changePosRNull ---------");
  console.log("node ID:" + node_id);
  console.log("parent ID:" + parent_id);
  console.log("treeLenght: "+treeLenght);
  let x,y;
  let parentPos = cont.$(`#${parent_id}`).position();
  if(treeLenght>=7){
    x = (parentPos.x)+200;
    y = (parentPos.y)+200;
  }else{
    x = (parentPos.x)+100;
    y = (parentPos.y)+100;
  }

  let nodeID = node_id;
  console.log("node x:" + x);
  console.log("node y:" + y);
  console.log("parent pos:")
  console.log(parentPos);
  cont.$(`#${nodeID}`).position({
    x: x,
    y: y,
  });
  console.log("-------- FIN Func changePos ---------");
};

const changePosL = (cont, node_id, x, y) => {
  console.log("-------- Func changePosL ---------");
  console.log("node ID:" + node_id);
  console.log("node x:" + x);
  console.log("node x:" + y);
  x *= -1;
  let nodeID = node_id;
  cont.$(`#${nodeID}`).position({
    x: x,
    y: y,
  });
  console.log("-------- FIN Func changePos ---------");
};

const changePosLNull = (cont, node_id, parent_id,treeLenght) => {
  console.log("-------- Func changePosLNull ---------");
  console.log("node ID:" + node_id);
  console.log("parent ID:" + parent_id);
  let x,y;
  let parentPos = cont.$(`#${parent_id}`).position();
  if(treeLenght>=7){
    x = ((parentPos.x)-200);
    y = (parentPos.y)+200;
  }else{
    x = ((parentPos.x)-100);
    y = (parentPos.y)+100;
  }
  let nodeID = node_id;
  console.log("node x:" + x);
  console.log("node y:" + y);
  console.log("parent pos:")
  console.log(parentPos);
  console.log("treeLenght: "+treeLenght);
  cont.$(`#${nodeID}`).position({
    x: x,
    y: y,
  });
  console.log("-------- FIN Func changePos ---------");
};

