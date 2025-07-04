
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const History = () => {
  const milestones = [
    {
      year: "1985",
      title: "Club Charter",
      description: "Rotary Club of Papatoetoe Central received its charter from Rotary International, becoming part of District 9940.",
      image: "/placeholder.svg"
    },
    {
      year: "1987",
      title: "First Major Service Project",
      description: "Launched our first major community service project - establishing a scholarship fund for local students.",
      image: "/placeholder.svg"
    },
    {
      year: "1992",
      title: "Youth Exchange Program",
      description: "Became actively involved in Rotary Youth Exchange, hosting our first international student.",
      image: "/placeholder.svg"
    },
    {
      year: "1998",
      title: "Community Health Initiative",
      description: "Partnered with local health providers to establish free health screening programs for the community.",
      image: "/placeholder.svg"
    },
    {
      year: "2003",
      title: "International Project Launch",
      description: "Initiated our first international humanitarian project, supporting water well construction in Fiji.",
      image: "/placeholder.svg"
    },
    {
      year: "2008",
      title: "Environmental Focus",
      description: "Launched environmental sustainability initiatives, including tree planting and harbor cleanup programs.",
      image: "/placeholder.svg"
    },
    {
      year: "2012",
      title: "Youth Leadership",
      description: "Established the annual Youth Leadership Awards recognizing outstanding young people in our community.",
      image: "/placeholder.svg"
    },
    {
      year: "2018",
      title: "Technology Integration",
      description: "Modernized club operations with digital communications and online meeting capabilities.",
      image: "/placeholder.svg"
    },
    {
      year: "2020",
      title: "Pandemic Response",
      description: "Adapted club activities during COVID-19, supporting local food banks and essential services.",
      image: "/placeholder.svg"
    },
    {
      year: "2024",
      title: "Continuing Service",
      description: "Today we continue our commitment to service above self with over 50 active members serving our community.",
      image: "/placeholder.svg"
    }
  ];

  const achievements = [
    {
      category: "Community Service",
      items: [
        "Over $500,000 raised for local charities",
        "1,000+ students supported through scholarships",
        "50+ community projects completed",
        "Partnership with 20+ local organizations"
      ]
    },
    {
      category: "International Service", 
      items: [
        "15 water wells constructed in Pacific Islands",
        "Medical supplies donated to 5 countries",
        "Educational facilities built in 3 communities",
        "Global Grant projects totaling $200,000"
      ]
    },
    {
      category: "Youth Development",
      items: [
        "100+ youth exchange students hosted",
        "Annual leadership camps for 25+ years",
        "RYLA participants: 200+ young people",
        "Speech contests held annually since 1990"
      ]
    },
    {
      category: "Club Recognition",
      items: [
        "District Governor Award 2019",
        "Presidential Citation 5 years running",
        "100% Foundation Giving Club status",
        "Outstanding Service Award 2021"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our History</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nearly four decades of service, fellowship, and positive impact in our community and beyond
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Journey Since 1985</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The Rotary Club of Papatoetoe Central was chartered in 1985 as part of Rotary International's 
                    mission to bring together business and professional leaders dedicated to providing humanitarian 
                    service and advancing goodwill and peace around the world.
                  </p>
                  <p>
                    From our humble beginnings with just 20 charter members, we have grown into a vibrant club 
                    of over 50 dedicated Rotarians who continue to embody the motto "Service Above Self" through 
                    countless hours of volunteer service and significant financial contributions to worthy causes.
                  </p>
                  <p>
                    Our club has been instrumental in addressing critical needs in our local community while 
                    also participating in international humanitarian efforts that have touched lives across 
                    the Pacific region and beyond.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">39</div>
                    <div className="text-sm text-gray-600">Years of Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Active Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">$700K+</div>
                    <div className="text-sm text-gray-600">Funds Raised</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Historical Timeline</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-300"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                    
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                          </div>
                          <CardTitle className="text-xl text-blue-900">{milestone.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">{achievement.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {achievement.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Notable Members */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Notable Past Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">RF</span>
                  </div>
                  <CardTitle className="text-lg text-blue-900">Robert Foster</CardTitle>
                  <p className="text-sm text-gray-600">Charter President 1985-1986</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    Led the club's charter process and established many of our founding traditions and service projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">MH</span>
                  </div>
                  <CardTitle className="text-lg text-blue-900">Margaret Hughes</CardTitle>
                  <p className="text-sm text-gray-600">District Governor 1998-1999</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    First female member and later became District Governor, champion of youth programs and international service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">JK</span>
                  </div>
                  <CardTitle className="text-lg text-blue-900">James Kim</CardTitle>
                  <p className="text-sm text-gray-600">Paul Harris Fellow</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    Major donor to The Rotary Foundation and instrumental in our international water project initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Legacy Statement */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Continuing Legacy</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                "For nearly four decades, the Rotary Club of Papatoetoe Central has been a beacon of service 
                in our community. Our history is not just a record of past achievements, but a foundation 
                for future service. Every project completed, every life touched, and every friendship formed 
                contributes to our ongoing mission of creating positive change in our world."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">Our Past</h3>
                  <p className="text-blue-100">Built on strong foundations of service and fellowship</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">Our Present</h3>
                  <p className="text-blue-100">Active community engagement and global impact</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">Our Future</h3>
                  <p className="text-blue-100">Committed to continued growth and greater service</p>
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

export default History;
