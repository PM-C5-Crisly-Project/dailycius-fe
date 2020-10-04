import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';

export const AuthRouter = () => {
  return (
    <div >
      <div >
        <Switch>
          <Route
            exact
            path='/login'
            component={Login}
          />

          <Route
            exact
            path='/register'
            component={Register}
          />
          <Redirect to='/register'/>
        </Switch>
      </div>
    </div>
  )
}