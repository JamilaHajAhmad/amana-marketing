"use client";
import React from 'react';
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type BubbleMapProps = {
    data: { city: string; lat: number; lng: number; value: number }[];
};

export const BubbleMap: React.FC<BubbleMapProps> = ({ data }) => {
    // Calculate max value for scaling
    const maxValue = Math.max(...data.map(d => d.value));

    // Calculate center as the average lat/lng of all cities
    const avgLat =
        data.length > 0
            ? data.reduce((sum, city) => sum + city.lat, 0) / data.length
            : 25.276987;
    const avgLng =
        data.length > 0
            ? data.reduce((sum, city) => sum + city.lng, 0) / data.length
            : 55.296249;

    return (
        <div className="bg-gray-800 rounded-lg p-6 text-white">
            <h2 className="text-xl font-semibold mb-4">Campaigns Bubble Map</h2>
            <MapContainer
                center={[avgLat, avgLng]} // Center on average of all cities
                zoom={8}
                style={{ height: '400px', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data.map((city, idx) => (
                    <Circle
                        key={idx}
                        center={[city.lat, city.lng]}
                        radius={2000 + 8000 * (city.value / maxValue)} // Minimum radius 2000, scales up to 10,000
                        pathOptions={{ color: '#f472b6', fillColor: '#f472b6', fillOpacity: 0.5 }}
                    >
                        <Tooltip direction="center" offset={[0, 0]} opacity={1} permanent>
                            <span>{city.city}: ${city.value.toLocaleString()}</span>
                        </Tooltip>
                    </Circle>
                ))}
            </MapContainer>
        </div>
    );
};