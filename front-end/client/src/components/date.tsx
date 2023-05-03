import moment from "moment";

export default function Date(date: Date): string {
  return moment(date).format("MMM DD, YYYY");
}
