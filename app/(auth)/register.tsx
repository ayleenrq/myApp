import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await register(email, password);
      router.replace("/(auth)/login");
    } catch (err: any) {
      console.log(err);
      alert(err?.response?.data?.message || err.message || "Registration failed");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Register</Text>

      <Input placeholder="Email" onChangeText={setEmail} />
      <Input placeholder="Password" secureTextEntry onChangeText={setPassword} />

      <Button title="Register" onPress={handleRegister} />

      <Text onPress={() => router.push("/(auth)/login")}>
        Login
      </Text>
    </View>
  );
}