type IdsType = { _id: string };

export async function getAllTravelIDs() {
  try {
    // Get all id travels data from API localhsot:9090/travels/getid
    const result = await fetch("http://localhost:9090/travels/getid");
    const idsData: IdsType[] = await result.json();

    return idsData.map(({ _id }) => {
      return {
        params: { id: _id },
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAllTravelData() {
  try {
    const result = await fetch("http://localhost:9090/travels/get");
    const allData = await result.json();
    // console.log(allData);

    return allData;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// get travel information by id from API localhsot:9090/travels/get/:travelId
// id and travel obj returned
export async function getTravelData(travelid: string) {
  try {
    const result = await fetch(`http://localhost:9090/travels/get/${travelid}`);
    const data = await result.json();
  
    return {
      id: travelid,
      ...data,
    };
  } catch (error) {
    console.error(error);
    return {};
  }
}
