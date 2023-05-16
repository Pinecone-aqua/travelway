export interface TravelType {
  _id: string;
  title: string;
  image: string;
  description: string;
  userId: string;
  day: DayType[];
}

export interface DayType {
  subTitle: string;
  describe: string;
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
  width: number;
  height: number;
  _id: string;
  image: string;
  title: string;
  sentence: string;
}

export interface LoginForm {
  email: string | undefined;
  password: string;
  userId: string;
}

export interface travelWayType {
  title: string;
}

export interface UserContextType {
  user: LoginForm | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<LoginForm | null | undefined>>;
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}
