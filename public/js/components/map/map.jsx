import React, {useState} from 'react';
import {Map, Marker, InfoWindow} from 'google-maps-react';

export default function Maps(props) {
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  let onMarkerClick = (props, marker, e) => {
    setShowingInfoWindow(true);
    setActiveMarker(marker);
    setSelectedPlace(props);
  };

  let onMapClicked = props => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '100%',
      }}
    >
      <Map
        google={window.google}
        zoom={14}
        disableDefaultUI={true}
        center={{
          lat: props.currentLatitude,
          lng: props.currentLongitude,
        }}
        onClick={onMapClicked}
      >
        {props.campSites.map((site, index) => {
          return (
            <Marker
              title={site.name}
              key={Math.random() + 1}
              id={Math.random()}
              position={site.coordinates}
              onClick={onMarkerClick}
              notes={site.notes}
            ></Marker>
          );
        })}

        <InfoWindow
          visible={showingInfoWindow}
          openWindow={showingInfoWindow}
          position={selectedPlace.position}
        >
          <div>
            <h1>{selectedPlace.title}</h1>
            <p>{selectedPlace.notes}</p>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
}
