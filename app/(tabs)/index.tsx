import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getHabits, toggleHabit } from "../../services/api";
import HabitItem from "../../components/ui/habititem";

export default function Home() {
  const [habits, setHabits] = useState([]);

  const loadHabits = async () => {
    const res = await getHabits();
    setHabits(res.data);
  };

  const handleToggle = async (id: string) => {
    await toggleHabit(id);
    loadHabits();
  };

  useEffect(() => {
    loadHabits();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={habits}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <HabitItem habit={item} onToggle={() => handleToggle(item.id)} />
        )}
      />
    </View>
  );
}
