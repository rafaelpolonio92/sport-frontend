import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { containerStyle } from './styles';

const NearbySkateparks = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [parks, setParks] = useState([]);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [selectedPark, setSelectedPark] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (!isLoaded) return;

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setUserLocation({ lat: latitude, lng: longitude });
      setCenter({
        lat: latitude,
        lng: longitude,
      });

      // Create a new Places service
      const service = new window.google.maps.places.PlacesService(document.createElement("div"));

      // Search for skateboarding spots
      service.nearbySearch(
        {
          location: { lat: latitude, lng: longitude },
          radius: 5000, // search within 5 kilometers
          keyword: "pista de skate",
        },
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setParks(results);
          }
        }
      );
    });
  }, [isLoaded]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <GoogleMap
      center={center}
      zoom={10}
      mapContainerStyle={containerStyle}
    >
      {userLocation && ( // Added
        <Marker
          position={userLocation}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Google's blue dot
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      )}

      {parks.map((park, index) => (
        <Marker
          key={index}
          position={{ lat: park.geometry.location.lat(), lng: park.geometry.location.lng() }}
          onClick={() => setSelectedPark(park)}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          position={{ lat: selectedPark.geometry.location.lat(), lng: selectedPark.geometry.location.lng() }}
          onCloseClick={() => setSelectedPark(null)}
        >
          <div>
            <h2>{selectedPark.name}</h2>
            <p>{selectedPark.vicinity}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default NearbySkateparks;
