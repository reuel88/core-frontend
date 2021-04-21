import React from 'react';
import {Link} from "react-router-dom";
import './index.scss';

const AppFooter = () => {
    return (<footer className="app__footer">
        <div className="app__footer-container">
            <Link to={'/'} className="app__footer-link">
                Ready to accept online payments?
            </Link>
        </div>
    </footer>)
}

export default AppFooter;