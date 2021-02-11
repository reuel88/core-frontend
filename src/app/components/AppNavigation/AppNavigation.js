import React from 'react';
import {NavLink} from "react-router-dom";
import './index.scss';

const AppNavigation = () => {
    return(
        <nav className="app__nav">
            <ul className="app__nav-list">
                <li className="app__nav-item">
                    <NavLink className="app__nav-link" to={'/invoices'}>
                        Invoices
                    </NavLink>
                </li>
                <li className="app__nav-item">
                    <NavLink className="app__nav-link" to={'/single-payment'}>
                        One-off Payment
                    </NavLink>
                </li>
                <li className="app__nav-item">
                    <NavLink className="app__nav-link" to={'/payment-history'}>
                        Payment History
                    </NavLink>
                </li>
                <li className="app__nav-item">
                    <NavLink className="app__nav-link" to={'/statements'}>
                        Statements
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default AppNavigation;