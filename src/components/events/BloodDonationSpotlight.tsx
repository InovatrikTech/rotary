
import { Button } from "@/components/ui/button";
import { Heart, Droplets } from "lucide-react";

const BloodDonationSpotlight = () => {
  return (
    <section className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-red-900 mb-6">Give the Gift of Life</h2>
          <p className="text-xl text-red-800 mb-8 max-w-3xl mx-auto">
            Join us at our Blood Donation Drive at NZ Blood Manukau Centre
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-red-900 mb-4 flex items-center">
                <Droplets className="w-8 h-8 text-red-600 mr-3" />
                Why Your Donation Matters
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Blood donations</strong> are critical for emergency surgeries, cancer treatments, 
                  and supporting patients with chronic conditions. A single blood donation can save up to 
                  three lives, providing essential red blood cells, platelets, and plasma to those in need.
                </p>
                <p>
                  <strong>Plasma donations</strong> are equally vital, helping create life-saving medicines 
                  for people with immune deficiencies, bleeding disorders, and other serious medical conditions. 
                  Plasma is also crucial for treating burn victims and those suffering from shock or trauma.
                </p>
                <p className="font-semibold text-red-800">
                  Every donation is a gift of hope - your generosity directly impacts families in our community 
                  and beyond, giving patients a second chance at life.
                </p>
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-red-900 mb-4">Event Details</h4>
              <div className="space-y-3">
                <p><strong>Date:</strong> Monday, 15th January 2024</p>
                <p><strong>Time:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Location:</strong> NZ Blood Manukau Centre</p>
                <p><strong>Address:</strong> 19 Cavendish Drive, Manukau</p>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-sm text-gray-600">
                  • No appointment necessary - walk-ins welcome
                </p>
                <p className="text-sm text-gray-600">
                  • Refreshments provided for all donors
                </p>
                <p className="text-sm text-gray-600">
                  • Free health check included
                </p>
              </div>
              <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">
                Learn More About Donating
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodDonationSpotlight;
