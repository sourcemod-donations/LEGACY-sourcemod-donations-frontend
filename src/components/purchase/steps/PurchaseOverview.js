import React from "react";

const PurchaseOverview = ({product}) => {

  return (
      <div className="row justify-content-center">
        <table className="col-md-8 pt-html-table width-100">
          <thead>
          <tr>
            <th>Product</th>
            <th>Cost</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{product.name}</td>
            <td>${product.price}</td>
          </tr>
          </tbody>
        </table>
      </div>
  );
};

export default PurchaseOverview;