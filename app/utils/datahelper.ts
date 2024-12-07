// utils/datahelper.ts

import axios from "axios";
import { wedding } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getWeddingContent = async (path: string): Promise<wedding> => {
  try {
    const url = `${API_URL}/content/wedding-invitation/glamour/${path}`;

    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "69420",
    };

    const response = await axios.get(url, { headers });
    return response.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch wedding content.");
  }
};
