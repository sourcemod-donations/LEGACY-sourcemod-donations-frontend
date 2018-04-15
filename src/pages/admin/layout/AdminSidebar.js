import React, {Component} from 'react';
import {Menu, Icon} from '@blueprintjs/core';
import {Link} from "react-router-dom";

const MenuLink = ({link = '', icon, text}) => {
  return (
      <li>
        <Link to={link} className="pt-menu-item pt-popover-dismiss">
          <Icon icon={icon} />
          {text}
        </Link>
      </li>
  )
};

class AdminSidebar extends Component {

  render() {
    return (
        <Menu>
          <MenuLink icon="home" text="Home"/>
          <MenuLink icon="new-text-box" text="Products" link="/admin/products"/>
          <MenuLink icon="cog" text="Settings"/>
        </Menu>
    )
  }
}

export default AdminSidebar;