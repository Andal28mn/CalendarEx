import axios from 'axios'; // Import Axios
import { auth } from 'firebase/auth'; // Import Firebase Auth instance

async function accessGoogleCalendarAPI(endpoint, method, data = {}) {
    const idToken = await auth.currentUser.getIdToken(); // Get ID token
    const headers = { 'Authorization': `Bearer ${idToken}` }; // Set authorization header
  
    try {
      const response = await axios({
        method, // GET, POST, PUT, etc.
        url: `https://www.googleapis.com/calendar/v3/${endpoint}`, // Calendar API endpoint
        headers,
        data, // Optional data for POST or PUT requests
      });
  
      return response.data;
    } catch (error) {
      console.error('Error accessing Google Calendar API:', error);
      throw error; // Re-throw error for handling in the calling component
    }
  }
  
  async function accessGoogleSheetsAPI(endpoint, method, data = {}) {
    const idToken = await auth.currentUser.getIdToken(); // Get ID token
    const headers = { 'Authorization': `Bearer ${idToken}` }; // Set authorization header
  
    try {
      const response = await axios({
        method, // GET, POST, PUT, etc.
        url: `https://sheets.googleapis.com/v4/spreadsheets/${endpoint}`, // Sheets API endpoint
        headers,
        data, // Optional data for POST or PUT requests
      });
  
      return response.data;
    } catch (error) {
      console.error('Error accessing Google Sheets API:', error);
      throw error; // Re-throw error for handling in the calling component
    }
  }
  export { accessGoogleCalendarAPI, accessGoogleSheetsAPI };
  