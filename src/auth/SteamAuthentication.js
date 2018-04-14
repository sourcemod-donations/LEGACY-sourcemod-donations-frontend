import React, {Component} from 'react';
import config from "../config";
import {connect} from "react-redux";
import {AUTH_SUCCESS} from "../actions/auth";
import apiFetch from "../apiFetch";

class SteamAuthentication extends Component {

  static defaultProps = {
    onAuthSuccess: undefined,
    onAuthFailure: undefined
  };

  onAuthSuccess = userdata => {
    if (this.props.onAuthSuccess) {
      this.props.onAuthSuccess(userdata);
    }
  };

  showPopup = () => {
    this.popup = window.open(config.API_URL + 'auth/steam/redirect');

    const authPolling = () => {
      if (this.popup.closed) {
        const queryString = localStorage.getItem('steam_auth') || null;
        localStorage.setItem('steam_auth', null);

        if (queryString === null && this.props.onAuthFailure) {
          this.props.onAuthFailure();
          return;
        }

        apiFetch('auth/steam/verify' + queryString, {
          method: 'POST'
        })
            .then(res => res.json())
            .then(userdata => {
              this.onAuthSuccess(userdata);
            });

        return;
      }

      setTimeout(authPolling, 60);
    };

    authPolling();
  };

  render() {
    return (
        <div onClick={this.showPopup}>
          {this.props.children}
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAuthSuccess: userdata => dispatch({
    type: AUTH_SUCCESS,
    payload: userdata
  })
});

export default connect(null, mapDispatchToProps)(SteamAuthentication);