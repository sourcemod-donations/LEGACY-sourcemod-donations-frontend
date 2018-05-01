import React, {Component} from 'react';
import './ProgressTracker.css';

export const STATE = {
  NONE: '',
  ACTIVE: 'active',
  COMPLETE: 'complete'
};

function generateClass(className, state) {
  const modifierClass =
      state !== STATE.NONE ?
          `${className}--${state}`
          : '';

  return `${className} ${modifierClass}`;
}

class ProgressTracker extends Component {

  render() {
    const {steps = []} = this.props;
    /*const steps = [
      {
        heading: 'Product overview',
        state: STATE.COMPLETE
      },
      {
        heading: 'Recipient details',
        state: STATE.ACTIVE
      },
      {
        heading: 'Payment details',
        state: STATE.NONE
      }
    ];*/

    return (
        <ul className="progress-tracker">

          {steps.map(step =>
              <li className="progress-tracker__step">
                <span className={generateClass('progress-tracker__marker', step.state)}></span>
                <span className="progress-tracker__text">
                  <h4 className={generateClass('progress-tracker__title', step.state)}>
                    {step.heading}
                  </h4>
                </span>
              </li>
          )}

        </ul>
    )
  }
}

export default ProgressTracker