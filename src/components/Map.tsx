
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAP_CONFIG, type Coordinates } from '@/config/mapConfig';

interface MapProps {
  center?: Coordinates;
  zoom?: number;
  markerPosition?: Coordinates;
}

export const Map = ({
  center = MAP_CONFIG.defaultCenter,
  zoom = MAP_CONFIG.defaultZoom,
  markerPosition = MAP_CONFIG.defaultCenter,
}: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    // Initialize map
    mapboxgl.accessToken = MAP_CONFIG.token;
    
    mapInstance.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAP_CONFIG.style,
      center: [center.lng, center.lat],
      zoom,
    });

    // Add navigation controls
    mapInstance.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker
    marker.current = new mapboxgl.Marker()
      .setLngLat([markerPosition.lng, markerPosition.lat])
      .addTo(mapInstance.current);

    // Cleanup
    return () => {
      mapInstance.current?.remove();
    };
  }, [center, zoom, markerPosition]);

  // Update marker position if it changes
  useEffect(() => {
    if (marker.current && markerPosition) {
      marker.current.setLngLat([markerPosition.lng, markerPosition.lat]);
    }
  }, [markerPosition]);

  return (
    <div ref={mapContainer} className="w-full h-full rounded-lg" />
  );
};
