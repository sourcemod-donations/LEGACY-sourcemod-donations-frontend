import React, {Component} from 'react';
import ProgressTracker, {STATE} from "../generic/ProgressTracker/ProgressTracker";
import {Button, Classes, Spinner} from '@blueprintjs/core';

class PurchaseStepController extends Component {

  render() {
    const {steps = [], currentStep, isLoading, onNextStep} = this.props;

    const enhancedSteps = steps
        .map((v, i) => {
          let state = STATE.NONE;
          if (i === currentStep) {
            state = STATE.ACTIVE;
          }
          else if (currentStep > i) {
            state = STATE.COMPLETE
          }

          return {
            ...v,
            state
          };
        });

    const currentStepObj = steps[currentStep];
    const {showNext} = currentStepObj;
    let currentComponent = null;

    if (currentStepObj && currentStepObj.component) {
      currentComponent = currentStepObj.component;
    }

    return (
        <div className="row justify-content-center">

          <div className="col-12">
            <ProgressTracker steps={enhancedSteps}/>
          </div>

          <div className="col-12">
            {isLoading ?
                <Spinner className={Classes.LARGE}/>
                : currentComponent
            }
          </div>

          <div className="col-md-8 align-right" style={{marginTop: '50px'}}>
            {showNext !== false &&
            <Button text={`Continue`} className={`${Classes.LARGE} ${Classes.INTENT_PRIMARY}`} onClick={onNextStep}/>
            }
          </div>
        </div>
    )
  }
}

export default PurchaseStepController;