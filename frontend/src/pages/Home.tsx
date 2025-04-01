const Home = () => {
  return (
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
  );
};

export default Home; 