import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Modal, Button } from 'react-native';
function GoalItem(props) {

  const [optionModalVisible, setOptionModalVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const openOptions = () => {
    setOptionModalVisible(true);
  };
  const markAsCompleteToggle = () => {
    setIsCompleted(!isCompleted);
    setOptionModalVisible(false);
  }
  return (
    <View style={[styles.goalItem, isCompleted && styles.completedItem]}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        // onPress={props.onDeleteItem.bind(this, props.id)}
        onLongPress={openOptions}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
      <View>
          <Modal visible={optionModalVisible} animationType="fade" transparent={true}>
            <View style={styles.optionsContainer}>
                <View style={styles.optionItem}>
                  <Button title="Delete Goal" onPress={props.onDeleteItem.bind(this, props.id)} color='#c11010ff' />
                </View>
                <View style={styles.optionItem}>
                  <Button title={isCompleted ? "Mark In Progress" : "Mark Complete"} onPress={markAsCompleteToggle} color={isCompleted ? '#e47b25ff' : '#228B22'} />
                </View>
                <View style={styles.optionItem}>
                  <Button title="Cancel" onPress={() => setOptionModalVisible(false)} color='#b180f0' />
                </View>
            </View>
          </Modal>
      </View>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  completedItem: {
    backgroundColor: '#228B22',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  optionsContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 6,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionItem: {
    width: '80%',
    backgroundColor: '#fff',
  }
});
