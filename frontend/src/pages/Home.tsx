import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

interface ScheduleForm {
  departure: string;
  destination: string;
  date: string;
  time: string;
  availableSeats: number;
  luggageCount: number;
  details: string;
}

interface Schedule extends ScheduleForm {
  id: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

interface Location {
  lat: number;
  lng: number;
}

const Home = () => {
  const { isAuthenticated } = useAuth();
  const [formData, setFormData] = useState<ScheduleForm>({
    departure: '',
    destination: '',
    date: '',
    time: '',
    availableSeats: 1,
    luggageCount: 0,
    details: '',
  });

  const [locations, setLocations] = useState<{
    departure: Location | null;
    destination: Location | null;
  }>({
    departure: null,
    destination: null,
  });

  const [showMap, setShowMap] = useState(false);

  // Function to get coordinates from address using Google Geocoding API
  const getCoordinates = async (address: string): Promise<Location | null> => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=AIzaSyB78TpzN34nfS5Jn32rX4KH_gCB_tszQ_4`
      );
      const data = await response.json();
      if (data.results && data.results[0]) {
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lng };
      }
      return null;
    } catch (error) {
      console.error('Error getting coordinates:', error);
      return null;
    }
  };

  // Function to handle location search
  const handleSearchLocation = async (type: 'departure' | 'destination') => {
    const address = formData[type];
    if (address) {
      const coords = await getCoordinates(address);
      setLocations(prev => ({ ...prev, [type]: coords }));
    }
  };

  // Generate map URL
  const getMapUrl = () => {
    const baseUrl = 'https://www.google.com/maps/embed/v1/place';
    const apiKey = 'AIzaSyB78TpzN34nfS5Jn32rX4KH_gCB_tszQ_4';
    let center = '43.653226,-79.4194165'; // Default to Toronto

    if (locations.departure && locations.destination) {
      // Center map between departure and destination
      center = `${(locations.departure.lat + locations.destination.lat) / 2},${
        (locations.departure.lng + locations.destination.lng) / 2
      }`;
    } else if (locations.departure) {
      center = `${locations.departure.lat},${locations.departure.lng}`;
    } else if (locations.destination) {
      center = `${locations.destination.lat},${locations.destination.lng}`;
    }

    return `${baseUrl}?key=${apiKey}&q=${center}&zoom=12`;
  };

  // Dummy data for demonstration
  const [mySchedules] = useState<Schedule[]>([
    {
      id: '1',
      departure: 'Waterloo',
      destination: 'Toronto',
      date: '2024-03-25',
      time: '09:00',
      status: 'confirmed',
      availableSeats: 4,
      details: ''
    },
    {
      id: '2',
      departure: 'Kitchener',
      destination: 'Hamilton',
      date: '2024-03-26',
      time: '14:30',
      status: 'pending',
      availableSeats: 2,
      details: ''
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement schedule registration logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getStatusColor = (status: Schedule['status']) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-yellow-600 bg-yellow-100';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Hitchhikers
        </h1>
        <p className="text-xl text-gray-600">
          Your trusted platform for ride sharing
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Schedule Registration Box */}
        <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Register Your Ride Schedule</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="departure" className="block text-sm font-medium text-gray-700">
                Departure
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="departure"
                  name="departure"
                  value={formData.departure}
                  onChange={handleChange}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter departure location"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleSearchLocation('departure')}
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors whitespace-nowrap"
                >
                  Search
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Destination
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter destination"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleSearchLocation('destination')}
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors whitespace-nowrap"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="availableSeats" className="block text-sm font-medium text-gray-700">
                  Available Seats
                </label>
                <select
                  id="availableSeats"
                  name="availableSeats"
                  value={formData.availableSeats}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  {[1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="luggageCount" className="block text-sm font-medium text-gray-700">
                  Luggage Count
                </label>
                <select
                  id="luggageCount"
                  name="luggageCount"
                  value={formData.luggageCount}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  {[0, 1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                Additional Details
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter any additional details about your ride (e.g., vehicle type, luggage space, preferred music, etc.)"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Register Schedule
              </button>
            </div>
          </form>
        </div>

        {/* Map Box - Always visible */}
        <div className="w-full md:w-[400px] h-[400px] bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            src={getMapUrl()}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* My Registered Schedules */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-6">My Registered Schedules</h2>
        {mySchedules.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No schedules registered yet.</p>
        ) : (
          <div className="space-y-4">
            {mySchedules.map((schedule) => (
              <div
                key={schedule.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">From:</span>
                      <span>{schedule.departure}</span>
                      <span className="text-gray-400 mx-2">→</span>
                      <span className="font-medium">To:</span>
                      <span>{schedule.destination}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Date:</span>{' '}
                        {new Date(schedule.date).toLocaleDateString()}
                      </div>
                      <div>
                        <span className="font-medium">Time:</span>{' '}
                        {schedule.time}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(schedule.status)}`}>
                    {schedule.status.charAt(0).toUpperCase() + schedule.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home; 