export interface userType {
  _id: string;
  firstName: string;
  lastName: string;
  eMail: string;
  phone: number;
  created_date: number;
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
