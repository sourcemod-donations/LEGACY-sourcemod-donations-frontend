import React, {Component} from 'react';
import {Alignment, Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from '@blueprintjs/core';
import {connect} from "react-redux";
import Authenticated from "../components/navbar/Authenticated";
import NotAuthenticated from "../components/navbar/NotAuthenticated";
import {Link} from "react-router-dom";

class Layout extends Component {

  render() {
    const {isAuthenticated, username} = this.props.auth;

    return (
        <div className="container">
          <Navbar className="Navbar">
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>Blueprint</NavbarHeading>
              <NavbarDivider/>

              <Link to="/">
                <Button className="pt-minimal" icon="home" text="Home"/>
              </Link>
            </NavbarGroup>

            <NavbarGroup align={Alignment.RIGHT}>
              {isAuthenticated ?
                  <Authenticated username={username}/>
                  :
                  <NotAuthenticated/>
              }
            </NavbarGroup>
          </Navbar>

          {this.props.children}
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