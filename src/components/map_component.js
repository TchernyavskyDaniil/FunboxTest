import React from 'react';
import {connect} from 'react-redux';
import {YMaps, Map, Placemark, Polyline} from 'react-yandex-maps';

const mapState = {center: [55.755, 37.622], zoom: 12}; //55.755412, 37.621595

class RoutesMap extends React.Component {
  constructor () {
    super();
    this.state = {
      placemarks: {}
    };
  }

  renderPlacemarks () {
    const points = this.props.pointsList;

    const placemarks = Object.values(points).map((point) => {
      return (
        <Placemark key={point.id}
          geometry={{type: 'Point', coordinates: mapState.center}}
          options={{preset: 'islands#blueCircleDotIcon', draggable: true}}
          properties={{hintContent: point.title}}
          onGeometryChange={(event) => this.onGeometryChange(event, point.id)}
        />
      );
    });

    return placemarks;
  }

  onGeometryChange ({originalEvent}, id) {
    const placemarks = this.state.placemarks;

    placemarks[id] = originalEvent.target.geometry.getCoordinates();
    this.setState({placemarks});
  }

  renderLine () {
    if (Object.keys(this.state.placemarks).length >= 1) {
      return (
        <Polyline
          geometry={{coordinates: Object.values(this.state.placemarks)}}
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
          <Map state={mapState} width={500} heigt={400}>
            {this.renderPlacemarks()}
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
