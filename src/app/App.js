import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';

const {
    REACT_APP_CREATE_REACT_APP_HOST: createReactApp_Host
} = process.env;

const CreateReactApp = ({ history }) => (
    <MicroFrontend history={history} host={createReactApp_Host} name="CreateReactApp" />
);

const App = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <AppHeader/>
                <Switch>
                    <Route exact path="/create-react-app" component={CreateReactApp} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
