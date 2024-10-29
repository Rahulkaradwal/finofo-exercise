// src/api.ts

import { BASE_API_URL } from "./URL";

export const fetchFruits = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
