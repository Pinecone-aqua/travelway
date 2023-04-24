import axios from "axios";

type IdsType = { _id: string };

export async function getAllTravelIDs() {
  try {
    const result = await axios.get("http://localhost:3009/travels/getid");

    const { data } = result;
    const idsData: IdsType[] = data;

    // console.log(idsData);

    return idsData.map(({ _id }) => ({
      params: {
        id: _id,
      },
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAllTravelData() {
  try {
    const result = await axios.get("http://localhost:3009/travels/get");
    const { data } = result;
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// get travel information by id from API localhost:3009/travels/:travelId
// id and travel obj returned, about one obj travel
export async function getTravelData(travelid: string) {
  try {
    const result = await axios.get(`http://localhost:3009/travels/${travelid}`);
    const { data } = result;
    return {
      id: travelid,
      ...data,
    };
  } catch (error) {
    console.error(error);
    return {};
  }
}
