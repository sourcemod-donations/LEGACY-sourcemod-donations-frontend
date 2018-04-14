import React, {Component} from 'react';
import {Button} from '@blueprintjs/core';

class Authenticated extends Component {
  render() {
    return (
        <Button icon="user" className="pt-minimal" text={this.props.username}/>
    )
  }
}

export default Authenticated