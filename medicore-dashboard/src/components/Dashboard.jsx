import React from 'react';
import StatsCards from './StatsCards';
import PatientOverview from './PatientOverview';
import MedicineSupplies from './MedicineSupplies';
import TopClinics from './TopClinics';
import Calendar from './Calendar';
import Appointments from './Appointments';

const Dashboard = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="animate-fadeIn">
          <StatsCards />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 animate-slideIn lg:space-y-6">
            <PatientOverview />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="animate-slideIn h-full lg:flex lg:items-stretch">
                <MedicineSupplies className="lg:flex-1" />
              </div>
              <div className="animate-slideIn h-full lg:flex lg:items-stretch">
                <TopClinics className="lg:flex-1" />
              </div>
            </div>
          </div>
          <div className="space-y-6 animate-slideIn">
            <Calendar />
            <Appointments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
