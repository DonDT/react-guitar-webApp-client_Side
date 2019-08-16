import React from "react";
import MyButton from "../utils/button";
import { faTruck, faCheck, faTimes } from "react-icons/fa";

const ProdNfo = props => {
  const detail = props.detail;

  return (
    <div>
      <h1>{detail.brand.name} </h1>
      <p>{detail.description}</p>
    </div>
  );
};

export default ProdNfo;
