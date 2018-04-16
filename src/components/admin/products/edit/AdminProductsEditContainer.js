import React, {Component} from 'react';
import apiFetch from "../../../../apiFetch";
import {withRouter} from "react-router-dom";
import AdminProductsEdit from "./AdminProductsEdit";

class AdminProductsEditContainer extends Component {

  state = {
    isLoading: false,
    product: {},
    error: null
  };

  handleInputChange = (name, value) => {
    this.setState({
      product: {
        ...this.state.product,
        [name]: value
      }
    })
    ;
  };

  handleApiError = (data) => {
    this.setState({
      error: data.message
    });
  };

  loadProduct = (productId) => {
    this.setState({isLoading: true});

    const handleSuccess = (product) => {
      this.setState({
        product,
        isLoading: false,
        error: null
      });
    };

    apiFetch(`products/${+productId}`)
        .then(res => {
          if (res.ok)
            return res.json().then(handleSuccess);

          return res.json().then(this.handleApiError);
        });
  };

  saveProduct = () => {
    const {product} = this.state;
    const {id, ...body} = product;

    apiFetch(`products/${id}`, {
      method: 'PATCH',
      body: body
    })
        .then(res => {
          /*if (res.ok)
            return res.json().then(handleSuccess);*/

          return res.json().then(this.handleApiError);
        });
  };

  //
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.productId !== this.props.match.params.productId) {
      this.loadProduct(nextProps.match.params.productId);
    }
  }

  componentDidMount() {
    this.loadProduct(this.props.match.params.productId);
  }

  render() {
    const {isLoading, product, error} = this.state;

    return (
        <AdminProductsEdit
            product={product}
            isLoading={isLoading}
            error={error}
            handleInputChange={this.handleInputChange}
            saveProduct={this.saveProduct}
        />
    )
  }
}

export default withRouter(AdminProductsEditContainer);