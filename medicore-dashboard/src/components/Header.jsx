import React from 'react';
import { Download, Plus } from 'lucide-react';
const Header = () => {
    return (
        <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-4 md:py-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <h1 className="text-2xl font-semibold pl-12 lg:pl-0">Welcome back, Darrell!👋</h1>
                        <div className="flex space-x-3">
                            <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-gray-700 
                        hover:bg-gray-50 transition-colors duration-200 transform hover:scale-105">
                                <Download size={20} />
                                <span className="hidden sm:inline">Export CSV</span>
                            </button>
                            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg
                        hover:bg-blue-700 transition-all duration-200 transform hover:scale-105
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                <Plus size={20} />
                                <span className="hidden sm:inline">Add new</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;