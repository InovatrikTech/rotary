
export const getEventTypeColor = (type: string) => {
  switch (type) {
    case "Meeting":
      return "bg-blue-100 text-blue-800";
    case "Service Project":
      return "bg-green-100 text-green-800";
    case "Community Service":
      return "bg-red-100 text-red-800";
    case "Fundraiser":
      return "bg-yellow-100 text-yellow-800";
    case "Youth Program":
      return "bg-purple-100 text-purple-800";
    case "Celebration":
      return "bg-pink-100 text-pink-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-NZ', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
