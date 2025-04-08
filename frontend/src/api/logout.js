import instance from "./axios";
export const logout = async () => {
  try {
    const refresh = localStorage.getItem("refreshToken");
    console.log("Sending refresh token: ",refresh)
    const response = await instance.post("/logout", { "refresh": refresh });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
