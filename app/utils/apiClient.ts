import axios from "axios";

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

// Add an interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response , // Pass through successful responses
  (error) => {
    // Handle errors globally
    if (error.response?.status === 404) {
      console.log(error.response?.data)
    } else {
      console.error("API Error:", error);
    }
    
    return Promise.reject(error);
  }
);


export default apiClient;
