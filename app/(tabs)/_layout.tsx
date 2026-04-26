import { Tabs, router } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabsLayout() {
  useEffect(() => {
    const check = async () => {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        router.replace("/(auth)/login");
      }
    };

    check();
  }, []);

  return <Tabs />;
}