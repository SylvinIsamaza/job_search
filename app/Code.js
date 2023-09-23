import { View, Text, StyleSheet, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { CustomInput } from '../components'
import CustomButton from '../components/customButton/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'
import { images } from '../constants'

const Code = () => {
  const {height}=useWindowDimensions()
  const [username, setUsername] = useState("")
  const [password,setPassword]=useState("")
  const handleLogin = () => {
    console.log('login')
  }

  const handleForgotPassword = () => {
  console.warn('forgot password')
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <View style={[styles.sub_root,{height:height*0.3}]} >
          <Image source={images.logo} resizeMode='contain' style={[styles.logo, { height: height * 0.3 }]} />
          <Text style={styles.logo_text}>Enter code sent to your email</Text>
      </View>

   
      <CustomInput  value={username} setValue={setUsername} placeholder="123-456" icon="icon" />
      
        <CustomButton text="Submit" onPress={handleLogin} />
        <CustomButton text="Resend code" onPress={handleLogin} type='SECONDARY'/>
        

      
    </View>
    </ScrollView>

  )
}

  const styles = StyleSheet.create({

  root: {
      alignItems: 'center',
      padding: 20
  
    },
    sub_root: {
      width: "100%",
      alignItems: 'center',
     
    },
    logo: {
      width: "30%",
      maxWidth: "200px",
      maxHeight:100
    },
    logo_text: {
      fontSize: 18,
      fontWeight:"700"
    }
})

export default Code