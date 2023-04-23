export interface TravelType {
  _id: string;
  title: string;
  description: string;
  day: [
    {
      title: string;
      description: string;
      image: string;
      considerations: string;
      destination: string;
    }
  ];
  season: string[];
  createdAt: Date;
  updatedAt: Date;
}