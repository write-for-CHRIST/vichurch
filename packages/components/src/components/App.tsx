import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppNavigator } from '../navigation/AppNavigation'

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    maxWidth: 400,
    backgroundColor: '#fff',
    width: '100%'
  },
})

export function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  )
}
