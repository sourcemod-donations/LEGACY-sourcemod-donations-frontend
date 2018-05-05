import React, {Component} from 'react';
import {connect} from "react-redux";
import {purchaseFetchProductFailure, purchaseFetchProductSuccess, purchaseStart} from "../../actions/purchase";
import {bindActionCreators} from "redux";
import ProgressTracker, {STATE} from "../generic/ProgressTracker/ProgressTracker";
import {Button, Classes, Spinner} from '@blueprintjs/core';
import PurchaseRecipientDetails from "./steps/PurchaseRecipientDetails";
import PurchaseOverview from "./steps/PurchaseOverview";
import PurchaseStepController from "./PurchaseStepController";
import PurchasePaymentMethod from "./steps/PurchasePaymentMethod";

class PurchaseContainer extends Component {

  state = {
    recipient: null,
    paymentMethod: null,
    currentStep: 0
  };

  onRecipientChange = (recipient) => {
    this.setState({recipient});
  };

  onPaymentMethodChange = (paymentMethod) => {
    this.setState({paymentMethod});
  };

  nextStep = () => {
    this.setState({currentStep: this.state.currentStep + 1});
  };

  render() {
    const {product, isLoading} = this.props.purchase;
    const {currentStep} = this.state;

    const steps = [
      {
        heading: 'Product overview',
        component: <PurchaseOverview product={product}/>
      },
      {
        heading: 'Recipient details',
        component: <PurchaseRecipientDetails onRecipientChange={this.onRecipientChange} recipient={this.state.recipient}/>
      },
      {
        heading: 'Payment method',
        component: <PurchasePaymentMethod onPaymentMethodChange={this.onPaymentMethodChange} paymentMethod={this.state.paymentMethod}/>,
        showNext: false
      }
    ];

    return (
        <PurchaseStepController
          isLoading={isLoading}
          currentStep={currentStep}
          steps={steps}
          onNextStep={this.nextStep}
        />
    )
  }

  componentDidMount() {
    //if (!this.props.purchase.product) {
    this.props.purchaseStart(1);
    //}
  }
}

const mapStateToProps = (state) => ({
  purchase: state.purchase
});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
          purchaseStart,
          purchaseFetchProductSuccess,
          purchaseFetchProductFailure
        },
        dispatch
    ));

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseContainer);