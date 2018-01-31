import React from 'react';
import {connect} from 'react-redux';
import {addNewPoint} from '../actions/index';

class RoutesEditor extends React.Component {
  renderPoints () {
    return this.props.pointsList.map((point) => {
      return <li key={point.id}>{point.title}</li>;
    });
  }

  buttonClickHandler () {
    const pointId = this.props.pointsList.length + 1;
    const newPoint = {
      id: pointId,
      title: `Точка маршрута ${pointId}`
    };

    this.props.addNewPoint(newPoint);
  }

  render () {
    return (
      <div>
        <button onClick={this.buttonClickHandler.bind(this)}>Добавить точку</button>
        <ul>
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

export default connect(mapStateToProps, {addNewPoint})(RoutesEditor);
