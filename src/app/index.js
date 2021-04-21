import React from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import './index.scss';
import defaultHistory from './history';
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from './components/AppHeader/AppHeader';
import AppNavigation from "./components/AppNavigation/AppNavigation";
import routes from "./routes/routes";

const App = withRouter((props) => {
    const {location} = props;

    return (<React.Fragment>
        <AppHeader/>
        <AppNavigation/>
        <Switch location={location}>
            {routes.map(({path, component: Component}, key) => {
                return <Route path={path} component={Component} key={key}/>;
            })}
        </Switch>
        <AppFooter/>
    </React.Fragment>)
})

const Index = ({history = defaultHistory}) => {
    return (
        <Router>
            <App history={history}/>
        </Router>
    );
}

export default Index;
