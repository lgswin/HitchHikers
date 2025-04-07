import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile: React.FC = () => {
  const { user } = useAuth();

  const userInfo = {
    name: user?.attributes?.name || user?.username || 'User',
    email: user?.attributes?.email || 'user@example.com',
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Profile</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-gray-900">{userInfo.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-gray-900">{userInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 