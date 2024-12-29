import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
    const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const currentDate = new Date();

    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <ChevronLeft size={20} />
                    </button>
                    <h2 className="text-lg font-semibold">February 2024</h2>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {weekDays.map(day => (
                    <div key={day} className="text-center text-sm text-gray-500 font-medium py-2">
                        {day}
                    </div>
                ))}

                {Array.from({ length: 35 }, (_, i) => {
                    const date = i - 3; // Adjust starting point for February
                    const isCurrentMonth = date >= 1 && date <= 29;
                    const isToday = date === currentDate.getDate();

                    return (
                        <div
                            key={i}
                            className={`
                text-center py-2 rounded-lg
                ${isCurrentMonth ? 'hover:bg-gray-50 cursor-pointer' : 'text-gray-300'}
                ${isToday ? 'bg-blue-600 text-white' : ''}
              `}
                        >
                            {date > 0 ? date : ''}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;