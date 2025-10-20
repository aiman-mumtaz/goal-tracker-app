import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.deleteGoalHandler.bind(this, props.id)}
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressed: { 
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
