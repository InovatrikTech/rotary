
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: [] as string[],
    availability: "",
    experience: "",
    motivation: ""
  });

  const volunteerOpportunities = [
    "Community Service Projects",
    "Event Organization",
    "Fundraising Activities",
    "Youth Mentorship",
    "Administrative Support",
    "Marketing & Communications",
    "Professional Skills Volunteering",
    "International Projects",
    "Environmental Initiatives",
    "Health & Wellness Programs"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Volunteer registration submitted:", formData);
    alert("Thank you for your interest in volunteering! We'll be in touch soon. (Note: Backend integration required for full functionality)");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Volunteer With Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Make a difference in your community and beyond through meaningful volunteer opportunities
            </p>
          </div>
        </section>

        {/* Why Volunteer */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Why Volunteer with Rotary?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Make a Real Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Your volunteer efforts directly contribute to meaningful projects that create lasting positive change in our community and around the world.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Build Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Meet like-minded individuals who share your passion for service and build lifelong friendships through shared experiences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Develop Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Gain valuable experience in leadership, project management, communication, and other professional skills while serving others.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Flexible Involvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Choose volunteer opportunities that fit your schedule and interests, from one-time events to ongoing project commitments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Global Perspective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Be part of a worldwide network of volunteers working together to address global challenges and create positive change.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Personal Fulfillment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Experience the satisfaction and joy that comes from helping others and contributing to causes greater than yourself.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Volunteer Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Community Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Food bank assistance and meal preparation</li>
                    <li>• Community clean-up projects</li>
                    <li>• Senior citizen support programs</li>
                    <li>• Homeless shelter volunteering</li>
                    <li>• Local charity fundraising events</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Youth Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mentorship and tutoring programs</li>
                    <li>• Youth leadership workshops</li>
                    <li>• School supply drives</li>
                    <li>• Career guidance sessions</li>
                    <li>• Sports and recreation activities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">International Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Water and sanitation projects</li>
                    <li>• Educational facility construction</li>
                    <li>• Medical mission support</li>
                    <li>• Disaster relief assistance</li>
                    <li>• Microfinance program support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Administrative Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Event planning and coordination</li>
                    <li>• Marketing and communications</li>
                    <li>• Website and social media management</li>
                    <li>• Grant writing and fundraising</li>
                    <li>• Financial administration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Volunteer Registration Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Volunteer Interest Registration</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <p className="text-yellow-800">
                  <strong>Note:</strong> This form captures your volunteer interests. We'll contact you about specific opportunities 
                  that match your availability and interests. Full integration requires Supabase backend setup.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold">Areas of Interest *</Label>
                  <p className="text-sm text-gray-600 mb-4">Select all volunteer opportunities that interest you:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {volunteerOpportunities.map((opportunity) => (
                      <div key={opportunity} className="flex items-center space-x-2">
                        <Checkbox
                          id={opportunity}
                          checked={formData.interests.includes(opportunity)}
                          onCheckedChange={(checked) => handleInterestChange(opportunity, !!checked)}
                        />
                        <Label htmlFor={opportunity} className="text-sm font-normal">
                          {opportunity}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <Textarea
                    id="availability"
                    value={formData.availability}
                    onChange={(e) => handleInputChange("availability", e.target.value)}
                    placeholder="Please describe your availability (days, times, frequency)"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    placeholder="Tell us about any relevant volunteer or professional experience"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="motivation">Why do you want to volunteer with Rotary? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Submit Volunteer Registration
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us for our next volunteer opportunity or attend a club meeting to learn more about how you can get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
                Contact Us Today
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                Attend a Meeting
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Volunteer;
