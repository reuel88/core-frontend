import PropTypes from 'prop-types';
import React from 'react';
import {Link} from "react-router-dom";
import './index.scss';

const AppBreadcrumbs = ({crumbs = []}) => {
    if (crumbs.length <= 1) {
        return null;
    }

    return (<nav className="app__breadcrumbs">
        <ol className="app__breadcrumbs-list">
            {crumbs.map(({name, path}, key) => {
                    return (<li className="app__breadcrumb-item" key={key}>
                        {key + 1 === crumbs.length ? (
                            <span className="app__crumb app__crumb--bold">
                            {name}
                        </span>
                        ) : (
                            <Link className="app__crumb" to={path}>
                                {name}
                            </Link>
                        )}
                    </li>)
                }
            )}
        </ol>

    </nav>);
}

AppBreadcrumbs.propTypes = {
    crumbs: PropTypes.array.isRequired
}

export default AppBreadcrumbs;