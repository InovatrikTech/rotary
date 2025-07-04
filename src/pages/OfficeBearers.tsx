import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const OfficeBearers = () => {
  const officers = [
    {
      name: "Mrs. Nalin Chand",
      position: "President",
      year: "2025-2026",
      email: "president@rotarypapatoetoe.org.nz",
      phone: "(09) 123-4567",
      bio: "Mrs. Nalin Chand brings extensive experience in community leadership and is passionate about advancing Rotary's mission of service above self. She is committed to expanding our youth programs and strengthening community partnerships.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      position: "President-Elect",
      year: "2025-2026",
      email: "presidentelect@rotarypapatoetoe.org.nz",
      phone: "(09) 123-4568",
      bio: "Sarah is a healthcare professional committed to improving community health outcomes. She leads our health and wellness initiatives and international projects.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Brown",
      position: "Vice President",
      year: "2025-2026",
      email: "vicepresident@rotarypapatoetoe.org.nz",
      phone: "(09) 123-4569",
      bio: "Michael brings extensive experience in project management and coordinates our major community service initiatives. He has been with the club for 8 years.",
      image: "/placeholder.svg"
    },
    {
      name: "Emma Wilson",
      position: "Secretary",
      year: "2025-2026",
      email: "secretary@rotarypapatoetoe.org.nz",
      phone: "(09) 123-4570",
      bio: "Emma manages club communications and documentation. As a communications professional, she oversees our public relations and member engagement activities.",
      image: "/placeholder.svg"
    },
    {
      name: "David Thompson",
      position: "Treasurer",
      year: "2025-2026",
      email: "treasurer@rotarypapatoetoe.org.nz",
      phone: "(09) 123-4571",
      bio: "David is a chartered accountant who ensures our club's financial health and transparency. He oversees fundraising efforts and budget management.",
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Chen",
      position: "Sergeant-at-Arms",
      year: "2025-2026",
      email: "sergeant@rotarypapatoetoe.org.nz",
      phone: "(09) 123-4572",
      bio: "Lisa maintains order during meetings and coordinates club events. She brings energy and enthusiasm to all club activities and member engagement.",
      image: "/placeholder.svg"
    }
  ];

  const directors = [
    {
      name: "Robert Davis",
      position: "Club Service Director",
      responsibilities: "Member engagement, club programs, and internal activities"
    },
    {
      name: "Jennifer Lee",
      position: "Community Service Director", 
      responsibilities: "Local service projects and community partnerships"
    },
    {
      name: "Mark Taylor",
      position: "International Service Director",
      responsibilities: "Global grants and international humanitarian projects"
    },
    {
      name: "Amanda White",
      position: "Youth Service Director",
      responsibilities: "Youth programs, scholarships, and leadership development"
    },
    {
      name: "Paul Anderson",
      position: "Rotary Foundation Director",
      responsibilities: "Foundation giving and grant applications"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Office Bearers</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet our dedicated leadership team committed to serving our community and advancing Rotary's mission
            </p>
          </div>
        </section>

        {/* Executive Officers */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Executive Officers 2025-2026</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {officers.map((officer, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={officer.image} 
                        alt={officer.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<span class="text-4xl font-bold text-blue-600">' + officer.name.split(' ').map(n => n[0]).join('') + '</span>';
                          }
                        }}
                      />
                    </div>
                    <CardTitle className="text-xl text-blue-900">{officer.name}</CardTitle>
                    <CardDescription className="font-semibold text-lg text-blue-600">
                      {officer.position}
                    </CardDescription>
                    <CardDescription className="text-sm text-gray-600">
                      {officer.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm mb-4">{officer.bio}</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> <a href={`mailto:${officer.email}`} className="text-blue-600 hover:underline">{officer.email}</a></p>
                      <p><strong>Phone:</strong> <a href={`tel:${officer.phone}`} className="text-blue-600 hover:underline">{officer.phone}</a></p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Board of Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {directors.map((director, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">{director.name}</CardTitle>
                    <CardDescription className="font-semibold text-blue-600">
                      {director.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm">{director.responsibilities}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Structure */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Our Leadership Structure</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Executive Committee</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Our Executive Committee consists of the President, President-Elect, Vice President, 
                      Secretary, Treasurer, and Sergeant-at-Arms. They meet monthly to guide club operations 
                      and make strategic decisions.
                    </p>
                    <h4 className="font-semibold text-blue-900">Key Responsibilities:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Strategic planning and goal setting</li>
                      <li>• Budget oversight and financial management</li>
                      <li>• Member development and engagement</li>
                      <li>• Community project approval</li>
                      <li>• Policy development and implementation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Board of Directors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Our Board of Directors includes service directors who oversee specific areas of 
                      Rotary's work. Each director leads committees focused on their area of expertise.
                    </p>
                    <h4 className="font-semibold text-blue-900">Service Areas:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Club Service:</strong> Internal club activities and member satisfaction</li>
                      <li>• <strong>Community Service:</strong> Local projects and partnerships</li>
                      <li>• <strong>International Service:</strong> Global humanitarian efforts</li>
                      <li>• <strong>Youth Service:</strong> Programs for young people</li>
                      <li>• <strong>Rotary Foundation:</strong> Fundraising and grants</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Term Information */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Leadership Terms & Elections</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Term Length</h3>
                    <p className="text-gray-700 mb-4">
                      All officer positions serve one-year terms from July 1st to June 30th, 
                      following Rotary International's standard year.
                    </p>
                    <p className="text-gray-700">
                      The President-Elect serves as an apprentice president and automatically 
                      becomes President the following year.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Elections</h3>
                    <p className="text-gray-700 mb-4">
                      Officer elections are held annually in March, with new officers 
                      taking their positions on July 1st.
                    </p>
                    <p className="text-gray-700">
                      All club members in good standing are eligible to nominate 
                      candidates and vote in elections.
                    </p>
                  </div>
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

export default OfficeBearers;
