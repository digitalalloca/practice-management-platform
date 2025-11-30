'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const appointments = [
    { id: 1, time: '9:00 AM', client: 'Sarah Johnson', service: 'Massage', practitioner: 'Dr. Smith', duration: 60 },
    { id: 2, time: '10:30 AM', client: 'Mike Brown', service: 'Physio', practitioner: 'Dr. Jones', duration: 45 },
    { id: 3, time: '2:00 PM', client: 'Emily Davis', service: 'Consultation', practitioner: 'Dr. Smith', duration: 30 },
    { id: 4, time: '3:30 PM', client: 'James Wilson', service: 'Follow-up', practitioner: 'Dr. Lee', duration: 30 },
  ];

  const timeSlots = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`);

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600 mt-1">Manage appointments and schedules</p>
        </div>
        <button className="btn btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          New Appointment
        </button>
      </div>

      {/* Calendar Controls */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-semibold text-gray-900">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="btn btn-secondary">Day</button>
            <button className="btn btn-primary">Week</button>
            <button className="btn btn-secondary">Month</button>
          </div>
        </div>
      </div>

      {/* Week View */}
      <div className="card p-0 overflow-hidden">
        <div className="grid grid-cols-8 border-b">
          <div className="p-4 bg-gray-50 border-r"></div>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="p-4 text-center bg-gray-50 border-r last:border-r-0">
              <div className="text-sm font-medium text-gray-600">{day}</div>
              <div className="text-lg font-semibold text-gray-900 mt-1">
                {new Date().getDate() + index}
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-y-auto max-h-[600px]">
          {timeSlots.map((time) => (
            <div key={time} className="grid grid-cols-8 border-b">
              <div className="p-4 text-sm text-gray-600 bg-gray-50 border-r">
                {time}
              </div>
              {[...Array(7)].map((_, dayIndex) => (
                <div
                  key={dayIndex}
                  className="p-2 border-r last:border-r-0 min-h-[80px] hover:bg-gray-50 cursor-pointer"
                >
                  {dayIndex === 0 && time === '9:00' && (
                    <div className="bg-blue-100 border-l-4 border-blue-500 p-2 rounded text-xs">
                      <div className="font-medium text-blue-900">Sarah Johnson</div>
                      <div className="text-blue-700">Massage Therapy</div>
                    </div>
                  )}
                  {dayIndex === 1 && time === '10:00' && (
                    <div className="bg-green-100 border-l-4 border-green-500 p-2 rounded text-xs">
                      <div className="font-medium text-green-900">Mike Brown</div>
                      <div className="text-green-700">Physiotherapy</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Today's Appointments */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Appointments</h2>
        <div className="space-y-3">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="text-sm font-medium text-primary-600 w-20">
                  {appointment.time}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{appointment.client}</div>
                  <div className="text-xs text-gray-500">
                    {appointment.service} • {appointment.duration} min
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600">{appointment.practitioner}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}