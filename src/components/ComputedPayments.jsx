import React from 'react';

class ComputedPayments extends React.Component {
    
    render() {
        const {data} = this.props;

        return (
            <div  className="card-container payment-breakdown-container">
                <h2>Payment Breakdown</h2>
                <div className="flex-container">
                    <h4>Minimum Payment: ${data.principalAmt + data.interestAmt}</h4>
                    <div>1% Minimum Principal Required</div>
                    <div>Interest: ${Number(data.interestAmt.toFixed(2))}</div>
                    <div>Principal: ${Number(data.principalAmt.toFixed(2))}</div>
                    <div>{data.normalPayments} normal payments to be debt free!</div>
                </div>
            </div>
        )
    }
}

export default ComputedPayments;