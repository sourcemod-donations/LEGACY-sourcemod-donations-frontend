import React, {Component, Fragment} from "react";
import {Button, Card, Colors, Elevation, Icon, Label} from "@blueprintjs/core";
import {RECIPIENT_MYSELF, RECIPIENT_SOMEBODYELSE} from "../../../actions/purchase";
import {connect} from "react-redux";
import {Classes} from "@blueprintjs/core/lib/esm/index";
import apiFetch from "../../../apiFetch";
import {Link} from "react-router-dom";

class PurchaseRecipientDetails extends Component {

  state = {
    showForm: false,
    steamid: '',
    profile: null
  };

  onRecipientChange = (recipient) => {
    this.setState({
      showForm: recipient === RECIPIENT_SOMEBODYELSE
    });

    if (this.props.onRecipientChange) {
      this.props.onRecipientChange(recipient);
    }
  };

  onCheckSteamProfile = () => {
    apiFetch(`steam/profile?profile=${this.state.steamid}`)
        .then(res => res.json())
        .then(profile => {
          this.setState({profile});
        });
  };

  handleInputChange = (event) => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  };

  render() {
    const {recipient} = this.props;
    const {isAuthenticated} = this.props.auth;
    const {showForm} = this.state;

    return (
        <Fragment>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Card
                  interactive={isAuthenticated}
                  elevation={Elevation.TWO}
                  className={`
                    height-100
                    ${recipient === RECIPIENT_MYSELF ? "pt-card--active" : ''}
                    ${!isAuthenticated ? "pt-card--disabled" : ''}
                  `}
                  onClick={() => isAuthenticated && this.onRecipientChange(RECIPIENT_MYSELF)}
              >
                <h5>I'm purchasing for myself</h5>
                <p>Select this option if you want to claim the purchase in currently signed in account</p>

                {!isAuthenticated &&
                <Fragment>
                  <p style={{color: Colors.RED3}}>
                    <Icon icon="error" style={{marginRight: '8px'}} color={Colors.RED3}/>
                    You need to sign in first
                  </p>
                </Fragment>}
              </Card>
            </div>

            <div className="col-md-4">
              <Card
                  interactive elevation={Elevation.TWO}
                  className={`height-100 ${recipient === RECIPIENT_SOMEBODYELSE ? "pt-card--active" : ''}`}
                  onClick={() => this.onRecipientChange(RECIPIENT_SOMEBODYELSE)}
              >
                <h5>I'm purchasing for somebody else</h5>
                <p>Select this option if you want to gift the purchase to somebody else <strong>or if you don't want to
                  sign in</strong></p>
              </Card>
            </div>
          </div>

          {showForm &&
          <div className="row justify-content-center" style={{marginTop: '30px'}}>
            <div className="col-md-8">
              <div className="pt-input-group">
                <Label text="Recipient">
                  <input className="pt-input pt-large"
                         type="text"
                         placeholder="Profile URL / SteamID / CommunityID"
                         name="steamid"
                         value={this.state.steamid}
                         onChange={this.handleInputChange}
                  />
                </Label>
              </div>
              <Button
                  text={`Check`}
                  className={`${Classes.LARGE} ${Classes.INTENT_SUCCESS}`}
                  onClick={this.onCheckSteamProfile}
              />

              {this.state.profile &&
              <Card
                  interactive
                  elevation={Elevation.TWO}
                  style={{marginTop: '30px'}}
                  className="d-flex"
              >
                <img src={this.state.profile.avatar} style={{maxWidth: '100%'}}/>

                <div style={{flexGrow: 0, flexShrink: 0, paddingLeft: '10px'}}>
                  <h4><Link to={this.state.profile.url}>{this.state.profile.name}</Link></h4>
                </div>
              </Card>}
            </div>
          </div>}

        </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(PurchaseRecipientDetails);