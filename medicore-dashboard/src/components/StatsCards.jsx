import React from 'react';
import { Users, Stethoscope, Calendar, Bed } from 'lucide-react';

const StatsCards = () => {
    const stats = [
        {
            title: 'Overall visitor',
            value: '1,478',
            change: '+15%',
            icon: Users,
            positive: true
        },
        {
            title: 'Total doctors',
            value: '210',
            change: '-2.5%',
            icon: Stethoscope,
            positive: false
        },
        {
            title: 'Book appointment',
            value: '321',
            change: '+3.5%',
            icon: Calendar,
            positive: true
        },
        {
            title: 'Room availability',
            value: '213/335',
            change: '+1.5%',
            icon: Bed,
            positive: true
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">{stat.title}</p>
                            <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
                            <div className="flex items-center mt-2">
                                <span className="text-sm mr-2">Compare with last month</span>
                                <span className={`text-sm ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                        <div className="text-gray-400">
                            <stat.icon size={24} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;