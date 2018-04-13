import React, {Component} from 'react';
import {Button} from '@blueprintjs/core';

class Home extends Component {
  render() {
    return (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-8">
              <h1>Home component!</h1>
              <Button>test</Button>
            </div>
          </div>
        </div>
    )
  }
}

export default Home