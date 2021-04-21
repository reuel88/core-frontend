import React from 'react';
import {Link} from "react-router-dom";
import './index.scss';
import logo from '../../../logo.svg';

const AppHeader = () => {
    return (
        <header className="app__header">
            <div className="app__header-container">
                <div className="app__header-logo-container">
                    <Link to={'/'} className="app__header-logo-link">
                        <img src={logo} alt="logo" className="app__header-logo"/>
                    </Link>
                </div>

                <div className="app__header-right-container">
                    <span className="app__header-business-name">
                        Business Name
                    </span>
                    <div className="app__header-security-container">
                        <i className="app__header-security-icon fa fa-shield"/>
                        <span className="app__header-security-text">Secured Hosted Payments</span>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default AppHeader;