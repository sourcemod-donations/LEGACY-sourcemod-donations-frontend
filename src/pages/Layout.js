import React, {Component} from 'react';
import {Alignment, Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from '@blueprintjs/core';
import {connect} from "react-redux";
import Authenticated from "../components/navbar/Authenticated";
import NotAuthenticated from "../components/navbar/NotAuthenticated";

class Layout extends Component {

  render() {
    const {isAuthenticated, username} = this.props.auth;

    return (
        <div className="container">
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>Blueprint</NavbarHeading>
              <NavbarDivider/>
              <Button className="pt-minimal" icon="home" text="Home"/>
            </NavbarGroup>

            <NavbarGroup align={Alignment.RIGHT}>
              {isAuthenticated ?
                  <Authenticated username={username}/>
                  :
                  <NotAuthenticated/>
              }
            </NavbarGroup>
          </Navbar>

          <div className="row justify-content-md-center">
            {this.props.children}
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(Layout);