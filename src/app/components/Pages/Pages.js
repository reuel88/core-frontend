import React from 'react';
import MicroFrontend from "../MicroFrontend";
import PageBreadcrumbs from "./PageBreadcrumbs";

const {
    REACT_APP_CREATE_REACT_APP_HOST: createReactApp_Host
} = process.env;

const CreateReactApp = (props) => {
    return (
        <React.Fragment>
            <PageBreadcrumbs {...props}/>
            <MicroFrontend {...props} host={createReactApp_Host} name="CreateReactApp"/>
        </React.Fragment>
    )
};

export
{
    CreateReactApp
};