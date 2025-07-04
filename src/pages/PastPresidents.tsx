
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PastPresidents = () => {
  const pastPresidents = [
    {
      name: "Margaret Thompson",
      term: "2023-2024",
      achievements: "Led major community health initiative, increased membership by 25%",
      image: "/placeholder.svg"
    },
    {
      name: "Robert Chen",
      term: "2022-2023", 
      achievements: "Established scholarship program, organized international service project",
      image: "/placeholder.svg"
    },
    {
      name: "Linda Wilson",
      term: "2021-2022",
      achievements: "Launched youth leadership program, strengthened local business partnerships",
      image: "/placeholder.svg"
    },
    {
      name: "James Anderson",
      term: "2020-2021",
      achievements: "Navigated club through pandemic, pioneered virtual meeting format",
      image: "/placeholder.svg"
    },
    {
      name: "Patricia Davis",
      term: "2019-2020",
      achievements: "Organized largest fundraising event in club history, environmental initiatives",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Brown",
      term: "2018-2019",
      achievements: "Expanded community outreach programs, improved club communication systems",
      image: "/placeholder.svg"
    },
    {
      name: "Susan Taylor",
      term: "2017-2018",
      achievements: "Established mentorship program, increased youth engagement",
      image: "/placeholder.svg"
    },
    {
      name: "David Johnson",
      term: "2016-2017",
      achievements: "Led disaster relief efforts, strengthened district relationships",
      image: "/placeholder.svg"
    },
    {
      name: "Elizabeth White",
      term: "2015-2016",
      achievements: "Launched literacy program, enhanced international connections",
      image: "/placeholder.svg"
    },
    {
      name: "Richard Martinez",
      term: "2014-2015",
      achievements: "Modernized club operations, increased community visibility",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Past Presidents</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Honoring the dedicated leaders who have guided our club through years of service and growth
            </p>
          </div>
        </section>

        {/* Past Presidents List */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Legacy of Leadership</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Each president has brought their unique vision and dedication to our club, 
                leaving a lasting impact on our community and members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastPresidents.map((president, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={president.image} 
                        alt={president.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<span class="text-2xl font-bold text-blue-600">' + president.name.split(' ').map(n => n[0]).join('') + '</span>';
                          }
                        }}
                      />
                    </div>
                    <CardTitle className="text-xl text-blue-900">{president.name}</CardTitle>
                    <CardDescription className="font-semibold text-lg text-blue-600">
                      President {president.term}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong>Key Achievements:</strong> {president.achievements}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Presidential Legacy */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Presidential Tradition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Since our charter, each president has served with distinction, bringing their own 
                      unique perspective and leadership style to guide our club forward.
                    </p>
                    <h4 className="font-semibold text-blue-900">Presidential Responsibilities Include:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Leading weekly meetings and board meetings</li>
                      <li>• Setting annual goals and strategic direction</li>
                      <li>• Representing the club in the community</li>
                      <li>• Mentoring future leaders</li>
                      <li>• Overseeing service projects and initiatives</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Collective Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Together, our past presidents have built a legacy of service that spans decades, 
                      touching thousands of lives in our community and beyond.
                    </p>
                    <h4 className="font-semibold text-blue-900">Collective Achievements:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Over $500,000 raised for community projects</li>
                      <li>• 50+ scholarships awarded to local students</li>
                      <li>• Multiple international service projects</li>
                      <li>• Hundreds of volunteers engaged and trained</li>
                      <li>• Strong partnerships with local organizations</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PastPresidents;
