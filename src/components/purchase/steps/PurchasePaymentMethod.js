import React, {Fragment} from "react";
import {Card, Elevation} from "@blueprintjs/core";
import {PAYMENT_METHOD} from "../../../actions/purchase";
import {Button, Classes} from "@blueprintjs/core/lib/esm/index";

const PaymentProcessorCard = ({img, name, paymentMethod, onPaymentMethodChange}) => {
  return (
      <div className="col-md-3">
        <Card
            interactive
            elevation={Elevation.TWO}
            className={`height-100 ${paymentMethod === name ? "pt-card--active" : ''}`}
            onClick={() => onPaymentMethodChange(name)}
        >
          <img src={img} style={{maxWidth: '100%'}}/>
        </Card>
      </div>
  )
};

const PurchasePaymentMethod = (props) => {

  return (
      <Fragment>
        <div className="row justify-content-center">
          <PaymentProcessorCard img="pp_paypal_logo.png" name={PAYMENT_METHOD.PAYPAL} {...props}/>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 align-right" style={{marginTop: '50px'}}>
            <Button text={`Pay`} className={`${Classes.LARGE} ${Classes.INTENT_SUCCESS}`}/>
          </div>
        </div>

      </Fragment>
  );
};

export default PurchasePaymentMethod;