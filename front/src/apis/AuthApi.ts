import axios from "axios";

const API_BASE_URL = "https://localhost:7273";

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
});

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await instance.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error while login: ", error);
    throw error;
  }
};
