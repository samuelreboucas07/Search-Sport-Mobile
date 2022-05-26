import axios from 'axios';

const getLocation = async (longitude: number, latitude: number) => {
  const response = await axios.get(`http://www.mapquestapi.com/geocoding/v1/reverse?key=tvnDVvOo9dDeshUVfrIxP3VYRCjy948o&location=${latitude},${longitude}`);
  return response.data.results[0].locations[0];
};



export default getLocation;