import React from "react";
import moment from "moment";

const UserHistoryBlock = ({ products }) => {
  const renderBlocks = () =>
    products
      ? products.map((product, i) => (
          <tr key={i}>
            <td>{moment(product.dateOfPurcahse).format("MM-DD-YYYY")}</td>
            <td>
              {product.brand} {product.name}
            </td>
            <td>€ {product.price}</td>
            <td>{product.quantity}</td>
          </tr>
        ))
      : null;

  return (
    <div className="history_blocks">
      <table>
        <thead>
          <tr>
            <td>Date of purChase</td>
            <td>Product </td>
            <td>Price paid</td>
            <td>Quantity</td>
          </tr>
        </thead>
        <tbody>{renderBlocks()}</tbody>
      </table>
    </div>
  );
};

export default UserHistoryBlock;
