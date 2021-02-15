import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/index';
import reportWebVitals from './reportWebVitals';

// render micro frontend function
window.renderContainer = (containerId, history) => {
    ReactDOM.render(
        <React.StrictMode>
            <App history={history}/>
        </React.StrictMode>,
        document.getElementById(containerId)
    );
};

// unmount micro frontend function
window.unmountContainer = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('Container-container')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
