import React, {Component} from 'react';
import apiFetch from "../../apiFetch";
import ProductsView from "./ProductsView";

class ProductsContainer extends Component {

  state = {
    last_id: 0,
    hasNextPage: false,
    isLoading: false,
    products: [],
    pageSize: 10
  };

  loadNextPage = () => {
    const {last_id, pageSize} = this.state;
    this.setState({isLoading: true});

    apiFetch(`products/?last_id=${last_id}`)
        .then(res => res.json())
        .then(products => {
          const [lastProduct = {}] = products.slice(-1);
          const newState = {};

          if (lastProduct.id)
            newState.last_id = lastProduct.id;

          newState.hasNextPage = products.length >= pageSize;

          this.setState({
            products,
            isLoading: false,
            ...newState
          });
        });
  };

  componentDidMount() {
    this.loadNextPage();
  }

  render() {
    const {isLoading, products, hasNextPage} = this.state;

    return (
        <ProductsView
            products={products}
            isLoading={isLoading}
            loadNextPage={this.loadNextPage}
            hasNextPage={hasNextPage}
        />
    )
  }
}

export default ProductsContainer;