import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import AppHeader from './components/AppHeader';
import MicroFrontend from './components/MicroFrontend';

const {
    REACT_APP_CREATE_REACT_APP_HOST: createReactApp_Host
} = process.env;

const CreateReactApp = ({ history }) => (
    <MicroFrontend history={history} host={createReactApp_Host} name="CreateReactApp" />
);

const Index = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <p>paragraph</p>
                <span>paragraph</span>

                <AppHeader/>
                <Switch>
                    <Route exact path="/create-react-app" component={CreateReactApp} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default Index;
