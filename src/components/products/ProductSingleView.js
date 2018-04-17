import React, {Component} from 'react';
import {Callout, Classes, Spinner, Button} from '@blueprintjs/core';

class ProductSingleView extends Component {

  render() {
    const {product, isLoading, error} = this.props;

    if (error)
      return this.renderError(error);

    return (
        <div className="row">
          <div className="col">
            {isLoading ?
                <Spinner className={Classes.LARGE}/>
                :
                <div>
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <Button text="Purchase" icon="shopping-cart" />
                </div>
            }
          </div>
        </div>
    )
  }

  renderError(error) {
    return (
        <Callout title="An error has occured" intent="danger">
          {error}
        </Callout>
    )
  }
}

export default ProductSingleView