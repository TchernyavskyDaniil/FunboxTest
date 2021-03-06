import React from 'react';
import {connect} from 'react-redux';
import {addNewPoint} from '../actions/index';
import {clearPoints} from '../actions/index';
import {removePoint} from '../actions/index';

const ENTER_KEYCODE = 13;

class PointsEditor extends React.Component {
  constructor (props) {
    super(props);

    this.state = {pointTitle: ''};
  }

  renderPoints () {
    return Object.values(this.props.pointsList).map((point) => {
      return (
        <li key={point.id} className="routes__point">
          {point.title}
          <button onClick={() => this.props.removePoint(point.id)}>Удалить</button>
        </li>);
    });
  }

  inputKeydownHandler (event) {
    if (event.keyCode === ENTER_KEYCODE && this.state.pointTitle !== '') {
      const id = Object.keys(this.props.pointsList).length + 1;
      const title = this.state.pointTitle;
      const newPoint = {id, title};

      this.props.addNewPoint(newPoint);
      this.setState({pointTitle: ''});
    }
  }

  render () {
    return (
      <div className="routes__points-editor">
        <input type="text" placeholder="Введите название точки" value={this.state.pointTitle}
          onKeyDown={this.inputKeydownHandler.bind(this)}
          onChange={(event) => this.setState({pointTitle: event.target.value})}
          className="routes__input"
        />

        <button onClick={() => this.props.clearPoints()} className="routes__clear link-button link-button--lev-2">
          Сбросить все точки
        </button>
        <ul className="routes__points-list">
          {this.renderPoints()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    pointsList: state.pointsList
  };
};

export default connect(mapStateToProps, {addNewPoint, clearPoints, removePoint})(PointsEditor);
