import { View, Text } from "react-native";
import Button from "../../components/ui/button";
import { useAuth } from "../../hooks/useAuth";
import { router } from "expo-router";

export default function Profile() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace("/(auth)/login");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Profile</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}