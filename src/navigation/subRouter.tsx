import * as React from 'react';
import { Route, RouteComponentProps, Switch } from "react-router-dom";


interface RecordParam {
  id: string;
}


interface Props {
  List: React.ComponentType<{}>
  Record: React.ComponentType<RecordParam>
}


type matchData = RouteComponentProps<RecordParam>;


const withRouter = ({ List, Record }: Props) => {

  const RoutedFilm = (matching: matchData) => {
    return (<Record id={matching.match.params.id} />)
  };

  return class extends React.Component<{}> {
    public render() {
      return (
        <Switch>
          <Route exact={true} path='/films/:id' render={RoutedFilm} />
          <Route path='/films' component={List} />
        </Switch>
      )
    };
  };

};


export default withRouter;