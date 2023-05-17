export interface UserType {
  _id: string;
  username: string;
  nickname: string;
  email: string;
  phone: number;
  createdAt: string;
  biography: string;
  role: string;
}
export interface StoryType {
  map(
    arg0: (unit: StoryType, index: number) => JSX.Element
  ): import("react").ReactNode;
  _id: string;
  title: string;
  province: string;
  description: string;
  image: string[];
  myth: string;
  coord: CoordType;
  toDo: [];
}
export interface CoordType {
  lan: number;
  lng: number;
}
export interface TravelType {
  _id: string;
  title: string;
  description: string;
  day: [];
  image: string;
  createdAt: string;
}
export interface DayType {
  title: string;
  description: string;
  image: string;
  considerations: string;
  subTitle: string;
  destination: string;
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
  userName: string;
  exp: number;
  iat: number;
}
export interface ButtonType {
  name: string;
  path: string;
  icon: JSX.Element;
}
