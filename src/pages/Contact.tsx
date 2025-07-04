
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Contact, Calendar, Users } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon. (Note: Backend integration required for full functionality)");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Contact className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with us to learn more about our club, attend a meeting, or get involved in our community service projects
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-blue-900">Meeting Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Day:</strong> Every Thursday</p>
                    <p><strong>Time:</strong> 7:00 PM - 8:30 PM</p>
                    <p><strong>Location:</strong> Papatoetoe RSA</p>
                    <p className="text-sm text-gray-600 mt-3">
                      Visitors are always welcome at our meetings
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Contact className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-blue-900">Contact Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Phone:</strong> (09) 123-4567</p>
                    <p><strong>Email:</strong> info@rotarypapatoetoe.org.nz</p>
                    <p><strong>Address:</strong> Papatoetoe RSA<br />
                    [Street Address]<br />
                    Papatoetoe, Auckland</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-blue-900">Key Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-700 text-sm">
                    <div>
                      <p><strong>President:</strong> John Smith</p>
                      <p>president@rotarypapatoetoe.org.nz</p>
                    </div>
                    <div>
                      <p><strong>Secretary:</strong> Emma Wilson</p>
                      <p>secretary@rotarypapatoetoe.org.nz</p>
                    </div>
                    <div>
                      <p><strong>Membership:</strong> Sarah Johnson</p>
                      <p>membership@rotarypapatoetoe.org.nz</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Send Us a Message</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <p className="text-yellow-800">
                  <strong>Note:</strong> Full email functionality requires backend integration with Supabase. 
                  For immediate assistance, please call us directly at (09) 123-4567.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="membership">Membership Information</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        <SelectItem value="meeting">Attend a Meeting</SelectItem>
                        <SelectItem value="partnership">Community Partnership</SelectItem>
                        <SelectItem value="speaking">Speaking Opportunity</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Location & Directions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Find Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-6">Meeting Location</h3>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-4">Papatoetoe RSA</h4>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Address:</strong><br />
                      [Street Address]<br />
                      Papatoetoe, Auckland<br />
                      New Zealand</p>
                      
                      <p><strong>Parking:</strong> Free parking available on-site</p>
                      
                      <p><strong>Accessibility:</strong> Wheelchair accessible venue</p>
                      
                      <p><strong>Public Transport:</strong> Bus routes available nearby</p>
                    </div>
                    
                    <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-6">Meeting Schedule</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-600 pl-4">
                        <h4 className="text-lg font-semibold text-blue-900">Regular Meetings</h4>
                        <p className="text-gray-700">Every Thursday, 7:00 PM - 8:30 PM</p>
                        <p className="text-sm text-gray-600">Includes dinner, fellowship, and program</p>
                      </div>
                      
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="text-lg font-semibold text-blue-900">Board Meetings</h4>
                        <p className="text-gray-700">First Thursday of each month, 6:00 PM</p>
                        <p className="text-sm text-gray-600">Open to all members</p>
                      </div>
                      
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="text-lg font-semibold text-blue-900">Social Events</h4>
                        <p className="text-gray-700">Various dates throughout the year</p>
                        <p className="text-sm text-gray-600">Check our events calendar</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We'd love to hear from you! Whether you're interested in membership, volunteering, 
              or learning more about our community service projects, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
                Call Us: (09) 123-4567
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                Visit Next Thursday
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
