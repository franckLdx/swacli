import * as React from 'react';

interface OwnProps {
  id: string;
}

const Film: React.SFC<OwnProps> = ({ id }) => (<div>Film = {id}</div>);

export default Film;