import React, {Component, Fragment} from 'react';
import {Button, Classes, Spinner} from '@blueprintjs/core';

class AdminProductsList extends Component {

  loadNextPage = () => {
    if (this.props.loadNextPage)
      this.props.loadNextPage();
  };

  render() {
    const {products, isLoading, hasNextPage} = this.props;

    return (
        <Fragment>
          <h1>Products list</h1>

          <table className="pt-html-table pt-html-table-striped width-100">
            <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {isLoading ?
                <Spinner className={Classes.LARGE}/>
                :
                products.map(this.renderProduct)
            }
            </tbody>
          </table>

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
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>
            <Button text={`Edit`} className={`${Classes.BUTTON} pt-intent-primary`}/>
          </td>
        </tr>
    )
  }
}

export default AdminProductsList