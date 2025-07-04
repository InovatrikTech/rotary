
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    type: string;
  };
  getEventTypeColor: (type: string) => string;
  formatDate: (dateString: string) => string;
}

const EventCard = ({ event, getEventTypeColor, formatDate }: EventCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
            {event.type}
          </span>
          {event.type === "Community Service" && (
            <Heart className="w-5 h-5 text-red-500" />
          )}
        </div>
        <CardTitle className="text-xl text-blue-900">{event.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {formatDate(event.date)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-700">Time:</p>
            <p className="text-sm text-gray-600">{event.time}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Location:</p>
            <p className="text-sm text-gray-600">{event.location}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Description:</p>
            <p className="text-sm text-gray-600">{event.description}</p>
          </div>
        </div>
        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
