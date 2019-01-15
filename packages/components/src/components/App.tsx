import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 24
  }
})

export function App() {
  return (
    <View style={styles.container}>
      <Text>VGM TV</Text>
      <Text>Build apps!</Text>
    </View>
  )
}
