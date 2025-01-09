import { useTranslation } from 'react-i18next';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { getAssetPath } from '../../utils/assetPath';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/icons/marker-icon-2x.png',
  iconUrl: '/icons/marker-icon.png',
  shadowUrl: '/icons/marker-shadow.png',
});

function Map() {
  const { t } = useTranslation();

  const locations = [
    {
      id: 1,
      name: 'Saskatchewan',
      coordinates: [52.9399, -106.4509],
      distance: 'À 3,300km de Québec',
      markers: [
        { lat: 53.1, lng: -106.2, type: 'activity1' },
        { lat: 53.2, lng: -106.3, type: 'activity2' },
        { lat: 53.0, lng: -106.4, type: 'activity3' },
      ],
    },
    {
      id: 2,
      name: 'Nunavik',
      coordinates: [61.0485, -69.8168],
      distance: 'À 1,300km de Québec',
      markers: [
        { lat: 61.1, lng: -69.7, type: 'activity1' },
        { lat: 61.2, lng: -69.6, type: 'activity2' },
        { lat: 61.0, lng: -69.9, type: 'activity3' },
      ],
    },
    {
      id: 3,
      name: 'Quebec',
      coordinates: [46.8139, -71.208],
      distance: 'Quebec',
      markers: [
        { lat: 47.0, lng: -71.0, type: 'activity1' },
        { lat: 46.9, lng: -71.1, type: 'activity2' },
        { lat: 46.8, lng: -71.3, type: 'activity3' },
      ],
    },
  ];

  const activityIcons = {
    activity1: L.icon({
      iconUrl: getAssetPath('icons/activity1-marker.svg'),
      iconSize: [32, 32],
    }),
    activity2: L.icon({
      iconUrl: '/icons/activity2-marker.svg',
      iconSize: [32, 32],
    }),
    activity3: L.icon({
      iconUrl: '/icons/activity3-marker.svg',
      iconSize: [32, 32],
    }),
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-primary mb-8 text-center text-4xl font-bold">
          {t('map.title')}
        </h2>

        {/* Activity Filters */}
        <div className="mb-8 flex justify-center space-x-4">
          <button className="border-primary text-primary hover:bg-primary rounded-full border px-6 py-2 hover:text-white">
            <img
              src="/icons/map/Adventure.svg"
              alt=""
              className="mr-2 inline-block h-5 w-5"
            />
            {t('map.activity1')}
          </button>
          <button className="border-primary text-primary hover:bg-primary rounded-full border px-6 py-2 hover:text-white">
            <img
              src="/icons/map/Fishing.svg"
              alt=""
              className="mr-2 inline-block h-5 w-5"
            />
            {t('map.activity2')}
          </button>
          <button className="border-primary text-primary rounded-full border px-6 py-2 hover:bg-[#FF5B2E] hover:text-white">
            <img
              src="/icons/map/Hunting.svg"
              alt=""
              className="mr-2 inline-block h-5 w-5"
            />
            {t('map.activity3')}
          </button>
        </div>

        {/* Maps Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <div key={location.id} className="overflow-hidden rounded-lg">
              <div className="relative mb-2">
                <MapContainer
                  center={location.coordinates}
                  zoom={8}
                  className="h-[300px] w-full"
                  zoomControl={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  />
                  <ZoomControl position="bottomright" />

                  {location.markers.map((marker, index) => (
                    <Marker
                      key={index}
                      position={[marker.lat, marker.lng]}
                      icon={activityIcons[marker.type]}
                    >
                      <Popup>{marker.type}</Popup>
                    </Marker>
                  ))}
                </MapContainer>

                {/* Location Label */}
                <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 shadow-md">
                  <img
                    src={`/icons/${location.name.toLowerCase()}.svg`}
                    alt=""
                    className="mr-2 inline-block h-5 w-5"
                  />
                  <span className="font-semibold">{location.name}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{location.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Map;
