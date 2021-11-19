import React from 'react';

class ComputedPayments extends React.Component {
    
    render() {
        const {data} = this.props;

        return (
            <div  className="card-container payment-breakdown-container">
                <h2>Payment Breakdown</h2>
                <div className="flex-container">
                    <h4>Minimum Payment: {data.principalAmt + data.interestAmt}</h4>
                    <p>1% Minimum Principal Required</p>
                    <div>Interest: {data.interestAmt}</div>
                    <div>Principal: {data.principalAmt}</div>
                    <div>{data.normalPayments} normal payments to be debt free!</div>
                </div>
            </div>
        )
    }
}

export default ComputedPayments;