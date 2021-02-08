import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => (
    <header>
        <div className="center-column">
            <h1>🍽 Feed me</h1>
        </div>
        <nav>
            <ol className="center-column">
                <li>
                    <NavLink to="/create-react-app">Create React App</NavLink>
                </li>
            </ol>
        </nav>
    </header>
);

export default AppHeader;