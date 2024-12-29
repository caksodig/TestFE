import React from 'react';

const Appointments = () => {
    const appointments = [
        {
            name: 'Esther Howard',
            specialty: 'Poly dental',
            time: '09:40',
            avatar: '../public/avatar4.png',
        },
        {
            name: 'Arlene McCoy',
            specialty: 'Psychiatrist',
            time: '09:40',
            avatar: '../public/avatar3.png'
        },
        {
            name: 'Guy Hawkins',
            specialty: 'Internist',
            time: '09:40',
            avatar: '../public/avatar2.png'
        },
        {
            name: 'Courtney Henry',
            specialty: 'Opthalmologist',
            time: '09:40',
            avatar: '../public/avatar1.png'
        },
        {
            name: 'Annette Black',
            specialty: 'Neurologist',
            time: '09:40',
            avatar: '../public/avatar.png'
        }
    ];

    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Appointment</h2>
            </div>
            <div className="space-y-4">
                {appointments.map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <img
                                src={appointment.avatar}
                                alt={appointment.name}
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="font-medium">{appointment.name}</p>
                                <p className="text-sm text-gray-500">{appointment.specialty}</p>
                            </div>
                        </div>
                        <div className="text-gray-500">
                            <span>Today</span>
                            <p>{appointment.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appointments;