import React from 'react';
import EnterAmounts from './EnterAmounts'; // Card 1
import ComputedPayments from './ComputedPayments'; // Card 2
import MakePayment from './MakePayment'; // Card 3
import PaymentHistory from './PaymentHistory'; // Card 4



class CalcContainer extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="padding calc-container">
                    <EnterAmounts />
                    <ComputedPayments />
                    <MakePayment />
                    <PaymentHistory />
                </div>
                {/* Card 1 Enter Amounts*/}
                {/* User enters total debt amount */}
                {/* User enters interest rate */}
                {/* Card 2 Computed Payments*/}
                {/* Amount of 'normal payments (%1) to be debt free  */}
                {/* Show minimum payment */}
                {/* Show breakdown of payment (interest and 1% principal payment) */}
                {/* Card 3 Make a Payment*/}
                {/* Show interest payment*/}
                {/* Make a principal payment field */}
                {/* Force the minimum of 1% */}
                {/* Card 4 Payment History*/}
                {/* list payment and new balance */}
            </div>
        )
    }
}

export default CalcContainer;