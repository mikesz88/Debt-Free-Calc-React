(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(7),c=n.n(r),s=(n(14),n(2)),m=n(3),d=n(5),o=n(4),u=n(0),l=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"margin padding header-container",children:[Object(u.jsx)("h1",{children:"Debt-Free Calculator"}),Object(u.jsx)("div",{children:"Time to get debt free!"})]})})}}]),n}(i.a.Component),b=l,p=n(8),j=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).minimumPrincipal=function(e){e("principalAmt",Number((.01*a.props.data.debt).toFixed(2)))},a.minimumInterest=function(e){e("interestAmt",Number((a.props.data.interestRate/100/12*a.props.data.debt).toFixed(2)))},a.calcAmountOfPayments=function(e){for(var t=a.props.data.debt,n=0;t>.01;){t-=100*t/1e4,n++}e("normalPayments",n)},a.handleSubmit=function(e,t){e.preventDefault(),a.minimumPrincipal(t),a.minimumInterest(t),a.calcAmountOfPayments(t)},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.updateState,a=t.resetState;return Object(u.jsxs)("div",{className:"card-container enter-amounts-container",children:[" ",Object(u.jsx)("h2",{children:"Enter Your Amounts"}),Object(u.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t,n)},children:[Object(u.jsx)("label",{htmlFor:"debt",children:"Debt Amount"}),Object(u.jsx)("input",{className:"type",type:"number",name:"debt",id:"debt",onChange:function(e){return n("debt",e.target.value)},autoComplete:"off",step:"0.01",placeholder:"12500.56 = $12,500.56"}),Object(u.jsx)("label",{htmlFor:"interest",children:"Interest"}),Object(u.jsx)("input",{className:"type",type:"number",name:"interest",id:"interest",onChange:function(e){return n("interestRate",e.target.value)},autoComplete:"off",step:"0.01",placeholder:"2.5 = 2.5%"}),Object(u.jsx)("input",{onClick:a,className:"button",type:"reset",value:"Click here to restart!"}),Object(u.jsx)("button",{children:"Submit"})]})]})}}]),n}(i.a.Component),h=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.data;return Object(u.jsxs)("div",{className:"card-container payment-breakdown-container",children:[Object(u.jsx)("h2",{children:"Payment Breakdown"}),Object(u.jsxs)("div",{className:"flex-container",children:[Object(u.jsxs)("h4",{children:["Minimum Payment: $",e.principalAmt+e.interestAmt]}),Object(u.jsx)("div",{children:"1% Minimum Principal Required"}),Object(u.jsxs)("div",{children:["Interest: $",Number(e.interestAmt.toFixed(2))]}),Object(u.jsxs)("div",{children:["Principal: $",Number(e.principalAmt.toFixed(2))]}),Object(u.jsxs)("div",{children:[e.normalPayments," normal payments to be debt free!"]})]})]})}}]),n}(i.a.Component),O=h,y=n(9),x=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).minimumPrincipal=function(e){e("principalAmt",Number((.01*a.props.data.debt).toFixed(2)))},a.minimumInterest=function(e){e("interestAmt",Number((a.props.data.interestRate/100/12*a.props.data.debt).toFixed(2)))},a.warningLabel=function(e){var t=document.getElementById("submit-Payment"),n=document.createElement("div");n.id="principal-warning","tooLow"===e?n.innerHTML="\n            The payment was too low! Try again!\n            ":"tooHigh"===e&&(n.innerHTML="\n            The payment was too high! Try again!\n            "),t.appendChild(n)},a.checkAmount=function(){var e=a.props.data,t=document.getElementById("principal-warning");return t&&t.remove(),e.payment<e.principalAmt+e.interestAmt?(a.warningLabel("tooLow"),!0):e.payment>e.debt+e.interestAmt?(a.warningLabel("tooHigh"),!0):void 0},a.handleSubmit=function(e,t){if(e.preventDefault(),!a.checkAmount()){var n=a.props.data,i={principalAmt:Number((n.payment-n.interestAmt).toFixed(2)),interestAmt:Number(n.interestAmt.toFixed(2)),newDebt:Number((n.debt-(n.payment-n.interestAmt)).toFixed(2)),date:Date.now()};t("paymentHistory",[].concat(Object(y.a)(n.paymentHistory),[i])),t("debt",i.newDebt,(function(){a.minimumPrincipal(t),a.minimumInterest(t),0===i.newDebt&&a.debtFree()})),t("payment",0)}},a.debtFree=function(){var e=document.getElementById("submit-Payment"),t=document.createElement("div");t.id="debt-free-message",t.innerHTML="\n        You have officially paid off your debt! FANTASTIC! \n        <i class=\"fas fa-thumbs-up\"></i>\n        Click the 'CLICK HERE TO RESTART' to calculate another debt!\n        ",e.appendChild(t)},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.updateState;return Object(u.jsxs)("div",{className:"card-container make-payment-container",children:[Object(u.jsx)("h2",{className:"payment-info",children:"Make a Payment"}),Object(u.jsxs)("div",{className:"flex-container",children:[Object(u.jsxs)("p",{children:["Interest Payment $",Number(n.interestAmt.toFixed(2))]}),Object(u.jsxs)("p",{children:["Minimum Principal: $",Number(n.principalAmt.toFixed(2))]}),Object(u.jsxs)("p",{children:["Minimum Payment: $",Number((n.principalAmt+n.interestAmt).toFixed(2))]})]}),Object(u.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t,a)},id:"submit-Payment",children:[Object(u.jsx)("label",{htmlFor:"payment",children:"Enter your Payment"}),Object(u.jsx)("input",{className:"type",type:"number",name:"payment",id:"payment",autoComplete:"off",step:"0.01",onChange:function(e){return a("payment",e.target.value)},placeholder:n.principalAmt+n.interestAmt,value:n.payment}),Object(u.jsx)("button",{type:"submit",className:"button",children:"Submit Payment"})]})]})}}]),n}(i.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.data.paymentHistory;return Object(u.jsxs)("div",{className:"card-container payment-history-container",children:[Object(u.jsx)("h2",{children:"Payment History"}),Object(u.jsxs)("div",{className:"payment-history-flex",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"Payment Counter"}),Object(u.jsx)("ul",{children:e.map((function(e,t){return Object(u.jsx)("li",{children:t+1},e.date)}))})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"Principal Paid"}),Object(u.jsx)("ul",{children:e.map((function(e){return Object(u.jsxs)("li",{children:["$",e.principalAmt]},e.date)}))})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"Interest Paid"}),Object(u.jsx)("ul",{children:e.map((function(e){return Object(u.jsxs)("li",{children:["$",e.interestAmt]},e.date)}))})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"New Balance"}),Object(u.jsx)("ul",{children:e.map((function(e){return Object(u.jsxs)("li",{children:["$",e.newDebt]},e.date)}))})]})]})]})}}]),n}(i.a.Component),v=f,A={debt:0,interestRate:0,principalAmt:0,interestAmt:0,paymentHistory:[],payment:0,normalPayments:0},S=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).updateState=function(e,t,n){"paymentHistory"!==e&&(t=Number(t)),a.setState(Object(p.a)({},e,t),n)},a.resetState=function(){a.setState(A);var e=document.getElementById("debt-free-message");e&&e.remove()},a.state=A,a}return Object(m.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"calc-container padding",children:[Object(u.jsx)(j,{data:this.state,updateState:this.updateState,resetState:this.resetState}),Object(u.jsx)(O,{data:this.state,updateState:this.updateState,resetState:this.resetState}),Object(u.jsx)(x,{data:this.state,updateState:this.updateState,resetState:this.resetState}),Object(u.jsx)(v,{data:this.state,updateState:this.updateState,resetState:this.resetState})]})})}}]),n}(i.a.Component);n(16);var g=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsx)(S,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),N()}},[[17,1,2]]]);
//# sourceMappingURL=main.6cb72a90.chunk.js.map