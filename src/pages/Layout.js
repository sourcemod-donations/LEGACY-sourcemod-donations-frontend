import React, {Component} from 'react';
import {Alignment, Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from '@blueprintjs/core';

class Layout extends Component {
  render() {
    return (
        <div className="container">
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>Blueprint</NavbarHeading>
              <NavbarDivider/>
              <Button className="pt-minimal" icon="home" text="Home"/>
            </NavbarGroup>

            <NavbarGroup align={Alignment.RIGHT}>
              <Button icon="user" className="pt-minimal" text="Sign in"/>
            </NavbarGroup>
          </Navbar>
          <div className="row justify-content-md-center">
            {this.props.children}
          </div>
        </div>
    )
  }
}

export default Layout