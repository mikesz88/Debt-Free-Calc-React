import React from 'react';

class EnterAmounts extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    minimumPrincipal = (updateState) => {
        updateState('principalAmt', Number(((this.props.data.debt) * 0.01).toFixed(2)));
    }

    minimumInterest = (updateState) => {
        updateState('interestAmt', Number((((this.props.data.interestRate / 100) / 12) * this.props.data.debt).toFixed(2)));        
    }

    calcAmountOfPayments = (updateState) => {
        let debt = this.props.data.debt;
        let paymentCount = 0;
        while (debt > 0.01) {
            let minPayment = debt * 100 / 10000;
            debt -= minPayment;
            paymentCount++;
        }
        updateState('normalPayments', paymentCount);
    }

    handleSubmit = (e, updateState) => {
        e.preventDefault();
        this.minimumPrincipal(updateState);
        this.minimumInterest(updateState);
        this.calcAmountOfPayments(updateState)
    } 

    render() {
        const {updateState, resetState} = this.props;


        return (
            <div  className="card-container enter-amounts-container"> {/* Enter Amount Div */}
                <h2>Enter Your Amounts</h2>
                <form onSubmit={(e) => this.handleSubmit(e, updateState)}>
                    <label htmlFor="debt">Debt Amount</label>
                    <input
                        className="type" 
                        type="number" 
                        name="debt" 
                        id="debt" 
                        onChange={(e) => updateState('debt', e.target.value)} 
                        autoComplete="off" 
                        step="0.01" 
                        placeholder="12500.56 = $12,500.56"
                    />
                    <label htmlFor="interest">Interest</label>
                    <input
                        className="type" 
                        type="number" 
                        name="interest" 
                        id="interest" 
                        onChange={(e) => updateState('interestRate', e.target.value)} 
                        autoComplete="off"
                        step="0.01" 
                        placeholder="2.5 = 2.5%"
                    />
                    <input onClick={resetState} className="button" type="reset" value="Click here to restart!" />
                    <button>Submit</button>
                </form>
            </div> 
        )
    }
}

export default EnterAmounts;