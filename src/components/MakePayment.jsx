import React from 'react';

class MakePayment extends React.Component {
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

    warningLabel = (level) => {
        let formDiv = document.getElementById('submit-Payment');
        let warning = document.createElement('div');
        warning.id ='principal-warning';
        if (level === 'tooLow') {
            warning.innerHTML = `
            The payment was too low! Try again!
            `;
        } else if (level === 'tooHigh') {
            warning.innerHTML = `
            The payment was too high! Try again!
            `;
        }
        formDiv.appendChild(warning);
    }

    checkAmount = () => { 
        const data = this.props.data;
        /* I need to handle the conditions between completely finishing the debt, edge cases, and this div below. Then I can design! */
        let warning = document.getElementById('principal-warning');
        if(warning) {
            warning.remove();
        }
        
        if (data.payment < data.principalAmt + data.interestAmt) {
            this.warningLabel('tooLow')
            return true;
        } else if (data.payment > data.debt + data.interestAmt) {
            this.warningLabel('tooHigh')
            return true;
        }
    }

    handleSubmit = (e, updateState) => {
        e.preventDefault();
        if (this.checkAmount()) {
            return;
        } else {
            const data = this.props.data;
            let newPayment = {
                principalAmt: Number((data.payment - data.interestAmt).toFixed(2)),
                interestAmt: Number((data.interestAmt).toFixed(2)),
                newDebt: Number((data.debt - (data.payment - data.interestAmt)).toFixed(2)),
                date: Date.now()
            }
    
            updateState('paymentHistory', [...data.paymentHistory, newPayment]);
            updateState('debt', newPayment.newDebt, () => {
                this.minimumPrincipal(updateState);
                this.minimumInterest(updateState);
                if (newPayment.newDebt === 0) {
                    this.debtFree();
                }
            });
            updateState('payment', 0);
        }
    }

    debtFree = () => {
        let formDiv = document.getElementById('submit-Payment');
        let debtFree = document.createElement('div');
        debtFree.id ='debt-free-message';
        debtFree.innerHTML = `
        You have officially paid off your debt! FANTASTIC! 
        <i class="fas fa-thumbs-up"></i>
        Click the 'CLICK HERE TO RESTART' to calculate another debt!
        `;
        formDiv.appendChild(debtFree);
    }


    render() {
        const {data, updateState} = this.props;

        return (
            <div className="card-container make-payment-container">
                <h2 className="payment-info">Make a Payment</h2>
                <div className="flex-container">
                <p>Interest Payment ${Number(data.interestAmt.toFixed(2))}</p> 
                <p>Minimum Principal: ${Number(data.principalAmt.toFixed(2))}</p>
                <p>Minimum Payment: ${Number((data.principalAmt + data.interestAmt).toFixed(2))}</p>
                </div>
                <form onSubmit={(e) => this.handleSubmit(e, updateState)} id="submit-Payment">
                    <label htmlFor="payment">Enter your Payment</label>
                    <input 
                        className="type" 
                        type="number" 
                        name="payment" id="payment" 
                        autoComplete="off" 
                        step="0.01" 
                        onChange={(e) => updateState('payment', e.target.value)} 
                        placeholder={data.principalAmt + data.interestAmt}
                        value={data.payment}
                    />
                    <button type="submit" className="button">Submit Payment</button>
                </form>
            </div>
        )
    }
}

export default MakePayment;