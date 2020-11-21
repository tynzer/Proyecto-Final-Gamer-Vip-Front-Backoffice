import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ Component: Component, categorias, carousel, productos, ...rest }) => {
  const isAuthenticated = localStorage.getItem('login');
  return isAuthenticated ? (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page

    <Route {...rest} render={rest => (

      <Component categorias={categorias} carousel={carousel} productos={productos} {...rest} />

    )} />) : (
      <Redirect to={{ pathname: '/login' }} />
    );
}

export default ProtectedRoute;

/* const Component = this.props.component;
const isAuthenticated = localStorage.getItem('login');

return isAuthenticated ? (
    <Route {...this.props.params }>
  <Component /> </Route>
) : (
    <Redirect to={{ pathname: '/' }} />
);
}
}
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



