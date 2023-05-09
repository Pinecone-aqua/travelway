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

export interface LoginForm {
  email: string | undefined;
  password: string;
}

export interface UserContextType {
  user: LoginForm | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<LoginForm | null | undefined>>;
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}
