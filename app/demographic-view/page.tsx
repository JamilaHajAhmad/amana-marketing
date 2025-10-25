import { Navbar } from '../../src/components/ui/navbar';
import { CardMetric } from '../../src/components/ui/card-metric';
import { Footer } from '../../src/components/ui/footer';
import { Users, TrendingUp, Target } from 'lucide-react';
import { BarChart } from '../../src/components/ui/bar-chart';
import { Table } from '../../src/components/ui/table';

const maleMetrics = [
  { label: 'Total Clicks by Males', value: 1200, icon: <Users /> },
  { label: 'Total Spend by Males', value: '$8,500', icon: <TrendingUp /> },
  { label: 'Total Revenue by Males', value: '$15,200', icon: <Target /> },
];

const femaleMetrics = [
  { label: 'Total Clicks by Females', value: 950, icon: <Users /> },
  { label: 'Total Spend by Females', value: '$7,100', icon: <TrendingUp /> },
  { label: 'Total Revenue by Females', value: '$13,800', icon: <Target /> },
];

const spendByAge = [
  { ageGroup: '18-24', spend: 2500, revenue: 4000 },
  { ageGroup: '25-34', spend: 3500, revenue: 6000 },
  { ageGroup: '35-44', spend: 2000, revenue: 3200 },
];

const malePerformance = [
  { ageGroup: '18-24', impressions: 10000, clicks: 400, conversions: 50, ctr: '4%', conversionRate: '12.5%' },
  { ageGroup: '25-34', impressions: 12000, clicks: 500, conversions: 60, ctr: '4.2%', conversionRate: '12%' },
  { ageGroup: '35-44', impressions: 8000, clicks: 300, conversions: 40, ctr: '3.75%', conversionRate: '13.3%' },
];

const femalePerformance = [
  { ageGroup: '18-24', impressions: 9000, clicks: 350, conversions: 45, ctr: '3.9%', conversionRate: '12.8%' },
  { ageGroup: '25-34', impressions: 11000, clicks: 420, conversions: 55, ctr: '3.8%', conversionRate: '13.1%' },
  { ageGroup: '35-44', impressions: 7000, clicks: 280, conversions: 35, ctr: '4%', conversionRate: '12.5%' },
];

export default function DemographicView() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12">
          <div className="px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold">
                Demographic View
              </h1>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-6 overflow-y-auto space-y-8">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maleMetrics.map((metric) => (
              <CardMetric
                key={metric.label}
                title={metric.label}
                value={metric.value}
                icon={metric.icon}
              />
            ))}
            {femaleMetrics.map((metric) => (
              <CardMetric
                key={metric.label}
                title={metric.label}
                value={metric.value}
                icon={metric.icon}
              />
            ))}
          </div>

          {/* Bar Graphs */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Spend & Revenue by Age Group</h2>
            <BarChart
              title="Spend & Revenue by Age Group"
              data={[
                ...spendByAge.map(group => ({
                  label: `${group.ageGroup} Spend`,
                  value: group.spend,
                  color: '#3b82f6'
                })),
                ...spendByAge.map(group => ({
                  label: `${group.ageGroup} Revenue`,
                  value: group.revenue,
                  color: '#f472b6'
                }))
              ]}
              formatValue={(value) => `$${value.toLocaleString()}`}
            />
          </div>

          {/* Performance Tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Male Age Groups</h3>
              <Table
                columns={[
                  { key: 'ageGroup', header: 'Age Group' },
                  { key: 'impressions', header: 'Impressions' },
                  { key: 'clicks', header: 'Clicks' },
                  { key: 'conversions', header: 'Conversions' },
                  { key: 'ctr', header: 'CTR' },
                  { key: 'conversionRate', header: 'Conversion Rate' },
                ]}
                data={malePerformance}
              />
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Female Age Groups</h3>
              <Table
                columns={[
                  { key: 'ageGroup', header: 'Age Group' },
                  { key: 'impressions', header: 'Impressions' },
                  { key: 'clicks', header: 'Clicks' },
                  { key: 'conversions', header: 'Conversions' },
                  { key: 'ctr', header: 'CTR' },
                  { key: 'conversionRate', header: 'Conversion Rate' },
                ]}
                data={femalePerformance}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
