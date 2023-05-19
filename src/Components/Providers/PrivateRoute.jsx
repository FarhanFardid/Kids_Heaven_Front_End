import  { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import CircularProgress from '@mui/material/CircularProgress';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();

    const {user,loading} = useContext(AuthContext);

    if(loading){

 return <div className='p-10 text-center'> <CircularProgress className='' /></div>
    }

    if(user){
        return children
    }
    else {
          return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
    }
  
    
};

export default PrivateRoute;