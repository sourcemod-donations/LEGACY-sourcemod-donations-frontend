import React, {Component} from 'react';
import AdminProductsList from "./AdminProductsList";
import apiFetch from "../../../../apiFetch";
import {withRouter} from "react-router-dom";

class AdminProductsListContainer extends Component {

  state = {
    hasNextPage: false,
    isLoading: false,
    products: [],
    pageSize: 10
  };

  loadPage = () => {
    const {history} = this.props;
    const query = new URLSearchParams(history.location.search);

    const {pageSize} = this.state;
    const last_id = query.get('last_id');
    const qs = last_id ? `?last_id=${last_id}` : '';

    this.setState({isLoading: true});

    apiFetch(`products/${qs}`)
        .then(res => res.json())
        .then(products => {
          this.setState({
            products,
            isLoading: false,
            hasNextPage: products.length >= pageSize
          });
        });
  };
  loadNextPage = () => {
    const {history} = this.props;
    const {products} = this.state;

    const [lastProduct = {}] = products.slice(-1);
    const newCursor = lastProduct.id;

    history.push({
      path: history.location.pathname,
      search: `?last_id=${newCursor}`
    });
  };

  //
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.loadPage();
    }
  }

  componentDidMount() {
    this.loadPage();
  }

  render() {
    const {isLoading, products, hasNextPage} = this.state;

    return (
        <AdminProductsList
            products={products}
            isLoading={isLoading}
            loadNextPage={this.loadNextPage}
            hasNextPage={hasNextPage}
        />
    )
  }
}

export default withRouter(AdminProductsListContainer);