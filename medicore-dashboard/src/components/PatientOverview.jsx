import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const PatientOverview = () => {
    const data = [
        { month: 'Jan', total: 700, hospitalized: 400, outpatient: 300 },
        { month: 'Feb', total: 500, hospitalized: 300, outpatient: 200 },
        { month: 'Mar', total: 600, hospitalized: 350, outpatient: 250 },
        { month: 'Apr', total: 400, hospitalized: 200, outpatient: 200 },
        { month: 'May', total: 700, hospitalized: 400, outpatient: 300 },
        { month: 'Jun', total: 800, hospitalized: 500, outpatient: 300 },
        { month: 'Jul', total: 600, hospitalized: 350, outpatient: 250 },
        { month: 'Aug', total: 700, hospitalized: 400, outpatient: 300 },
        { month: 'Sep', total: 900, hospitalized: 550, outpatient: 350 },
        { month: 'Oct', total: 800, hospitalized: 450, outpatient: 350 },
        { month: 'Nov', total: 700, hospitalized: 400, outpatient: 300 },
        { month: 'Dec', total: 900, hospitalized: 550, outpatient: 350 }
    ];

    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold">Patient overview</span>
                </div>
                <select className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Daily</option>
                </select>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                    <p className="text-gray-500 text-sm">Total patients</p>
                    <p className="text-2xl font-semibold">839</p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Avg. Hospitalized patients</p>
                    <p className="text-2xl font-semibold">283</p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Avg. Outpatient care</p>
                    <p className="text-2xl font-semibold">421</p>
                </div>
            </div>

            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            dx={-10}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                        <Legend
                            verticalAlign="top"
                            height={36}
                            iconType="circle"
                        />
                        <Bar
                            dataKey="total"
                            fill="#4F46E5"
                            radius={[4, 4, 0, 0]}
                        />
                        <Bar
                            dataKey="hospitalized"
                            fill="#60A5FA"
                            radius={[4, 4, 0, 0]}
                        />
                        <Bar
                            dataKey="outpatient"
                            fill="#93C5FD"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PatientOverview;