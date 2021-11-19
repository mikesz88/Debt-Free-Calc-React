import React from 'react';
import EnterAmounts from './EnterAmounts'; // Card 1
import ComputedPayments from './ComputedPayments';
import MakePayment from './MakePayment';
import PaymentHistory from './PaymentHistory';

const original = {
    debt: 0,
    interestRate: 0,
    principalAmt: 0,
    interestAmt: 0,
    paymentHistory: [],
    payment: 0,
    normalPayments: 0
}

class CalcContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = original
    }

    updateState = (name, state, func) => {
        if (name !== 'paymentHistory') {
            state = Number(state);
        }
        this.setState({
            [name]: state
        }, func)
    }

    resetState = () => {
        this.setState(original)
      }
      

    render() {
        return (
            <div className="container">
                <div className="calc-container padding">
                    <EnterAmounts 
                    data={ this.state }
                    updateState={ this.updateState }
                    resetState={ this.resetState }
                    />
                    <ComputedPayments 
                    data={ this.state }
                    updateState={ this.updateState }
                    resetState={ this.resetState }
                    />
                    <MakePayment
                    data={ this.state }
                    updateState={ this.updateState }
                    resetState={ this.resetState }
                    />
                    <PaymentHistory 
                    data={ this.state }
                    updateState={ this.updateState }
                    resetState={ this.resetState }
                    />
                </div>
            </div>
        )
    }
}

export default CalcContainer;