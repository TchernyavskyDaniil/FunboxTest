import React from 'react';
import {Link} from 'react-router-dom';
import PointsEditor from './routes_editor_component';
import RoutesMap from './map_component';

export default class Level2Component extends React.Component {
  render () {
    return (
      <section className="level-two">
        <h1 className="level-two__header">Level 2</h1>
        <Link to="/" className="level-two__back link-button">Назад на главную</Link>
        <article>
          <h2>Редактор маршрутов</h2>
          <PointsEditor/>
          <RoutesMap/>
        </article>
      </section>
    );
  }
};
