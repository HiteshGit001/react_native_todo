import React, { useState } from 'react'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import TodoForm from '../Components/TodoForm';
import TodoList from '../Components/TodoList';
import TopHeader from '../Components/TopHeader';

const TodosList = () => {
  const [todo, setTodo] = useState([
    { todo: "buy coffe", key: 1 }
  ])
  return (
    <View style={styles.content}>
      <TopHeader />
      <View style={styles.container}>
        <TodoForm setTodo={setTodo} />
        <TodoList setTodo={setTodo} todo={todo} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    margin: 20,
  }
})

export default TodosList;
