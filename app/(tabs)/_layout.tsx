import { Tabs, router } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";

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

  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: "#111111",
        tabBarInactiveTintColor: "#B8B8B8",
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#D9F542',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          height: 60,
          paddingBottom: 8,
        },
        headerStyle: {
          backgroundColor: '#FFFCF2',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontWeight: '800',
          fontSize: 22,
          color: '#2A2A2A',
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "My Habits",
          tabBarIcon: ({ color }) => <Feather name="list" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="add" 
        options={{ 
          title: "New Habit",
          tabBarIcon: ({ color }) => <Feather name="plus-circle" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: "Profile",
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />
        }} 
      />
    </Tabs>
  );
}