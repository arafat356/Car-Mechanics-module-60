import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            ></Navigate>
          )
        }
      ></Route>
    </Routes>
  );
};

export default PrivateRoute;
