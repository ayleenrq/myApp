import { useState } from "react";
import { View } from "react-native";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { createHabit } from "../../services/api";
import { router } from "expo-router";

export default function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    await createHabit({ title, description });
    router.replace("/(tabs)");
  };

  return (
    <View style={{ padding: 20 }}>
      <Input placeholder="Title" onChangeText={setTitle} />
      <Input placeholder="Description" onChangeText={setDescription} />

      <Button title="Add Habit" onPress={handleAdd} />
    </View>
  );
}