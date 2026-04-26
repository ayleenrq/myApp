import { View, Text, Pressable } from "react-native";

type HabitItemProps = {
  habit: {
    title: string;
    description: string;
    completedDates?: string[];
  };
  onToggle: () => void;
};

export default function HabitItem({ habit, onToggle }: HabitItemProps) {
  const today = new Date().toISOString().split("T")[0];

  const done = habit.completedDates?.includes(today);

  return (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text style={{ fontSize: 18 }}>{habit.title}</Text>
      <Text>{habit.description}</Text>

      <Pressable onPress={onToggle}>
        <Text style={{ color: done ? "green" : "red" }}>
          {done ? "DONE" : "MARK DONE"}
        </Text>
      </Pressable>
    </View>
  );
}