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

export interface StoryType {
  _id: string;
  userId: string;
  title: string;
  image: string;
  sentence: string;
}

export interface miniStoryType {
  _id: string;
  image: string;
  title: string;
  sentence: string;
}
