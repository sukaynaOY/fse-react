// src/api/api.js

export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/data/fetch');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  