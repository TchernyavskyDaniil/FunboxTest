import React from 'react';
import {Link} from 'react-router-dom';

export default class IndexComponent extends React.Component {
  render () {
    return (
      <section>
        <h1>Выполненное тестовое задание для FunBox</h1>
        <p>Для перехода к Level 1 или Level 2 нажмите соответствующую кнопку:</p>
        <div>
          <Link to="/level1">Level 1</Link>
          <Link to="/level2">Level 2</Link>
        </div>
      </section>
    );
  }
}
