import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { AppActions, loadResource } from '../state';

interface OwnProps {
  id: string;
}

interface ConnectedProps {
  loadFilms: () => void;
}

class Films extends React.Component<OwnProps & ConnectedProps> {
  public componentDidMount() {
    this.props.loadFilms();
  }

  public render() {
    return (<div>Films List</div>);
  }
}

const mapDispatchToProps = (displatch: Dispatch<AppActions>) => ({
  loadFilms: () => { displatch(loadResource('FILMS')); }
});

export default connect(undefined, mapDispatchToProps)(Films);