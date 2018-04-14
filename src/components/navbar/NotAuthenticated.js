import React, {Component} from 'react';
import {Button} from '@blueprintjs/core';
import SteamAuthentication from "../../auth/SteamAuthentication";

class NotAuthenticated extends Component {
  render() {
    return (
        <SteamAuthentication>
          <Button icon="user" className="pt-minimal" text="Sign in"/>
        </SteamAuthentication>
    )
  }
}

export default NotAuthenticated