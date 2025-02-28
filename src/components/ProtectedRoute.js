import {Navigate,Outlet} from 'react-router-dom';

const PrivateRoute=()=>{
    const loggedin=localStorage.getItem('isLoggedIn');
    return loggedin==="true"? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoute;