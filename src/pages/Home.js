import React, {Component} from 'react';
import {Button} from '@blueprintjs/core';
import apiFetch from "../apiFetch";
import SteamAuthentication from "../auth/SteamAuthentication";

class Home extends Component {
  render() {
    return (
        <div>
          <h1>Home component!</h1>
          <Button onClick={() => apiFetch('products/1')}>test</Button>
        </div>
    )
  }
}

export default Home