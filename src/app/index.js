import React from 'react';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import './index.scss';
import AppHeader from './components/AppHeader/AppHeader';
import AppNavigation from "./components/AppNavigation/AppNavigation";
import routes from "./routes/routes";

const App = withRouter(() => {
    return (<React.Fragment>
        <AppHeader/>
        <AppNavigation/>
        <Switch>
            {routes.map(({path, component: Component}, key) => {
                return <Route exact path={path} component={Component} key={key}/>;
            })}
        </Switch>
    </React.Fragment>);
});

const Index = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
}

export default Index;
