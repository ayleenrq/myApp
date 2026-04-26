import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type HabitItemProps = {
  habit: {
    title: string;
    description: string;
    completedDates?: string[];
  };
  onToggle: () => void;
  onDelete: () => void;
};

export default function HabitItem({ habit, onToggle, onDelete }: HabitItemProps) {
  const today = new Date().toISOString().split("T")[0];
  const done = habit.completedDates?.includes(today);

  return (
    <View style={[styles.card, done && styles.cardDone]}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, done && styles.titleDone]}>
            {habit.title}
          </Text>
          {habit.description ? (
            <Text style={[styles.description, done && styles.descriptionDone]}>
              {habit.description}
            </Text>
          ) : null}
        </View>

        <TouchableOpacity 
          onPress={onDelete} 
          style={styles.deleteButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Feather name="trash-2" size={20} color="#FF6B6B" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[styles.toggleButton, done ? styles.buttonDone : styles.buttonPending]} 
        onPress={onToggle}
        activeOpacity={0.8}
      >
        <Feather name={done ? "check-circle" : "circle"} size={20} color={done ? "#111111" : "#111111"} />
        <Text style={styles.toggleText}>
          {done ? "Completed Today!" : "Mark as Done"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardDone: {
    backgroundColor: '#F7FFE5',
    borderColor: '#D9F542',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2A2A2A',
    marginBottom: 4,
  },
  titleDone: {
    color: '#4B5915',
    textDecorationLine: 'line-through',
  },
  description: {
    fontSize: 15,
    color: '#666666',
    lineHeight: 22,
  },
  descriptionDone: {
    color: '#7C8C35',
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#FFF0F0',
    borderRadius: 12,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    gap: 8,
  },
  buttonPending: {
    backgroundColor: '#F4F4F4',
  },
  buttonDone: {
    backgroundColor: '#D9F542',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
  },
});