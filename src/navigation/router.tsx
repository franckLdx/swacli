import * as React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Films from '../films';

const Router: React.SFC<{}> = () => (
  <Switch>
    <Route exact={true} path='/' component={Films} />
    <Route path='/films' component={Films} />
    <Redirect to={'/'} />
  </Switch>
);

export default Router;