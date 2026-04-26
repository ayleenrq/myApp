import { router } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await register(name, email, password);
      router.replace("/(auth)/login");
    } catch (err: any) {
      console.log(err);
      alert(err?.response?.data?.message || err.message || "Registration failed");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <View style={styles.headerContainer}>
            <Text style={styles.emoji}>🐝</Text>
            <Text style={styles.title}>Join Dobee!</Text>
            <Text style={styles.subtitle}>Create an account and start your happy journey with us.</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputSpacing}>
              <Input 
                placeholder="Your Name" 
                onChangeText={setName} 
              />
            </View>
            <View style={styles.inputSpacing}>
              <Input 
                placeholder="Email Address" 
                onChangeText={setEmail} 
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputSpacing}>
              <Input 
                placeholder="Password" 
                secureTextEntry 
                onChangeText={setPassword} 
              />
            </View>

            <Button 
              title="Sign Up" 
              onPress={handleRegister} 
              style={styles.button} 
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Text 
              style={styles.linkText} 
              onPress={() => router.push("/(auth)/login")}
            >
              Login here
            </Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFCF2', // Soft, cheerful warm background
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2A2A2A',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 32,
    shadowColor: '#D9F542',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  inputSpacing: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    shadowColor: '#D9F542',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  footerText: {
    fontSize: 15,
    color: '#666666',
  },
  linkText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111111',
  },
});