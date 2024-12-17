import React from 'react';

function Private() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Private Dashboard</h1>
      <p className="text-gray-600">
        Welcome to your private dashboard. This content is only visible to authenticated users.
      </p>
    </div>
  );
}

export default Private;