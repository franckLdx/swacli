import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { AppActions, loadResource } from './state';

interface Props {
  loadFilms: () => void;
}

class Films extends React.Component<Props> {
  public componentDidMount() {
    this.props.loadFilms();
  }

  public render() {
    return (<div>HELLO </div>);
  }
}


const mapDispatchToProps = (displatch: Dispatch<AppActions>) => ({
  loadFilms: () => { displatch(loadResource('FILMS')); }
});

export default connect(undefined, mapDispatchToProps)(Films);