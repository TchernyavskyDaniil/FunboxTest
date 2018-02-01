import React from 'react';
import {connect} from 'react-redux';
import {YMaps, Map, Placemark, Polyline} from 'react-yandex-maps';

const mapState = {center: [55.755, 37.622], zoom: 12};

class RoutesMap extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      placemarksCoords: {},
      placemarkElements: {},
      currentCenter: mapState.center
    };
  }

  componentWillReceiveProps (nextProps) {
    const {pointsList} = nextProps;
    const {placemarkElements} = this.state;
    const center = [...this.state.currentCenter];

    if (Object.keys(this.props.pointsList).length > Object.keys(nextProps.pointsList).length) {
      this.updatePlacemarks(this.props.pointsList, nextProps.pointsList);
    }

    if (Object.keys(pointsList).length === 0) {
      this.setState({placemarkElements: {}, placemarksCoords: {}});
      return;
    }

    for (let pointid in pointsList) {
      const point = pointsList[pointid];

      if (this.state.placemarkElements.hasOwnProperty(pointid)) {
        continue;
      }

      placemarkElements[point.id] = (
        <Placemark key={point.id}
          geometry={{type: 'Point', coordinates: center}}
          options={{preset: 'islands#blueCircleDotIcon', draggable: true}}
          properties={{hintContent: point.title}}
          onDragEnd={(event) => this.onGeometryChange(event, point.id)}
        />
      );
      this.updateCoords(placemarkElements[point.id]);
    }

    this.setState({placemarkElements});
  }

  updatePlacemarks (oldPoints, newPoints) {
    const oldIds = Object.keys(oldPoints);
    const newIds = Object.keys(newPoints);
    const {placemarkElements, placemarksCoords} = this.state;

    const additionalId = oldIds.filter((id) => {
      return (!newIds.includes(id));
    });
    delete placemarkElements[additionalId];
    delete placemarksCoords[additionalId];
    this.setState({placemarkElements, placemarksCoords});
  }

  updateCoords (placemark) {
    const placemarksCoords = Object.assign({}, this.state.placemarksCoords);

    placemarksCoords[placemark.key] = placemark.props.geometry.coordinates;
    this.setState({placemarksCoords});
  }

  onGeometryChange ({originalEvent}, id) {
    const placemarksCoords = Object.assign({}, this.state.placemarksCoords);

    placemarksCoords[id] = originalEvent.target.geometry.getCoordinates();
    this.setState({placemarksCoords});
  }

  onActionEnd ({originalEvent}) {
    this.setState({currentCenter: originalEvent.map.getCenter()});
  }

  renderLine () {
    if (Object.keys(this.state.placemarksCoords).length >= 1) {
      return (
        <Polyline
          geometry={{coordinates: Object.values(this.state.placemarksCoords)}}
          options={{ strokeColor: '#000000', strokeWidth: 1, strokeOpacity: 0.7}}
        />
      );
    }

    return '';
  }

  render () {
    return (
      <YMaps>
        <div className="routes__map">
          <Map state={mapState} width={500} heigt={400} onActionEnd={(event) => this.onActionEnd(event)}>
            {Object.values(this.state.placemarkElements)}
            {this.renderLine()}
          </Map>
        </div>
      </YMaps>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    pointsList: state.pointsList
  };
};

export default connect(mapStateToProps)(RoutesMap);
