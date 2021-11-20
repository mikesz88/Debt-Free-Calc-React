import React from 'react';



class PaymentHistory extends React.Component {

    render() { 
        let { paymentHistory } = this.props.data;

        return (
            <div className="card-container payment-history-container">
                <h2>Payment History</h2>
                <div className="payment-history-flex">

                    <div>
                        <div>Payment Counter</div>
                        <ul>
                            {paymentHistory.map((object, index) => (
                                <li key={object.date}>{index+1}</li>
                            ))} 
                        </ul>
                    </div>
                    <div>
                        <div>Principal Paid</div>
                        <ul>
                            {paymentHistory.map(object => (
                                <li key={object.date}>${object.principalAmt}</li>
                            ))} 
                        </ul>
                    </div>
                    <div>
                        <div>Interest Paid</div>
                        <ul>
                            {paymentHistory.map(object => (
                                <li key={object.date}>${object.interestAmt}</li>
                            ))} 
                        </ul>
                    </div>
                    <div>
                        <div>New Balance</div>
                        <ul>
                            {paymentHistory.map(object => (
                                <li key={object.date}>${object.newDebt}</li>
                            ))} 
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentHistory;