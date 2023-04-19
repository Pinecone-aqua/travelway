export interface TravelType {
  _id: string;
  title: string;
  description: string;
  plan: [
    {
      title: string;
      description: string;
      image: string;
      considerations: string;
    }
  ];
}
