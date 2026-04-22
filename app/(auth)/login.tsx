import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';

export default function LoginScreen() {
  return (
    <View style={{ margin: 20, paddingHorizontal: 24, paddingVertical: 32, borderRadius: 42, backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <Text style={{ marginBottom: 8, fontSize: 16, fontWeight: '500' }}>
        Email
      </Text>
      <Input placeholder="Enter your email address" />

      <Text style={{ marginTop: 16, marginBottom: 8, fontSize: 16, fontWeight: '500' }}>
        Password
      </Text>
      <Input
        placeholder="Enter your password"
        secureTextEntry
        rightIcon={<MaterialCommunityIcons name="eye-off" size={18} color="#B8B8B8" />}
      />

      <View style={{ marginTop: 24 }}>
        <Button title="Login" onPress={() => {}} />
      </View>
    </View>
  );
}