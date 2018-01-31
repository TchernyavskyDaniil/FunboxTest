import React from 'react';
import {Link} from 'react-router-dom';

export default class Level1Component extends React.Component {
  render () {
    return (
      <section>
        <h1>Level 1</h1>
        <Link to="/">Назад на главную</Link>
      </section>
    );
  }
};
