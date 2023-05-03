export interface userType {
  _id: string;
  username: string;
  nickname: string;
  email: string;
  phone: number;
  created_date: number;
}
export interface StoryType {
  _id: string;
  title: string;
  province: string;
  description: string;
  image: string;
  myth: string;
  coord: object;
  toDo: [];
}
export interface travelType {
  _id: string;
  title: string;
  description: string;
  day: [];
}
export interface dayType {
  title: string;
  description: string;
  image: string;
  considerations: string;
}

export interface toDoType {
  activity: string;
}

export interface miniStoryType {
  _id: string;
  image: string;
  title: string;
  description: string;
  sentence: string;
}
