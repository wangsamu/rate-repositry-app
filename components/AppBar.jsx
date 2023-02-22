import { View, Text, Pressable, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
      <Text>Repositories</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: Constants.statusBarHeight
    }
})
export default AppBar