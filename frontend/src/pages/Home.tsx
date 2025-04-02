import { useState } from 'react';

interface ScheduleForm {
  departure: string;
  destination: string;
  date: string;
  time: string;
}

interface Schedule extends ScheduleForm {
  id: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

const Home = () => {
  const [scheduleForm, setScheduleForm] = useState<ScheduleForm>({
    departure: '',
    destination: '',
    date: '',
    time: '',
  });

  // Dummy data for demonstration
  const [mySchedules] = useState<Schedule[]>([
    {
      id: '1',
      departure: 'Waterloo',
      destination: 'Toronto',
      date: '2024-03-25',
      time: '09:00',
      status: 'confirmed'
    },
    {
      id: '2',
      departure: 'Kitchener',
      destination: 'Hamilton',
      date: '2024-03-26',
      time: '14:30',
      status: 'pending'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement schedule registration logic
    console.log('Schedule form submitted:', scheduleForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setScheduleForm(prev => ({
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
    <div className="space-y-12">
      {/* Welcome Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Hitchhikers
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your trusted platform for ride sharing
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">For Passengers</h2>
            <p className="text-gray-600">
              Register your ride schedule and connect with reliable drivers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">For Drivers</h2>
            <p className="text-gray-600">
              Find ride schedules and earn money while helping others.
            </p>
          </div>
        </div>
      </div>

      {/* Schedule Registration Form */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Register Your Ride Schedule</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="departure" className="block text-sm font-medium text-gray-700 mb-1">
                Departure Location
              </label>
              <input
                type="text"
                id="departure"
                name="departure"
                value={scheduleForm.departure}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter departure location"
                required
              />
            </div>
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                Destination
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={scheduleForm.destination}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter destination"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={scheduleForm.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={scheduleForm.time}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register Schedule
            </button>
          </div>
        </form>
      </div>

      {/* My Registered Schedules */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
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