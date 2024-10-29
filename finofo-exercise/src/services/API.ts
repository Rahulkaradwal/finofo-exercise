// src/api.ts

import { BASE_API_URL } from "./URL";

export const fetchFruits = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Fetch response:", response);
    const data = await response.json();

    console.log("Fetched fruits:", data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
