import qs from "query-string";
import React from "react";
import {Route, Switch, withRouter} from 'react-router-dom';
import './index.scss';
import routes from "../../routes/routes";

const AppModal = (props) => {
    const {history, location} = props;
    const search = qs.parse(location.search);

    const closeModal = (query = {}) => {
        let newQuery = {...search, ...query};

        delete newQuery.modal;
        delete newQuery.path;

        const newSearch = qs.stringify(newQuery);
        history.push({...location, search: newSearch})
    }

    return <div className="app__modal-bg">
        <div className="app__modal-wrapper">
            <Switch location={{
                ...location,
                pathname: search.path
            }}>
                {routes.map(({path, component: Component}, key) => {
                    return <Route path={path}
                                  render={props => <Component isModal={true} onClose={closeModal} {...props}/>}
                                  key={key}/>;
                })}
            </Switch>
        </div>

    </div>
}

export default withRouter(AppModal);
