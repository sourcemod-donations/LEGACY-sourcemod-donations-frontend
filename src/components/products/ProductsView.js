import React, {Component, Fragment} from 'react';
import {Button, Card, Classes, Spinner} from '@blueprintjs/core';

class ProductsView extends Component {

  loadNextPage = () => {
    if (this.props.loadNextPage)
      this.props.loadNextPage();
  };

  render() {
    const {products, isLoading, hasNextPage} = this.props;

    return (
        <Fragment>
          <div className="row">
            {isLoading ?
                <Spinner className={Classes.LARGE}/>
                :
                products.map(this.renderProduct)
            }
          </div>

          <div className="align-right">
            {
              hasNextPage &&
              <Button text={`Next Page`} className={Classes.BUTTON} onClick={this.loadNextPage}/>
            }
          </div>
        </Fragment>
    )
  }

  renderProduct(product) {
    return (
        <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
          <Card className="Product-card">
            <h5>
              <a href="#">{product.name}</a>
            </h5>
            <p>
              {product.description}
            </p>
            <div className="align-right">
              <Button text={`Purchase $${product.price}`} className={Classes.BUTTON}/>
            </div>
          </Card>
        </div>
    )
  }
}

export default ProductsView