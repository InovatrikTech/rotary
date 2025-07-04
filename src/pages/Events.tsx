
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import EventCard from "@/components/events/EventCard";
import BloodDonationSpotlight from "@/components/events/BloodDonationSpotlight";
import RegularMeetings from "@/components/events/RegularMeetings";
import EventCategories from "@/components/events/EventCategories";
import { upcomingEvents } from "@/data/eventsData";
import { getEventTypeColor, formatDate } from "@/utils/eventTypeColors";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Calendar</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with our meetings, service projects, and community events
            </p>
          </div>
        </section>

        {/* Blood Donation Spotlight */}
        <BloodDonationSpotlight />

        {/* Regular Meeting Schedule */}
        <RegularMeetings />

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  getEventTypeColor={getEventTypeColor}
                  formatDate={formatDate}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <EventCategories />

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us at Our Next Event</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the fellowship and service spirit of Rotary. Visitors are always welcome at our meetings and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
                Contact Us for Details
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                View Meeting Schedule
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
