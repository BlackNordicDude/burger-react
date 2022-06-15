import { useSelector } from "react-redux"
import { Route, Redirect, useLocation } from "react-router-dom";
import { Preloader } from "../preloader/preloader";

const ProtectedRoute = ({onlyUnAuth = false, ...rest}) => {
    const isAuthChecked = useSelector(state => state.user.isAuthChecked);
    const user = useSelector(state => state.user.data);
    const location = useLocation();

    if (!isAuthChecked) {
        return <Preloader />;
    } 

    if (onlyUnAuth && user) {
        const { from } = location.state || { from: {pathname: '/'} };
        return <Redirect to={ from } />
    }

    if (!onlyUnAuth && !user) {
        return (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location },
                }}
            />
        )
    }

    return <Route {...rest} />
}

export default ProtectedRoute;