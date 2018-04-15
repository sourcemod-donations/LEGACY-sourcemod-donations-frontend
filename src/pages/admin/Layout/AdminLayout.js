import React, {Component} from 'react';
import {connect} from "react-redux";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

class AdminLayout extends Component {

  render() {
    const {isAuthenticated, username} = this.props.auth;

    return (
        <div className="container">
          <AdminNavbar/>

          <div className="row">
            <div className="col-3">
              <AdminSidebar/>
            </div>
            <div className="col-9">
              {this.props.children}
            </div>
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

export default connect(mapStateToProps)(AdminLayout);