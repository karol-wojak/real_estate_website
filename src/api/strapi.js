// src/api/strapi.js
import axios from 'axios';

const STRAPI_URL = 'http://localhost:1337/api'; // Change to your Strapi URL if different

export const fetchPortfolioProjects = async () => {
  try {
    const res = await axios.get(`${STRAPI_URL}/portfolio-projects?populate=*`);
    // Strapi v4 returns data in res.data.data
    return res.data.data;
  } catch (error) {
    console.error('Error fetching portfolio projects:', error);
    return [];
  }
};