// src/api/strapi.js
import axios from 'axios';

// Use environment variable first, then proxy for dev, then fallback to direct URL
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 
                   (import.meta.env.DEV ? '/api' : 'http://localhost:1337/api');

// Configure axios for better browser compatibility
const apiClient = axios.create({
  baseURL: STRAPI_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  // Disable automatic request/response transformations that might cause issues
  transformRequest: [function (data) {
    return JSON.stringify(data);
  }],
  transformResponse: [function (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  }],
});

export const fetchPortfolioProjects = async () => {
  try {
    // Add a delay to prevent rapid requests that might cause issues in Firefox
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const res = await apiClient.get('/portfolio-projects?populate=*');
    // Strapi v4 returns data in res.data.data
    return res.data.data;
  } catch (error) {
    console.error('Error fetching portfolio projects:', error);
    
    // Check for specific Firefox/browser compatibility issues
    if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
      console.warn('Network error detected - this might be a browser compatibility issue');
      // Try fallback approach for Firefox
      try {
        const fallbackRes = await fetch(`${STRAPI_URL}/portfolio-projects?populate=*`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          mode: 'cors',
        });
        if (fallbackRes.ok) {
          const data = await fallbackRes.json();
          return data.data;
        }
      } catch (fallbackError) {
        console.error('Fallback fetch also failed:', fallbackError);
      }
    }
    
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
      
      // Handle specific HTTP status codes
      if (error.response.status === 426) {
        console.error('HTTP 426 Upgrade Required - This is likely a protocol mismatch issue');
      }
    } else if (error.request) {
      console.error('Request made but no response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    return [];
  }
};