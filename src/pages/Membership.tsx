
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Membership = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occupation: "",
    employer: "",
    address: "",
    membershipType: "",
    motivation: "",
    referral: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally integrate with Supabase for form submission
    console.log("Membership application submitted:", formData);
    alert("Thank you for your application! We'll be in touch soon. (Note: Backend integration required for full functionality)");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Club</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Become part of a global network dedicated to service, fellowship, and positive change
            </p>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Membership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Professional Networking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Connect with like-minded professionals and business leaders in your community and around the world.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Leadership Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Develop your leadership skills through club roles, committee work, and community service projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Community Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Make a meaningful difference in your local community and contribute to global humanitarian efforts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Global Fellowship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Access to over 1.2 million Rotarians worldwide and reciprocal club privileges globally.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Personal Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Enhance your communication skills, cultural awareness, and personal development through service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Receive recognition for your service contributions and achievements within the organization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Membership Types & Fees */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Membership Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-blue-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-blue-900">Regular Membership</CardTitle>
                  <CardDescription className="text-lg">
                    <span className="text-3xl font-bold text-blue-600">$150</span>
                    <span className="text-gray-600">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Full voting rights</li>
                    <li>• Committee participation</li>
                    <li>• Global reciprocal privileges</li>
                    <li>• Weekly meeting attendance</li>
                    <li>• Service project participation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-blue-900">Professional Membership</CardTitle>
                  <CardDescription className="text-lg">
                    <span className="text-3xl font-bold text-blue-600">$200</span>
                    <span className="text-gray-600">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li>• All Regular benefits</li>
                    <li>• Leadership opportunities</li>
                    <li>• Business networking events</li>
                    <li>• Mentorship programs</li>
                    <li>• Professional development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-blue-900">Honorary Membership</CardTitle>
                  <CardDescription className="text-lg">
                    <span className="text-3xl font-bold text-blue-600">$75</span>
                    <span className="text-gray-600">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li>• For seniors 65+</li>
                    <li>• Reduced meeting requirements</li>
                    <li>• Social events access</li>
                    <li>• Mentorship roles</li>
                    <li>• Advisory participation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Membership Application</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <p className="text-yellow-800">
                  <strong>Note:</strong> Full payment processing and automated invoice generation requires Supabase integration. 
                  This form currently captures information for manual processing.
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="occupation">Occupation *</Label>
                    <Input
                      id="occupation"
                      value={formData.occupation}
                      onChange={(e) => handleInputChange("occupation", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="employer">Employer/Business</Label>
                    <Input
                      id="employer"
                      value={formData.employer}
                      onChange={(e) => handleInputChange("employer", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="membershipType">Preferred Membership Type *</Label>
                  <Select onValueChange={(value) => handleInputChange("membershipType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select membership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="regular">Regular Membership - $150/month</SelectItem>
                      <SelectItem value="professional">Professional Membership - $200/month</SelectItem>
                      <SelectItem value="honorary">Honorary Membership - $75/month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="motivation">Why do you want to join Rotary? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="referral">How did you hear about us?</Label>
                  <Input
                    id="referral"
                    value={formData.referral}
                    onChange={(e) => handleInputChange("referral", e.target.value)}
                    placeholder="Referral member, website, event, etc."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Membership;
