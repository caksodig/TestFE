import React from 'react';

const MedicineSupplies = () => {
    const supplies = [
        { name: 'Parachetamol', stock: 140, change: -2.5 },
        { name: 'Anastrozole', stock: 123, change: 3.5 },
        { name: 'Amoxicillin', stock: 80, change: -2.5 },
        { name: 'Bisoprolol', stock: 60, change: 3.5 },
        { name: 'Clonidine', stock: 54, change: -2.5 }
    ];

    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Medicine supplies</h2>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="text-left text-gray-500">
                        <th className="pb-4">NAME</th>
                        <th className="pb-4">STOCK</th>
                        <th className="pb-4">LAST MONTH</th>
                    </tr>
                </thead>
                <tbody>
                    {supplies.map((item, index) => (
                        <tr key={index} className="border-t">
                            <td className="py-4">{item.name}</td>
                            <td className="py-4">{item.stock}</td>
                            <td className={`py-4 ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {item.change > 0 ? '+' : ''}{item.change}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedicineSupplies;