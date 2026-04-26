import { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { createHabit } from "../../services/api";
import { router } from "expo-router";

export default function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!title.trim()) return;
    
    setLoading(true);
    try {
      await createHabit({ title, description });
      router.replace("/(tabs)");
    } catch (error) {
      console.log(error);
      alert("Failed to create habit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.headerContainer}>
          <Text style={styles.emoji}>✨</Text>
          <Text style={styles.title}>Plant a new habit!</Text>
          <Text style={styles.subtitle}>What new routine do you want to build starting today?</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Habit Name</Text>
            <Input 
              placeholder="e.g., Drink 2L of water" 
              onChangeText={setTitle} 
              value={title}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description (Optional)</Text>
            <Input 
              placeholder="e.g., Keep a bottle on my desk" 
              onChangeText={setDescription}
              value={description}
            />
          </View>

          <Button 
            title={loading ? "Adding..." : "Add Habit"} 
            onPress={handleAdd} 
            disabled={!title.trim() || loading}
            style={styles.button}
          />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCF2', // Match cheerful theme
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 32,
  },
  emoji: {
    fontSize: 56,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2A2A2A',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 24,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 32,
    shadowColor: '#D9F542',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2A2A2A',
    marginBottom: 8,
    marginLeft: 4,
  },
  button: {
    marginTop: 12,
    shadowColor: '#D9F542',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 4,
  },
});