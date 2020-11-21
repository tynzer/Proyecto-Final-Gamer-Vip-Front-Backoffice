import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest  }) => {
   const isAuthenticated = JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('userId'))

  return isAuthenticated ? (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
//en component: es por defecto el nombre de los que se pasa en routes, se cambia el nombre porque tiene que ser mayuscula siempre los componentes
   
<Route {...rest} render={rest  => (

      <Component {...rest} />

    )} />) : (
      <Redirect to={{ pathname: '/login' }} />
    );
}

export default ProtectedRoute;

/* const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return loggedIn ? <Comp {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};
 */


/* return <Route render={props => {
    if (!this.props.get.isLogin) {
        return <Redirect to="/login" />;
    } else {
      return <ChildComponent {...props}  />
    }
  }} />

  import React from "react";
  import { Redirect, Route, useLocation } from "react-router-dom";
  import { fakeAuth } from './Login';

  const PrivateRoute = ({ component: Component, ...rest }) => {


    return (
      <Route {...rest}>
        {fakeAuth.isAuthenticated === true ?
          <Component />
        :
          <Redirect to={{ pathname: "/login0"}} />
        }
      </Route>
    );
  };

  export default PrivateRoute;

*/



