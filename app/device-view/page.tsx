"use client";
import { Navbar } from '../../src/components/ui/navbar';
import { Footer } from '../../src/components/ui/footer';
import BarChart from '../../src/components/ui/bar-chart';
import { Table } from '../../src/components/ui/table';

const devicePerformance = [
    {
        device: "Mobile",
        impressions: 183236,
        clicks: 6329,
        conversions: 587,
        spend: 2723.29,
        revenue: 255714,
        ctr: 3.45,
        conversion_rate: 9.27,
        percentage_of_traffic: 75,
    },
    {
        device: "Desktop",
        impressions: 48863,
        clicks: 1688,
        conversions: 156,
        spend: 726.21,
        revenue: 68190.4,
        ctr: 3.45,
        conversion_rate: 9.24,
        percentage_of_traffic: 25,
    },
];

export default function DeviceView() {
    return (
        <div className="flex h-screen bg-gray-900">
            <Navbar />
            <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
                <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12">
                    <div className="px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-5xl font-bold">
                                Device View
                            </h1>
                            <p className="mt-2 text-lg text-gray-300">
                                Compare campaign performance on Desktop vs Mobile
                            </p>
                        </div>
                    </div>
                </section>
                <div className="flex-1 p-4 lg:p-6 overflow-y-auto space-y-8">
                    <BarChart
                        title="Spend & Revenue by Device"
                        data={[
                            { label: 'Mobile Spend', value: devicePerformance[ 0 ].spend, color: '#3b82f6' },
                            { label: 'Mobile Revenue', value: devicePerformance[ 0 ].revenue, color: '#f472b6' },
                            { label: 'Desktop Spend', value: devicePerformance[ 1 ].spend, color: '#3b82f6' },
                            { label: 'Desktop Revenue', value: devicePerformance[ 1 ].revenue, color: '#f472b6' },
                        ]}
                        formatValue={value => `$${value.toLocaleString()}`}
                    />
                    <Table
                        columns={[
                            { key: 'device', header: 'Device' },
                            { key: 'impressions', header: 'Impressions' },
                            { key: 'clicks', header: 'Clicks' },
                            { key: 'conversions', header: 'Conversions' },
                            { key: 'spend', header: 'Spend' },
                            { key: 'revenue', header: 'Revenue' },
                            { key: 'ctr', header: 'CTR' },
                            { key: 'conversion_rate', header: 'Conversion Rate' },
                            { key: 'percentage_of_traffic', header: '% of Traffic' },
                        ]}
                        data={devicePerformance}
                    />
                </div>
                <Footer />
            </div>
        </div>
    );
}