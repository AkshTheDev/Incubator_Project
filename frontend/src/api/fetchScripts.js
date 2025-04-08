import instance from "./axios";

export const fetchScripts = async () => {
  try {
    const response = await instance.get("/getScript");
    return response.data;
  } catch (error) {
    console.error("❌ Failed to fetch scripts:", error);
    throw error; // Rethrow so component can handle it if needed
  }
};
