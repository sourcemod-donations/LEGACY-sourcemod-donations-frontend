import React, {Component} from 'react';
import apiFetch from "../../apiFetch";
import ProductSingleView from "./ProductSingleView";
import {withRouter} from "react-router-dom";

class ProductSingleViewContainer extends Component {

  state = {
    isLoading: false,
    product: [],
    error: null
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
        <ProductSingleView
            product={product}
            isLoading={isLoading}
            error={error}
        />
    )
  }
}

export default withRouter(ProductSingleViewContainer);