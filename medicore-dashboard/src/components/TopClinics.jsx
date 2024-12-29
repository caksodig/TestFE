import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const TopClinics = () => {
    const data = [
        { name: 'Dental', value: 120, color: '#3B82F6' },
        { name: 'Internist', value: 249, color: '#EF4444' },
        { name: 'Neurologist', value: 165, color: '#10B981' }
    ];

    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Top 3 in-demand clinics</h2>
            </div>

            <div className="h-[300px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-2xl font-semibold">{total}</div>
                        <div className="text-gray-500 text-sm">This month</div>
                    </div>
                </div>
            </div>

            <div className="space-y-4 mt-6">
                {data.map((clinic, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: clinic.color }}
                            />
                            <span className="text-gray-600">{clinic.name}</span>
                        </div>
                        <span className="font-medium">{clinic.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopClinics;