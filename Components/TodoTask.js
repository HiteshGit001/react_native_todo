import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TodoTask = ({ item, handleRemove }) => {
  return (
    <View style={styles.container}>
      <Text>{item.todo}</Text>
      <TouchableOpacity onPress={() => handleRemove(item.key)}>
        <MaterialIcons size={20} name="delete" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "orange",
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
  }
})

export default TodoTask