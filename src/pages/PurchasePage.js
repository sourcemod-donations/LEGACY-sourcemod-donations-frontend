import React, {Component} from 'react';
import {Classes, Spinner} from '@blueprintjs/core';
import ProductSingleViewContainer from "../components/products/ProductSingleViewContainer";
import PurchaseContainer from "../components/purchase/PurchaseContainer";

class PurchasePage extends Component {

  render() {
    return (
        <PurchaseContainer/>
    )
  }
}

export default PurchasePage