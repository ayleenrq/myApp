import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.replace("/(tabs)");
    } catch (err: any) {
      console.log(err);
      alert(err?.response?.data?.message || err.message || "Login failed");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>

      <Input placeholder="Email" onChangeText={setEmail} />
      <Input placeholder="Password" secureTextEntry onChangeText={setPassword} />

      <Button title="Login" onPress={handleLogin} />

      <Text onPress={() => router.push("/(auth)/register")}>
        Register
      </Text>
    </View>
  );
}