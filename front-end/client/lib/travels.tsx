export async function getAllTravelDatas() {
  // Get all travels data from API localhsot:9090/travels/get
  const result = await fetch("http://localhost:9090/travels/get");
  const data = await result.json();

  return data;
}

export async function getTravelData(id) {
  const result = await fetch(`http://localhost:9090/travels/get/${travelId}`);
  const data = await result.json();

  return data;
}

/** 
 * destination: string;
    subDest: string;
    description?: string;
    tags?: string;
    season?: string;
    image?: string;
 */
