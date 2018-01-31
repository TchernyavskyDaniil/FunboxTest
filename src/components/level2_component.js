import React from 'react';
import {Link} from 'react-router-dom';

export default class Level2Component extends React.Component {
  render () {
    return (
      <section>
        <h1>Level 2</h1>
        <Link to="/">Назад на главную</Link>
      </section>
    );
  }
};
