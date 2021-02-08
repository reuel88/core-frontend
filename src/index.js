import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';
import reportWebVitals from './reportWebVitals';

// render micro frontend function
window.renderCreateReactApp = (containerId, history) => {
    ReactDOM.render(
        <React.StrictMode>
            <App history={history}/>
        </React.StrictMode>,
        document.getElementById(containerId)
    );
};

// unmount micro frontend function
window.unmountCreateReactApp = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('CreateReactApp-container')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
