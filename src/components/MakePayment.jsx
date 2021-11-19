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

    checkAmount = () => {
        let formDiv = document.getElementById('submit-Payment');
        let warning = document.getElementById('principal-warning');
        if (this.props.data.payment < this.props.data.principalAmt) {
            let warning = document.createElement('div');
            warning.id ='principal-warning';
            warning.innerHTML = `
            The principal balance was too low! Try again!
            `;
            formDiv.appendChild(warning);
            return true;
        } else if(warning) {
            warning.remove();
            return false;
        }
    }

    handleSubmit = (e, updateState) => {
        if (this.checkAmount()) {
            return;
        } else {
            const data = this.props.data;
            let newPayment = {
                principalAmt: data.payment,
                interestAmt: data.interestAmt,
                newDebt: data.debt - data.payment,
                date: Date.now()
            }
            e.preventDefault();
    
            updateState('paymentHistory', [...data.paymentHistory, newPayment]);
            updateState('debt', newPayment.newDebt, () => {
                this.minimumPrincipal(updateState);
                this.minimumInterest(updateState);
            });
            updateState('payment', 0);
        }
    }



    render() {
        const {data, updateState} = this.props;

        return (
            <div className="card-container ">
                <h3>Make a Payment</h3>
                <h4>Interest Payment ${data.interestAmt}</h4> 
                <form onSubmit={(e) => this.handleSubmit(e, updateState)} id="submit-Payment">
                    <label htmlFor="payment"><h4>Minimum Principal: ${data.principalAmt}</h4></label>
                    <input 
                        type="number" 
                        name="payment" id="payment" 
                        autoComplete="off" 
                        step="0.01" 
                        onChange={(e) => updateState('payment', e.target.value)} 
                        placeholder={data.principalAmt}
                        value={data.payment}
                    />
                    <button type="submit" className="button">Submit Payment</button>
                </form>
            </div>
        )
    }
}

export default MakePayment;