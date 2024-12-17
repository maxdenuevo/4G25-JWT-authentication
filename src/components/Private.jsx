import React from 'react';
import { Activity, Users, DollarSign, TrendingUp } from 'lucide-react';

function Private() {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: Users, trend: '+12%', color: 'bg-blue-500' },
    { title: 'Revenue', value: '$12,345', icon: DollarSign, trend: '+8%', color: 'bg-green-500' },
    { title: 'Active Sessions', value: '432', icon: Activity, trend: '+5%', color: 'bg-purple-500' },
    { title: 'Growth', value: '22%', icon: TrendingUp, trend: '+2%', color: 'bg-indigo-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-green-500 text-sm font-medium">{stat.trend}</span>
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Activity className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">New user registration</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
          </div>
          {/* más actividadessss */}
        </div>
      </div>
    </div>
  );
}

export default Private;