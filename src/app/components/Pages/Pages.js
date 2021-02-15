import React from 'react';
import {Link} from "react-router-dom";
import MicroFrontend from "../MicroFrontend";

const {
    REACT_APP_CREATE_REACT_APP_HOST: createReactApp_Host,
    REACT_APP_INVOICES_HOST: invoices_Host,
    REACT_APP_SINGLE_PAYMENT_HOST: singlePayment_Host
} = process.env;

const CreateReactApp = (props) => {
    return (
        <React.Fragment>
            <MicroFrontend {...props} host={createReactApp_Host} name="CreateReactApp"/>
        </React.Fragment>
    )
};

const Invoices = (props) => {
    return (
        <React.Fragment>
            <MicroFrontend {...props} host={invoices_Host} name="Invoices"/>
        </React.Fragment>
    )
};

const SinglePayment = (props) => {
    return (
        <React.Fragment>
            <MicroFrontend {...props} host={singlePayment_Host} name="SinglePayment"/>
        </React.Fragment>
    )
};

const PaymentHistory = (props) => {
    const {
        onClose = () => {
            alert('onClose not defined');
        }
    } = props;

    return (<div>
        <button onClick={() => onClose()}>click</button>
        <Link to={'/invoices'}>home</Link>
        payment history
    </div>)
}


export
{
    CreateReactApp,
    Invoices,
    SinglePayment,
    PaymentHistory
};