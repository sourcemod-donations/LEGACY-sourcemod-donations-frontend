import React, {Component} from 'react';
import {Alignment, Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from '@blueprintjs/core';
import {Link} from "react-router-dom";

class AdminNavbar extends Component {

  render() {
    return (
        <Navbar className="Navbar">
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Admin Dashboard</NavbarHeading>
            <NavbarDivider/>

            <Link to="/">
              <Button className="pt-minimal" icon="home" text="View store"/>
            </Link>
          </NavbarGroup>
        </Navbar>
    )
  }
}

export default AdminNavbar;