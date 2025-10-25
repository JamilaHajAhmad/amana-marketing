import { Navbar } from '../../src/components/ui/navbar';
import { Footer } from '../../src/components/ui/footer';
import { LineChart } from '../../src/components/ui/line-chart';

const weeklyPerformance = [
  {
    week_start: "2024-10-01",
    week_end: "2024-10-07",
    impressions: 27418,
    clicks: 947,
    conversions: 88,
    spend: 407.49,
    revenue: 38262.93,
  },
  {
    week_start: "2024-10-08",
    week_end: "2024-10-14",
    impressions: 25096,
    clicks: 867,
    conversions: 80,
    spend: 372.99,
    revenue: 35022.89,
  },
  // Add more weeks as needed
];

export default function WeeklyView() {
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
                Weekly View
              </h1>
            </div>
          </div>
        </section>
        

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
          <LineChart
            data={weeklyPerformance.map(item => ({
              week: `${item.week_start} - ${item.week_end}`,
              spend: item.spend,
              revenue: item.revenue,
            }))}
          />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
