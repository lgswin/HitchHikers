import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Please log in to view your profile</h2>
        </div>
      </div>
    );
  }

  // Dummy data for profile
  const profileData = {
    name: user?.signInDetails?.loginId || 'User',
    email: user?.signInDetails?.loginId || 'user@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Toronto, ON',
    joinDate: 'January 2024',
    totalRides: 12,
    rating: 4.8,
    bio: 'I love traveling and meeting new people. Always up for a good conversation during rides!'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-3xl text-gray-600">
              {profileData.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{profileData.name}</h1>
            <p className="text-gray-600">{profileData.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Phone</h3>
              <p className="text-gray-800">{profileData.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Location</h3>
              <p className="text-gray-800">{profileData.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Member Since</h3>
              <p className="text-gray-800">{profileData.joinDate}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Total Rides</h3>
              <p className="text-gray-800">{profileData.totalRides}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Rating</h3>
              <p className="text-gray-800">{profileData.rating} / 5.0</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Bio</h3>
          <p className="text-gray-800">{profileData.bio}</p>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Edit Profile
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 