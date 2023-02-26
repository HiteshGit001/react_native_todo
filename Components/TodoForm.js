import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'

const TodoForm = ({ setTodo }) => {
  const [userInput, setUserInput] = useState();
  const handleAdd = () => {
    if(userInput<=3){
      Alert.alert("Opps!", "Must contain atleast 3 character");
    }
    else{
      setTodo((ps) => [{ todo: userInput, key: Math.random() }, ...ps])
    }
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setUserInput} placeholder='Add to do' />
      <View>
        <Button onPress={handleAdd} title="Add Task" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  }
})

export default TodoForm