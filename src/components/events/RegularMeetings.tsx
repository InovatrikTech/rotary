
const RegularMeetings = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Regular Meetings</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Weekly Club Meetings</h3>
            <div className="space-y-3 text-lg text-gray-700">
              <p><strong>Day:</strong> Every Thursday</p>
              <p><strong>Time:</strong> 7:00 PM - 8:30 PM</p>
              <p><strong>Location:</strong> Papatoetoe RSA</p>
              <p><strong>Address:</strong> [Club Address], Papatoetoe, Auckland</p>
            </div>
            <p className="text-gray-600 mt-4">
              Our weekly meetings include guest speakers, club business, and fellowship time. 
              Visitors are always welcome!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegularMeetings;
