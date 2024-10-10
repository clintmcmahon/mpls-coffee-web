import { useState, useCallback } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl";
import CoffeeShopDetail from "./CoffeeShopDetail";
import styles from "../styles/Map.module.css";

export default function MapComponent({ coffeeShops, userLocation }) {
  const [viewState, setViewState] = useState({
    longitude: userLocation?.longitude || -93.265,
    latitude: userLocation?.latitude || 44.9778,
    zoom: 13,
  });
  const [selectedShop, setSelectedShop] = useState(null);

  const handleMarkerClick = useCallback((shop) => {
    setSelectedShop(shop);
  }, []);

  return (
    <div className={styles.mapWrapper}>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        <NavigationControl position="top-right" />

        {coffeeShops.map((shop) => (
          <Marker
            key={shop.placeId}
            longitude={shop.longitude}
            latitude={shop.latitude}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              handleMarkerClick(shop);
            }}
          >
            <div className={styles.markerBtn}>☕</div>
          </Marker>
        ))}

        {userLocation && (
          <Marker
            longitude={userLocation.longitude}
            latitude={userLocation.latitude}
            anchor="bottom"
          >
            <div className={styles.userLocationMarker}>📍</div>
          </Marker>
        )}

        {selectedShop && (
          <Popup
            longitude={selectedShop.longitude}
            latitude={selectedShop.latitude}
            anchor="top"
            onClose={() => setSelectedShop(null)}
            closeButton={false}
            closeOnClick={false}
          >
            <CoffeeShopDetail
              shop={selectedShop}
              onClose={() => setSelectedShop(null)}
            />
          </Popup>
        )}
      </Map>
    </div>
  );
}
