export interface UserType {
  _id: string;
  username: string;
  nickname: string;
  email: string;
  phone: number;
  created_date: number;
  biography: string;
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
export interface TravelType {
  _id: string;
  title: string;
  description: string;
  day: [];
}
export interface DayType {
  title: string;
  description: string;
  image: string;
  considerations: string;
}

export interface ToDoType {
  activity: string;
}

export interface MiniStoryType {
  _id: string;
  image: string;
  title: string;
  description: string;
  sentence: string;
}

export interface AdminType {
  id: string;
  username: string;
  exp: number;
  iat: number;
}
