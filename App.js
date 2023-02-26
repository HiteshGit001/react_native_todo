import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import TodosList from './pages/TodosList';

export default function App() {
  const [name, setName] = useState([
    { name: "hitesh", id: 1 },
    { name: "DInga", id: 2 },
    { name: "raj", id: 3 },
    { name: "hitesh", id: 4 },
    { name: "DInga", id: 5 },
    { name: "raj", id: 6 },
    { name: "hitesh", id: 7 },
    { name: "DInga", id: 8 },
    { name: "raj", id: 9 },
    { name: "hitesh", id: 10 },
    { name: "DInga", id: 11 },
    { name: "raj", id: 12 },
  ]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TodosList />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    padding: 30,
    margin: 10,
  },
  box2: {
    backgroundColor: "red",
  }
});
