import apiClient from "./apiClient";
import { wedding } from "./types";

// Fetch wedding content
export const getWeddingContent = async (category: string, path: string): Promise<wedding> => {
  try {
    const response = await apiClient.get(`/content/wedding-invitation/${category}/${path}`);
    return response.data[0];
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch wedding content.");
  }
};

// Fetch wedding image
export const getWeddingImage = async (category: string, path?: string, filename?: string): Promise<string> => {
  try {
    const url = `/images/${category}/${path}/${filename}`;

    // Validate that the file exists
    await apiClient.head(url);

    // Return the URL for the image
    return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch wedding image.");
  }
};
 
//Send RSVP
export const sendRsvp = async (id: string, rsvpData: any) => {
  console.log("id"+id);
  console.log("rsvp"+JSON.stringify(rsvpData));
  try {
    const response = await apiClient.post(`/content/${id}/rsvp`, rsvpData);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch wedding content.");
  }
};
