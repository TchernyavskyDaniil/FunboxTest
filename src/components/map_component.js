import React from 'react';
import {connect} from 'react-redux';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const mapState = {center: [55.755, 37.622], zoom: 12}; //55.755412, 37.621595

class RoutesMap extends React.Component {
  addPlacemark () {
    const points = this.props.pointsList;

    return Object.values(points).map((point) => {
      return (
        <Placemark key={point.id}
          geometry={{type: 'Point', coordinates: mapState.center}}
          options={{preset: 'islands#blueCircleDotIcon', draggable: true}}
          properties={{hintContent: point.title}}
        />
      );
    });
  }

  render () {
    return (
      <YMaps>
        <div>
          <Map state={mapState}>
            {this.addPlacemark()}
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
