import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
    
      <TextInput placeholder={placeholder} value={value} onChangeText={(text)=>setValue(text)} style={styles.input} secureTextEntry={secureTextEntry} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: '100%',
    borderColor: "e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical:5,

    
  },
  input: {
    paddingVertical:10
    
  }
})
export default CustomInput