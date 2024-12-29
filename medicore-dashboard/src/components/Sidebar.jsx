import React, { useState } from 'react';
import {
    HomeIcon, CalendarIcon, ChevronDown,
    MessageSquareMore, BellIcon,
    BedIcon, PillIcon, UserIcon, StethoscopeIcon,
    SettingsIcon, HelpCircleIcon, MenuIcon, X,
    Search
} from 'lucide-react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [isTransactionOpen, setIsTransactionOpen] = useState(false);

    const menuItems = [
        { icon: HomeIcon, label: 'Dashboard' },
        { icon: CalendarIcon, label: 'Schedule' },
        {
            icon: ChevronDown,
            label: 'Transaction',
            isDropdown: true,
            subItems: [
                'All Transactions',
                'Pending',
                'Completed',
                'Cancelled'
            ]
        },
        { icon: MessageSquareMore, label: 'Message', notifications: 10 },
        { icon: BellIcon, label: 'Notification', notifications: 12 },
        {
            heading: 'MANAGEMENT',
            items: [
                { icon: BedIcon, label: 'Bedroom' },
                { icon: PillIcon, label: 'Medicine' },
                { icon: CalendarIcon, label: 'Appointment' },
                { icon: UserIcon, label: 'Patient' },
                { icon: StethoscopeIcon, label: 'Doctor' },
            ]
        },
        { icon: SettingsIcon, label: 'Settings' },
        { icon: HelpCircleIcon, label: 'Help & support' }
    ];

    return (
        <>

            {/* Mobile Menu Button */}
            <button button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg transition-colors duration-200 hover:bg-gray-100"
            >
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>

            {/* Overlay for mobile */}
            {
                isOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )
            }

            <div className={`
      fixed lg:static inset-y-0 left-0 z-40
      w-64 bg-white border-r border-gray-200
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      flex flex-col h-screen
    `}>
                {/* Logo */}
                <div className="p-4 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xl">M</span>
                    </div>
                    <span className="text-xl font-semibold">Medicore</span>
                </div>

                {/* Search Bar */}
                <div className="px-4 pb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto">
                    {menuItems.map((item, index) => (
                        item.heading ? (
                            <div key={index} className="px-4 mt-6">
                                <h3 className="text-xs font-semibold text-gray-500 mb-2">{item.heading}</h3>
                                {item.items.map((subItem, subIndex) => (
                                    <MenuItem
                                        key={subIndex}
                                        {...subItem}
                                        active={activeMenu === subItem.label}
                                        onClick={() => setActiveMenu(subItem.label)}
                                    />
                                ))}
                            </div>
                        ) : item.isDropdown ? (
                            <div key={index}>
                                <div
                                    onClick={() => setIsTransactionOpen(!isTransactionOpen)}
                                    className={`
                  flex items-center justify-between px-4 py-3 cursor-pointer
                  transition-colors duration-200
                  ${activeMenu === item.label ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}
                `}
                                >
                                    <div className="flex items-center space-x-3">
                                        <item.icon size={20} />
                                        <span>{item.label}</span>
                                    </div>
                                    <ChevronDown
                                        size={20}
                                        className={`transform transition-transform duration-200 ${isTransactionOpen ? 'rotate-180' : ''}`}
                                    />
                                </div>
                                {isTransactionOpen && (
                                    <div className="bg-gray-50 py-2">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <div
                                                key={subIndex}
                                                className="px-12 py-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200"
                                            >
                                                {subItem}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <MenuItem
                                key={index}
                                {...item}
                                active={activeMenu === item.label}
                                onClick={() => setActiveMenu(item.label)}
                            />
                        )
                    ))}
                </div>

                {/* User Profile */}
                <div className="p-4 border-t">
                    <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full bg-gray-200" src='../public/profile.png' alt="User" />
                        <div>
                            <div className="font-medium">Medicore</div>
                            <div className="text-sm text-gray-500">Admin</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const MenuItem = ({ icon: Icon, label, active, notifications, onClick }) => (
    <div
        onClick={onClick}
        className={`
      flex items-center space-x-3 px-4 py-3 cursor-pointer
      transition-all duration-200 ease-in-out
      hover:bg-blue-50 hover:text-blue-600
      ${active ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' : 'text-gray-700'}
    `}
    >
        <Icon size={20} />
        <span className="flex-1">{label}</span>
        {notifications && (
            <span className="px-2 py-0.5 text-xs bg-orange-100 text-orange-600 rounded-full">
                {notifications}
            </span>
        )}
    </div>
);



export default Sidebar;