
export const MAP_CONFIG = {
  defaultCenter: {
    lng: 18.0686,
    lat: 59.3293,
  },
  defaultZoom: 13,
  style: 'mapbox://styles/mapbox/light-v11',
  token: 'YOUR_MAPBOX_TOKEN',
} as const;

export type Coordinates = {
  lng: number;
  lat: number;
};
