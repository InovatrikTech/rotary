

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-blue-50 rounded-full flex items-center justify-center p-2 shadow-xl border border-blue-200">
                <img 
                  src="/lovable-uploads/d6a39d20-7962-4f2c-9415-3993d8a90904.png"
                  alt="Rotary International Logo"
                  className="w-full h-full object-contain opacity-90"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="font-bold text-blue-900 text-xl">R</span>';
                      parent.className = "w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl";
                    }
                  }}
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Rotary Club of Papatoetoe Central</h3>
                <p className="text-blue-200 text-sm">Service Above Self</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Serving our community through fellowship, service, and leadership development since our founding.
            </p>
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} Rotary Club of Papatoetoe Central. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-100 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/membership" className="text-blue-100 hover:text-yellow-400 transition-colors">Join Us</Link></li>
              <li><Link to="/events" className="text-blue-100 hover:text-yellow-400 transition-colors">Events</Link></li>
              <li><Link to="/volunteer" className="text-blue-100 hover:text-yellow-400 transition-colors">Volunteer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="text-blue-100 space-y-2">
              <p>Meetings: Thursdays 7:00 PM</p>
              <p>Papatoetoe RSA</p>
              <p>Phone: (09) 123-4567</p>
              <p>Email: info@rotarypapatoetoe.org.nz</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            Rotary International District 9940 | Charter Number: [Charter Number]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

