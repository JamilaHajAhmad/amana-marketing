"use client";
import React from 'react';
import {
    LineChart as ReLineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

type DataPoint = {
    week: string;
    spend: number;
    revenue: number;
};

type LineChartProps = {
    data: DataPoint[];
};

export const LineChart: React.FC<LineChartProps> = ({ data }) => (
    <div className="bg-gray-800 rounded-lg p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Spend & Revenue by Week</h2>
        <ResponsiveContainer width="100%" height={400}>
            <ReLineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="spend" stroke="#3b82f6" name="Spend" />
                <Line type="monotone" dataKey="revenue" stroke="#f472b6" name="Revenue" />
            </ReLineChart>
        </ResponsiveContainer>
    </div>
);