import React from 'react';
import {Link} from 'react-router-dom';

export default class IndexComponent extends React.Component {
  render () {
    return (
      <section className="start-page">
        <h1 className="start-page__header">Выполненное тестовое задание для&nbsp;FunBox</h1>
        <p className="start-page__info">Для перехода к Level 1 или Level 2 нажмите соответствующую кнопку:</p>
        <div className="start-page__links-container">
          <Link to="/level1" className="start-page__link link-button link-button--lev-1">Level I</Link>
          <Link to="/level2" className="start-page__link link-button link-button--lev-2">Level II</Link>
        </div>
      </section>
    );
  }
}
