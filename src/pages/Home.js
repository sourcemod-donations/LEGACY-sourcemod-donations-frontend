import React, {Component, Fragment} from 'react';
import {Button} from '@blueprintjs/core';
import apiFetch from "../apiFetch";
import ProductsContainer from "../components/products/ProductsContainer";

class Home extends Component {
  render() {
    return (
        <Fragment>
          <h1 style={{marginBottom: '30px'}}>Available products</h1>
          <ProductsContainer/>
        </Fragment>
    )
  }
}

export default Home