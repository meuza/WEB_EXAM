import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Content } from '../Components';

class Basic extends React.Component {
  render() {
    return (
      <div>
          <div>-----------------------------</div>
          <button><a href="https://mysafeinfo.com/api/data?list=presidents&format=json">Get data</a></button>
          <div>-----------------------------</div>
        <button> Clear</button>

      </div>
    );
  }
}

export default Basic;
