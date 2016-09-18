import React from 'react';
import {render} from 'react-dom';

export class App extends React.Component {
  render () {
    return <p> Hello laundes</p>;
  }
}

render(<App/>, document.getElementById('app'));
