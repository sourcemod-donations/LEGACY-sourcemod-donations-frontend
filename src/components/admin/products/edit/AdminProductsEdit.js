import React, {Component, Fragment} from 'react';
import {Button, Callout, Classes, Label, Spinner, TextArea} from '@blueprintjs/core';

class AdminProductsEdit extends Component {

  handleInputChange = (event) => {
    const {name, value} = event.target;

    if (this.props.handleInputChange)
      this.props.handleInputChange(name, value);
  };

  saveProduct = () => {
    if (this.props.saveProduct)
      this.props.saveProduct();
  };

  render() {
    const {product, isLoading, error} = this.props;

    if (error)
      return this.renderError(error);

    return (
        <Fragment>
          <h1>Edit product</h1>

          {isLoading ?
              <Spinner className={Classes.LARGE}/>
              :
              <div>
                <div className="pt-input-group">
                  <Label text="Name">
                    <input className="pt-input pt-large"
                           type="text"
                           placeholder="Product name"
                           name="name"
                           value={product.name}
                           onChange={this.handleInputChange}/>
                  </Label>
                </div>

                <div className="pt-input-group">
                  <Label text="Description">
                    <TextArea
                        rows={5}
                        fill={true}
                        name="description"
                        value={product.description}
                        onChange={this.handleInputChange}
                    />
                  </Label>
                </div>
              </div>
          }

          <div className="align-right">
            <Button text={`Delete`} className={Classes.BUTTON}/>
            <Button text={`Save`} className={Classes.BUTTON} onClick={this.saveProduct}/>
          </div>
        </Fragment>
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

export default AdminProductsEdit