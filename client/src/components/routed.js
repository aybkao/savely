import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

const Routed = () => {
  return (
    <div id="routed">
      <h1 id="savely_logo"><Link to="/" activeClassName="active">Routed</Link></h1>
    </div>
  )
};

export default Routed;
