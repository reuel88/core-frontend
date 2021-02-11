import AppBreadcrumbs from "../AppBreadcrumbs/AppBreadcrumbs";
import routes from "../../routes/routes";

const PageBreadcrumbs = ({match}) => {
    const crumbs = routes
        .filter(({path}) => match.path.includes(path))
        .map(({path, ...rest}) => ({
            path: Object.keys(match.params).length
                ? Object.keys(match.params).reduce(
                    (path, param) =>
                        path.replace(`:${param}`, match.params[param]),
                    path
                )
                : path,
            ...rest
        }));

    return <AppBreadcrumbs crumbs={crumbs}/>;
}
export default PageBreadcrumbs;