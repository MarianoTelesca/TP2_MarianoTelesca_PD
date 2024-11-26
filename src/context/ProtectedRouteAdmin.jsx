import { useLogin } from './loginContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRouteAdmin( {children} ) {
    const { logueado } = useLogin();

    if(logueado == "admin") {
        return children;
    } else {
        return <Navigate to="/" />;
    }

}

