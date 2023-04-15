export interface TravelType {
    _id: string;
    destination: string;
    subDest: string;
    description: string;
    tags: Array<string>;
    season: Array<string>;
    image: string;
  };