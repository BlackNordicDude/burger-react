import { useSelector } from "react-redux"
import { Route, Redirect, useLocation } from "react-router-dom";
import { Preloader } from "../preloader/preloader";
import { TLocationState } from "../../utils/types";

const ProtectedRoute = ({onlyUnAuth = false, ...rest}) => {
      // @ts-ignore: Unreachable code error
    const isAuthChecked = useSelector(state => state.user.isAuthChecked);
      // @ts-ignore: Unreachable code error
    const user = useSelector(state => state.user.data);
    const location = useLocation<TLocationState>();

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