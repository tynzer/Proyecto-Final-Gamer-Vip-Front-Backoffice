import React from 'react'
import { Redirect, Route } from 'react-router-dom'

class ProtectedRoute extends React.Component {
    

    render() {
      
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('login');
       
        return isAuthenticated ? (
            <Route {...this.props.params }>
          <Component /> </Route>
        ) : (
            <Redirect to={{ pathname: '/' }} />
        );
    }
}

export default ProtectedRoute;
 

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



 