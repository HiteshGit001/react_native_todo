import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import TodoTask from './TodoTask';

const TodoList = (props) => {
  const { todo, setTodo } = props;
  const handleRemove = (id) => {
    setTodo(todo.filter(item => id != item.key))
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={todo}
        renderItem={({ item }) => (
          <TodoTask handleRemove={handleRemove} item={item} />
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({

})
export default TodoList