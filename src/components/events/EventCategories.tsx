
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

const EventCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Types of Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Weekly Meetings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Regular club meetings featuring guest speakers, club business, and fellowship opportunities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900 flex items-center">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                Community Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Life-saving initiatives like blood drives and health awareness programs that directly benefit our community.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Service Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Community service initiatives addressing local needs and making a positive impact.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Fundraising Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Special events to raise funds for our local and international humanitarian projects.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Youth Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Leadership development and educational programs for young people in our community.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Social Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Fellowship gatherings, celebrations, and networking opportunities for members and families.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
