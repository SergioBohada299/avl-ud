import {
    BinarySearchTree,
    BinarySearchTreeNode,
    AvlTree,
    AvlTreeNode
  } from '@datastructures-js/binary-search-tree';

  const numsTree = new AvlTree();

  export const addNode = (value) => {
    numsTree.insert(value)
    console.log("Nuevo nodo agregado: "+value);
    return console.log(numsTree.find(value));
  };

  export const findValue = (value) => {
    console.log("Nodo buscado: "+numsTree.find(value));
    return numsTree.find(value);
  } 

  export const leftChild = (value) => {
    console.log("Hijo izqu"+numsTree.find(value)._left);
    return numsTree.find(value)._left;
  };

  export const rightChild = (value) => {
    console.log("Hijo derecho"+numsTree.find(value)._right);
    return numsTree.find(value)._right;
  };

  export const parent = (value) => {
    console.log("Nodo padre:");
    console.log(numsTree.find(value)._parent);
    return numsTree.find(value)._parent;
  };

  export const buildTree = (value) => {

    console.log("---- Func Build Tree ----");
    value.forEach((element) => {
      console.log(element)
      numsTree.insert(element);
    });
    console.log("ARBOL AVL CREADO - Fun Build Tree - Root: ")
    console.log(numsTree.root().getValue());
    let root = numsTree.root();
    console.log(root.getLeft());
    numsTree.traverseInOrder((node) => console.log(node.getValue()));
    console.log(numsTree);
    console.log("---- Fin Func Build Tree ----"); 
    return numsTree;
  }
 
