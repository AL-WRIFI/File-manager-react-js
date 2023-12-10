import { shallowEqual, useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
 
    const { isAuthenticated  } = useSelector((state) =>({ 
        isAuthenticated : state.auth.isAuthenticated ,
       
      }),shallowEqual);

  const isUserLoggedIn = true; 

  return (
    <Route
      {...rest}
      element={isUserLoggedIn ? <Element /> : <Navigate to="/login" />}
    />
  );
};
