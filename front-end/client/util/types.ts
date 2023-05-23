export interface TravelType {
  _id: string;
  title: string;
  image: string;
  description: string;
  userId: string;
  day: DayType[];
}

export interface DayType {
  image: string;
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
  coord: CoordType;
}
interface CoordType {
  lat: number;
  lng: number;
}

export interface miniStoryType {
  userId: string | undefined ;
  username?: string;
  width: number;
  height: number;
  _id: string;
  image: string;
  title: string;
  sentence: string;
}

export interface LoginForm {
  _id?: string;
  email: string | undefined;
  password: string;
  username?: string;
  image?: string;
  biography?: string;
  phone?: string;
}

export interface travelWayType {
  title: string;
}

export type UserDataContextType = {
  _id: string;
  username: string;
  email: "";
  image: "";
  role: "";
  iat: number;
  exp: number;
};

export interface UserContextType {
  user: LoginForm | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<LoginForm | null | undefined>>;
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  role: string | undefined;
  setRole: React.Dispatch<React.SetStateAction<string | undefined>>;
}

//sharvaa added

export interface StoryTypeSh {
  map(
    arg0: (unit: StoryType, index: number) => JSX.Element
  ): import("react").ReactNode;
  _id: string;
  title: string;
  province: string;
  description: string;
  image: string[];
  myth: string;
  coord: object;
  toDo: [];
}
