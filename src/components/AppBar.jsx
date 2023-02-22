import { View, Text, Pressable, StyleSheet, Alert } from 'react-native'
import Constants from 'expo-constants'

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert('You pressed the App Bar!')}>
      <Text style={{color: 'white'}}>Repositories</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
        , backgroundColor: '#24292e'

    }
})
export default AppBar