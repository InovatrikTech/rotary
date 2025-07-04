import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Users, Contact, Quote } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-white via-blue-50 to-white rounded-full flex items-center justify-center mx-auto mb-8 p-3 shadow-2xl border-2 border-blue-200 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/d6a39d20-7962-4f2c-9415-3993d8a90904.png"
                alt="Rotary International Logo"
                className="w-full h-full object-contain opacity-95 drop-shadow-sm"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="font-bold text-blue-900 text-4xl">R</span>';
                    parent.className = "w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl";
                  }
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Rotary Club <span className="text-yellow-400">of Papatoetoe Central</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Service Above Self
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto text-blue-100">
              Join us in making a difference in our community through fellowship, service projects, 
              and leadership development. Together, we create positive change that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
                <Link to="/membership">Become a Member</Link>
              </Button>
              <Button asChild size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
                <Link to="/volunteer">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hear from our President */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Hear from our President</h2>
            <Quote className="w-8 h-8 text-yellow-500 mx-auto mb-6" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-yellow-500 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src="/placeholder.svg" 
                        alt="President Mrs. Nalin Chand"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<span class="text-4xl font-bold text-blue-600">NC</span>';
                          }
                        }}
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="font-bold text-lg text-blue-900">Mrs. Nalin Chand</h3>
                      <p className="text-blue-600">President 2025-2026</p>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                      "Welcome to Rotary Club Papatoetoe Central! As your President, I'm honored to lead this incredible 
                      group of dedicated individuals who share a passion for service and community impact. This year, 
                      we're focused on expanding our youth programs, supporting local businesses, and strengthening 
                      our international partnerships. Together, we're not just serving our community – we're building 
                      lasting friendships and creating positive change that extends far beyond our club. I invite you 
                      to join us on this journey of service, fellowship, and leadership."
                    </blockquote>
                    <div className="mt-6 flex justify-center lg:justify-start">
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <Link to="/office-bearers">Meet Our Leadership Team</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To provide service to others, promote integrity, and advance world understanding, 
                  goodwill, and peace through our fellowship of business, professional, and community leaders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Together, we see a world where people unite and take action to create lasting change 
                  across the globe, in our communities, and in ourselves.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our 2025 Sponsors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're grateful for the generous support of our local business partners who help make our community service possible.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Sponsor Logo 1 */}
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&crop=center"
                alt="Tech Solutions Ltd"
                className="max-w-full h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            
            {/* Sponsor Logo 2 */}
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop&crop=center"
                alt="Digital Innovations"
                className="max-w-full h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            
            {/* Sponsor Logo 3 */}
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&crop=center"
                alt="Business Consulting Group"
                className="max-w-full h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            
            {/* Sponsor Logo 4 */}
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&crop=center"
                alt="Local Marketing Agency"
                className="max-w-full h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            
            {/* Sponsor Logo 5 */}
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=100&fit=crop&crop=center"
                alt="Software Development Co"
                className="max-w-full h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            
            {/* Become a Sponsor Card */}
            <div className="flex items-center justify-center p-4 bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg hover:bg-blue-100 transition-colors">
              <div className="text-center">
                <p className="text-blue-900 font-semibold text-sm mb-2">Become a Sponsor</p>
                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 text-sm">
              Interested in sponsoring our club? <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Get in touch</Link> to learn about our sponsorship opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Join Our Club</CardTitle>
                <CardDescription>
                  Become part of our fellowship and make a difference in your community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/membership">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Upcoming Events</CardTitle>
                <CardDescription>
                  Stay updated with our meetings, service projects, and community events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/events">View Calendar</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Contact className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Get in Touch</CardTitle>
                <CardDescription>
                  Contact us to learn more about our club and how you can get involved
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meeting Info */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Join Us at Our Weekly Meetings</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Meeting Details</h3>
            <div className="space-y-3 text-lg text-gray-700">
              <p><strong>Day:</strong> Every Thursday</p>
              <p><strong>Time:</strong> 7:00 PM - 8:30 PM</p>
              <p><strong>Location:</strong> Papatoetoe RSA</p>
              <p><strong>Address:</strong> [Club Address], Papatoetoe, Auckland</p>
            </div>
            <Button asChild className="mt-6 bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <Link to="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
