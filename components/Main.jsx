import Constants from 'expo-constants'
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Repository Application</Text>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        container: {
            marginTop: Constants.statusBarHeight,
            flexShrink: 1,
            flexGrow: 1
        }
    }
)
export default Main