export interface TravelType {
  _id: string;
  title: string;
  image: string;
  description: string;
  day: [];
}

export interface DayType {
  subTitle: string;
  describe: string;
  image: string;
  considerations: string;
  destination: string;
}
