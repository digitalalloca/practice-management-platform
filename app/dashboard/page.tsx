'use client';

import { Calendar, Users, DollarSign, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      name: 'Total Clients',
      value: '248',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'Appointments Today',
      value: '12',
      change: '+3',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      name: 'Revenue (MTD)',
      value: '$12,450',
      change: '+18%',
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    {
      name: 'Growth',
      value: '23%',
      change: '+5%',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  const upcomingAppointments = [
    { time: '9:00 AM', client: 'Sarah Johnson', service: 'Massage Therapy', practitioner: 'Dr. Smith' },
    { time: '10:30 AM', client: 'Mike Brown', service: 'Physiotherapy', practitioner: 'Dr. Jones' },
    { time: '2:00 PM', client: 'Emily Davis', service: 'Consultation', practitioner: 'Dr. Smith' },
    { time: '3:30 PM', client: 'James Wilson', service: 'Follow-up', practitioner: 'Dr. Lee' },
  ];

  const recentClients = [
    { name: 'Alice Cooper', lastVisit: '2 days ago', status: 'Active' },
    { name: 'Bob Martin', lastVisit: '1 week ago', status: 'Active' },
    { name: 'Carol White', lastVisit: '2 weeks ago', status: 'Inactive' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                <p className="mt-2 text-sm text-green-600">{stat.change} from last month</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Upcoming Appointments */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Appointments</h2>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-sm font-medium text-primary-600">{appointment.time}</div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{appointment.client}</div>
                    <div className="text-xs text-gray-500">{appointment.service}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">{appointment.practitioner}</div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full btn btn-secondary">View All Appointments</button>
        </div>

        {/* Recent Clients */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Clients</h2>
          <div className="space-y-4">
            {recentClients.map((client, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-medium">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{client.name}</div>
                    <div className="text-xs text-gray-500">Last visit: {client.lastVisit}</div>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  client.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {client.status}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full btn btn-secondary">View All Clients</button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="btn btn-primary">New Appointment</button>
          <button className="btn btn-secondary">Add Client</button>
          <button className="btn btn-secondary">Create Invoice</button>
          <button className="btn btn-secondary">Add Note</button>
        </div>
      </div>
    </div>
  );
}