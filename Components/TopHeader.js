import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TopHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My to do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginBottom: 20,
    backgroundColor: "#3B71FE",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  }
})

export default TopHeader