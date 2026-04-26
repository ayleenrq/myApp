import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api";

export const useAuth = () => {
  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    const token = res.data.access_token;

    await AsyncStorage.setItem("token", token);

    return token;
  };

  const register = async (name: string, email: string, password: string) => {
    return api.post("/auth/register", {
      name,
      email,
      password,
    });
  };

  const getToken = async () => {
    return await AsyncStorage.getItem("token");
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
  };

  return { login, register, getToken, logout };
};