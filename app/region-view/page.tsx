"use client";
import { Navbar } from '../../src/components/ui/navbar';
import { Footer } from '../../src/components/ui/footer';
import { BarChart } from '../../src/components/ui/bar-chart';
import { BubbleMap } from '../../src/components/ui/bubble-map';

const regionalPerformance = [
  {
    region: "Dubai",
    country: "UAE",
    impressions: 73294,
    clicks: 2532,
    conversions: 235,
    spend: 1089.32,
    revenue: 102285.6,
    lat: 25.276987,
    lng: 55.296249,
  },
  {
    region: "Sharjah",
    country: "UAE",
    impressions: 36647,
    clicks: 1266,
    conversions: 120,
    spend: 654.12,
    revenue: 50234.8,
    lat: 25.346255,
    lng: 55.420931,
  },
  // Add more regions/cities as needed
];

export default function RegionView() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Navbar />
      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12">
          <div className="px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold">
                Region View
              </h1>
            </div>
          </div>
        </section>
        <div className="flex-1 p-4 lg:p-6 overflow-y-auto space-y-8">
          <BarChart
            title="Spend by Region"
            data={regionalPerformance.map(region => ({
              label: region.region,
              value: region.spend,
              color: '#3b82f6'
            }))}
            formatValue={value => `$${value.toLocaleString()}`}
          />
          <BarChart
            title="Revenue by Region"
            data={regionalPerformance.map(region => ({
              label: region.region,
              value: region.revenue,
              color: '#f472b6'
            }))}
            formatValue={value => `$${value.toLocaleString()}`}
          />
          <BubbleMap
            data={regionalPerformance.map(region => ({
              city: region.region,
              lat: region.lat,
              lng: region.lng,
              value: region.revenue // or region.spend, depending on what you want to visualize
            }))}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
