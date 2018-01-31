import React from 'react';
import {Link} from 'react-router-dom';
import PointsEditor from './routes_editor_component';
import RoutesMap from './map_component';

export default class Level2Component extends React.Component {
  render () {
    return (
      <section className="level-two">
        <h1 className="level-two__title">Level 2</h1>
        <Link to="/funboxtest" className="level-two__back link-button link-button--lev-2">Назад на главную</Link>
        <article className="level-two__map routes">
          <h2 className="routes__title">Редактор маршрутов</h2>
          <PointsEditor/>
          <RoutesMap/>
        </article>
      </section>
    );
  }
};
