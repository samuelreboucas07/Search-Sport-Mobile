import getLocation from '../servicesExternal/index';

export const convertCoordenateInAddress = async (latitude: number, longitude: number) => {
    const response = await getLocation(longitude, latitude);
    if (response && response.street && response.adminArea5) {
      return `${response.street} - ${response.adminArea5}`;
    } else {
      return 'Endereço não identificado.';
    }
};