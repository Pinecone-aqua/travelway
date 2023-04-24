export interface userType {
  _id: string;
  firstName: string;
  lastName: string;
  eMail: string;
  phone: number;
  created_date: number;
}
export interface questType {
  _id: string;
  title: string;
  province: string;
  description: string;
  image: string;
  myth: string;
  coord: object;
  toDoList: [];
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
