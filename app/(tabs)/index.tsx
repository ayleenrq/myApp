import { useEffect, useState, useCallback } from "react";
import { View, FlatList, Text, StyleSheet, RefreshControl } from "react-native";
import { useFocusEffect } from "expo-router";
import { getHabits, toggleHabit, deleteHabit } from "../../services/api";
import HabitItem from "../../components/ui/habititem";

export default function Home() {
  const [habits, setHabits] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadHabits = async () => {
    try {
      const res = await getHabits();
      setHabits(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadHabits();
    setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadHabits();
    }, [])
  );

  const handleToggle = async (id: string) => {
    try {
      await toggleHabit(id);
      loadHabits();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteHabit(id);
      loadHabits();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      {habits.length === 0 && !refreshing ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>🌱</Text>
          <Text style={styles.emptyTitle}>No habits yet!</Text>
          <Text style={styles.emptySubtitle}>Start growing your habits today by tapping the "New Habit" tab below.</Text>
        </View>
      ) : (
        <FlatList
          data={habits}
          keyExtractor={(item: any) => item.id}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#D9F542" />
          }
          renderItem={({ item }) => (
            <HabitItem 
              habit={item} 
              onToggle={() => handleToggle(item.id)} 
              onDelete={() => handleDelete(item.id)}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCF2', // Match cheerful theme
  },
  listContent: {
    padding: 20,
    gap: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2A2A2A',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
});
