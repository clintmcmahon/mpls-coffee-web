import { useState, useCallback, useRef, useMemo } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import CoffeeShopDetail from "./CoffeeShopDetail";
import HoverInfo from "./HoverInfo";
import styles from "../styles/Map.module.css";

export default function MapComponent({ coffeeShops, userLocation, filters }) {
  const [viewState, setViewState] = useState({
    longitude: userLocation?.longitude || -93.265,
    latitude: userLocation?.latitude || 44.9778,
    zoom: 13,
  });
  const [selectedShop, setSelectedShop] = useState(null);
  const [hoveredShop, setHoveredShop] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef();

  const handleMarkerClick = useCallback((shop) => {
    setSelectedShop(shop);
  }, []);

  const handleMarkerHover = useCallback((shop, event) => {
    setHoveredShop(shop);
    setHoverPosition({ x: event.clientX, y: event.clientY });
  }, []);

  const handleMarkerLeave = useCallback(() => {
    setHoveredShop(null);
  }, []);

  const filteredShops = useMemo(() => {
    return coffeeShops.filter((shop) => {
      if (filters.openNow && !shop.isOpenNow) return false;
      if (filters.goodCoffee && !shop.isGood) return false;
      return true;
    });
  }, [coffeeShops, filters]);

  return (
    <div className={styles.mapWrapper} ref={mapRef}>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        <NavigationControl position="top-right" />

        {filteredShops.map((shop) => (
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
            <div
              className={`${styles.markerBtn} ${
                shop.isOpenNow ? styles.openNow : ""
              } ${shop.isGood ? styles.goodCoffee : ""}`}
              onMouseEnter={(e) => handleMarkerHover(shop, e)}
              onMouseLeave={handleMarkerLeave}
            >
              <FontAwesomeIcon icon={faMugSaucer} />
            </div>
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
      {hoveredShop && <HoverInfo shop={hoveredShop} position={hoverPosition} />}
    </div>
  );
}
