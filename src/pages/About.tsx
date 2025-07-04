import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are?</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the history, values, and mission that drive our commitment to service and fellowship
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The Rotary Club of Papatoetoe Central was chartered as part of the global Rotary International 
                    network, bringing together local business and professional leaders who share a commitment to service above self.
                  </p>
                  <p>
                    Since our founding, we have been dedicated to addressing the needs of our local community while 
                    supporting international humanitarian efforts. Our members come from diverse backgrounds, 
                    united by our shared values and desire to make a positive impact.
                  </p>
                  <p>
                    Through regular service projects, fundraising efforts, and community partnerships, we work 
                    tirelessly to improve the lives of those around us and create lasting change that extends 
                    far beyond our local borders.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">The Four-Way Test</h3>
                <p className="text-gray-700 mb-4">
                  Of the things we think, say or do:
                </p>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    Is it the TRUTH?
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    Is it FAIR to all concerned?
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    Will it build GOODWILL and BETTER FRIENDSHIPS?
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    Will it be BENEFICIAL to all concerned?
                  </li>
                </ol>
              </div>
            </div>

            {/* Areas of Focus */}
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Areas of Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Peace & Conflict Prevention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Supporting efforts to prevent and resolve conflicts through education, dialogue, and community building.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Disease Prevention & Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Working to improve health outcomes and prevent disease through vaccination campaigns and health education.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Water & Sanitation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Ensuring access to clean water and proper sanitation facilities for communities in need.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Maternal & Child Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Supporting programs that improve the health and wellbeing of mothers and children worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Basic Education & Literacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Promoting education and literacy programs to empower individuals and strengthen communities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Economic Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Supporting sustainable economic development initiatives that create lasting positive change.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values Section */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">Service</h3>
                  <p className="text-blue-100">We provide service to others and work to solve problems in our communities.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">Fellowship</h3>
                  <p className="text-blue-100">We build lifelong friendships through our shared commitment to service.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">Diversity</h3>
                  <p className="text-blue-100">We celebrate our differences and work together to create positive change.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">Integrity</h3>
                  <p className="text-blue-100">We act with honesty and high ethical standards in all that we do.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
