import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import Films from './films';

const router: React.SFC<{}> = () => (
  <Switch>
    <Route exact={true} path='/' component={Films} />
    <Route exact={true} path='/films' component={Films} />
  </Switch>
);

export default router;