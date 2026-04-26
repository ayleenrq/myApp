import { View, Text, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.emoji}>🐝</Text>
        <Text style={styles.title}>You are doing great!</Text>
        <Text style={styles.subtitle}>Keep up the buzzing good habits.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Account Settings</Text>
        <Text style={styles.cardText}>Manage your Dobee account details.</Text>
        
        <Button 
          title="Logout" 
          onPress={handleLogout} 
          style={styles.logoutButton}
          textStyle={styles.logoutButtonText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCF2', // Match cheerful theme
    padding: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
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
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 32,
    shadowColor: '#D9F542',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2A2A2A',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 32,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#FFF0F0',
    width: '100%',
    shadowOpacity: 0,
    elevation: 0,
  },
  logoutButtonText: {
    color: '#FF6B6B',
  },
});