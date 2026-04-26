import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const api = axios.create({
  baseURL: "https://maker-thaw-canine.ngrok-free.dev",
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
});

// attach token otomatis
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getHabits = () => api.get("/habits");

export const createHabit = (data: {
  title: string;
  description?: string;
}) => api.post("/habits", data);

export const toggleHabit = (id: string) =>
  api.patch(`/habits/${id}/toggle`);